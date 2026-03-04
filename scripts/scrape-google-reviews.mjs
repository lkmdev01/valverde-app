import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const REVIEWS_URL = process.env.GOOGLE_REVIEWS_URL || "https://share.google/TZPf3SSHkaCBHhxcW";
const OUTPUT_PATH = path.resolve(process.cwd(), "public", "reviews.json");
const MAX_REVIEWS = Number(process.env.GOOGLE_REVIEWS_MAX || 10);
const HEADFUL = process.env.HEADFUL === "1";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function openReviewsTab(page) {
  const candidates = [
    'button[aria-label*="avalia"]',
    'button[aria-label*="review"]',
    '[role="tab"][aria-label*="avalia"]',
    '[role="tab"][aria-label*="review"]',
  ];

  for (const selector of candidates) {
    const el = page.locator(selector).first();
    if (await el.count()) {
      await el.click({ force: true });
      return;
    }
  }
}

async function scrollReviewsPane(page) {
  const pane = page.locator('div[role="main"] div[aria-label*="avalia" i], div[role="main"] .m6QErb[aria-label]').first();
  if (!(await pane.count())) return;

  for (let i = 0; i < 8; i += 1) {
    await pane.evaluate((node) => {
      node.scrollBy(0, node.scrollHeight);
    });
    await delay(700);
  }
}

async function scrape() {
  const browser = await chromium.launch({ headless: !HEADFUL });
  const context = await browser.newContext({ locale: "pt-BR" });
  const page = await context.newPage();

  try {
    await page.goto(REVIEWS_URL, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForLoadState("networkidle", { timeout: 60000 });

    if (page.url().includes("google.com/sorry")) {
      throw new Error(
        "Google bloqueou a coleta automática (página /sorry). Rode com HEADFUL=1 e resolva o desafio manualmente."
      );
    }

    await openReviewsTab(page);
    await delay(1200);
    await scrollReviewsPane(page);

    const raw = await page.evaluate(() => {
      const cards = Array.from(document.querySelectorAll("div.jftiEf"));
      return cards.map((card) => {
        const name = card.querySelector(".d4r55")?.textContent?.trim() || "Cliente Google";
        const time = card.querySelector(".rsqaWe")?.textContent?.trim() || "recentemente";
        const text = card.querySelector(".wiI7pd")?.textContent?.trim() || "";
        const ratingLabel = card.querySelector('[role="img"]')?.getAttribute("aria-label") || "";
        const ratingMatch = ratingLabel.match(/([0-5](?:[.,][0-9])?)/);
        const rating = ratingMatch ? Math.round(Number(ratingMatch[1].replace(",", "."))) : 5;

        return { name, time, rating, text };
      });
    });

    const reviews = raw.filter((r) => r.text).slice(0, MAX_REVIEWS);

    if (!reviews.length) {
      throw new Error("Não foi possível coletar avaliações. O layout do Google pode ter mudado.");
    }

    const payload = {
      updatedAt: new Date().toISOString(),
      source: REVIEWS_URL,
      reviews,
    };

    await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, "utf-8");
    console.log(`reviews.json atualizado com ${reviews.length} avaliações.`);
  } finally {
    await context.close();
    await browser.close();
  }
}

scrape().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
