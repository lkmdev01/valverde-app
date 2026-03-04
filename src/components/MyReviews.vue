<template>
  <section id="reviews" class="reviews-section bg-cinza-dark text-white py-5">
    <div class="container">
      <div class="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
        <div>
          <h2 class="fs-3 mb-1 text-start">AVALIAÇÕES NO GOOGLE</h2>
          <p class="mb-0 text-light-subtle">O que os clientes dizem sobre a experiência na Barbearia Valverde.</p>
        </div>
        <a :href="googleReviewsUrl" target="_blank" rel="noopener noreferrer" class="btn reviews-link">
          Ver no Google
        </a>
      </div>

      <div class="slider-wrapper">
        <button class="nav-btn" type="button" aria-label="Avaliação anterior" @click="prev">
          <span class="nav-icon nav-icon-left" aria-hidden="true">&#10094;</span>
        </button>

        <div class="cards-grid">
          <article v-for="review in visibleReviews" :key="review.name + review.time" class="review-card">
            <div class="review-stars">{{ stars(review.rating) }}</div>
            <p class="review-text">"{{ review.text }}"</p>
            <div class="review-meta">
              <strong>{{ review.name }}</strong>
              <span>{{ review.time }}</span>
            </div>
          </article>
        </div>

        <button class="nav-btn" type="button" aria-label="Próxima avaliação" @click="next">
          <span class="nav-icon nav-icon-right" aria-hidden="true">&#10095;</span>
        </button>
      </div>

      <div class="dots mt-3" aria-hidden="true">
        <span v-for="dot in totalSlides" :key="dot" class="dot" :class="{ active: dot - 1 === currentIndex }" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

type Review = {
  name: string;
  time: string;
  rating: number;
  text: string;
};

const googleReviewsUrl = "https://share.google/TZPf3SSHkaCBHhxcW";

const reviews: Review[] = [
  {
    name: "Cliente Google",
    time: "há 1 mês",
    rating: 5,
    text: "Atendimento excelente, ambiente acolhedor e corte impecável.",
  },
  {
    name: "Cliente Google",
    time: "há 2 meses",
    rating: 5,
    text: "Pontualidade, atenção aos detalhes e resultado acima da expectativa.",
  },
  {
    name: "Cliente Google",
    time: "há 3 meses",
    rating: 5,
    text: "Profissionais muito bons. Sempre saio satisfeito e volto com confiança.",
  },
  {
    name: "Cliente Google",
    time: "há 4 meses",
    rating: 5,
    text: "Experiência completa, do atendimento ao acabamento final.",
  },
  {
    name: "Cliente Google",
    time: "há 5 meses",
    rating: 5,
    text: "Ótimo custo-benefício e atendimento que faz diferença.",
  },
];

const currentIndex = ref(0);
const visibleCount = ref(3);

const totalSlides = computed(() => Math.max(1, reviews.length - visibleCount.value + 1));

const visibleReviews = computed(() => {
  const start = currentIndex.value;
  const end = start + visibleCount.value;
  return reviews.slice(start, end);
});

const updateVisibleCount = () => {
  if (window.innerWidth < 768) {
    visibleCount.value = 1;
  } else if (window.innerWidth < 992) {
    visibleCount.value = 2;
  } else {
    visibleCount.value = 3;
  }

  if (currentIndex.value > totalSlides.value - 1) {
    currentIndex.value = totalSlides.value - 1;
  }
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value;
};

const stars = (rating: number) => "★".repeat(rating) + "☆".repeat(5 - rating);

onMounted(() => {
  updateVisibleCount();
  window.addEventListener("resize", updateVisibleCount);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateVisibleCount);
});
</script>

<style scoped>
.reviews-link {
  background-color: #c59e3d;
  color: #000;
  border: 1px solid #000;
}

.reviews-link:hover {
  background-color: #d4b05f;
  color: #000;
}

.slider-wrapper {
  display: grid;
  grid-template-columns: 52px 1fr 52px;
  gap: 0.75rem;
  align-items: center;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.review-card {
  background: #252525;
  border: 1px solid #3a3a3a;
  border-radius: 12px;
  padding: 1rem;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.review-stars {
  color: #d5c185;
  font-size: 1rem;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

.review-text {
  color: #f1f1f1;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.review-meta {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  color: #c7c7c7;
  font-size: 0.9rem;
}

.nav-btn {
  width: 42px;
  height: 42px;
  margin: 0 auto;
  padding: 0;
  border: 1px solid #555;
  background: #1f1f1f;
  color: #f1f1f1;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  line-height: 1;
  transition: all 0.25s ease;
}

.nav-icon {
  display: block;
  line-height: 1;
}

.nav-icon-left {
  transform: translateX(-1px);
}

.nav-icon-right {
  transform: translateX(1px);
}

.nav-btn:hover {
  border-color: #c59e3d;
  color: #c59e3d;
  transform: translateY(-1px);
  box-shadow: 0 0 0 3px rgba(197, 158, 61, 0.15);
}

.dots {
  display: flex;
  justify-content: center;
  gap: 0.45rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #595959;
}

.dot.active {
  background: #d5c185;
}

@media (max-width: 991px) {
  .cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .slider-wrapper {
    grid-template-columns: 44px 1fr 44px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  .review-card {
    min-height: 200px;
  }
}
</style>
