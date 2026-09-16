<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

type Review = { name: string; time: string; rating: number; text: string };

const whatsappBase = "https://wa.me/5513997607210";
const bookingUrl = `${whatsappBase}?text=${encodeURIComponent("Olá! Vim pelo site da Barbearia Valverde e gostaria de agendar um horário.")}`;

const services = [
  {
    number: "01", title: "Corte",
    description: "Do clássico ao atual, com leitura de formato, acabamento preciso e um corte que funciona também no dia a dia.",
    image: "/service-c.jpg", alt: "Corte masculino com desenho e acabamento da Barbearia Valverde",
    message: "Olá! Vim pelo site e gostaria de agendar um corte de cabelo.",
  },
  {
    number: "02", title: "Barba",
    description: "Desenho, alinhamento e cuidado com toalha quente para devolver forma, conforto e presença à sua barba.",
    image: "/service-b.jpg", alt: "Barba longa alinhada na Barbearia Valverde",
    message: "Olá! Vim pelo site e gostaria de agendar um horário para barba.",
  },
  {
    number: "03", title: "Corte + barba",
    description: "A experiência completa da casa: cabelo e barba pensados juntos para um visual coerente, limpo e marcante.",
    image: "/service-cb.jpg", alt: "Corte e barba finalizados na Barbearia Valverde",
    message: "Olá! Vim pelo site e gostaria de agendar cabelo e barba.",
  },
];

const gallery = [
  { number: "01", image: "/service-c.jpg", alt: "Corte masculino com degradê e desenho geométrico na lateral", title: "Corte com desenho", detail: "Precisão em cada linha" },
  { number: "02", image: "/service-b.jpg", alt: "Barba longa aparada e alinhada", title: "Barba alinhada", detail: "Forma e personalidade" },
  { number: "03", image: "/service-cb.jpg", alt: "Corte degradê com barba finalizada", title: "Corte + barba", detail: "Visual completo" },
];

const shopProducts = [
  {
    number: "01",
    type: "Finalização",
    title: "Pomada modeladora",
    description: "Para dar textura, definição e manter o corte no lugar sem perder a naturalidade.",
    art: "pomade",
    label: "POMADA",
  },
  {
    number: "02",
    type: "Cuidado diário",
    title: "Óleo para barba",
    description: "Um cuidado simples para deixar os fios mais macios e a barba com aparência bem cuidada.",
    art: "oil",
    label: "ÓLEO",
  },
  {
    number: "03",
    type: "Pós-barba",
    title: "Balm pós-barba",
    description: "Para completar a rotina depois de barbear e dar conforto à pele.",
    art: "balm",
    label: "BALM",
  },
];

const fallbackReviews: Review[] = [
  { name: "Cliente Google", time: "há 1 mês", rating: 5, text: "Atendimento excelente, ambiente acolhedor e corte impecável." },
  { name: "Cliente Google", time: "há 2 meses", rating: 5, text: "Pontualidade, atenção aos detalhes e resultado acima da expectativa." },
  { name: "Cliente Google", time: "há 3 meses", rating: 5, text: "Profissionais muito bons. Sempre saio satisfeito e volto com confiança." },
  { name: "Cliente Google", time: "há 4 meses", rating: 5, text: "Experiência completa, do atendimento ao acabamento final." },
  { name: "Cliente Google", time: "há 5 meses", rating: 5, text: "Ótimo custo-benefício e atendimento que faz diferença." },
];

const menuOpen = ref(false);
const reviews = ref<Review[]>(fallbackReviews);
const reviewIndex = ref(0);
const reviewsPerPage = ref(3);
let revealObserver: IntersectionObserver | undefined;

const visibleReviews = computed(() => {
  const result: Review[] = [];
  for (let offset = 0; offset < Math.min(reviewsPerPage.value, reviews.value.length); offset += 1) {
    result.push(reviews.value[(reviewIndex.value + offset) % reviews.value.length]);
  }
  return result;
});

const serviceLink = (message: string) => `${whatsappBase}?text=${encodeURIComponent(message)}`;
const productLink = (title: string) => `${whatsappBase}?text=${encodeURIComponent(`Olá! Vi ${title.toLowerCase()} na seção Shop do site. Quais marcas, tamanhos e valores vocês têm disponíveis?`)}`;
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  document.body.classList.toggle("menu-open", menuOpen.value);
};
const closeMenu = () => {
  menuOpen.value = false;
  document.body.classList.remove("menu-open");
};
const updateReviewsPerPage = () => {
  reviewsPerPage.value = window.innerWidth < 760 ? 1 : window.innerWidth < 1040 ? 2 : 3;
};
const moveReviews = (direction: number) => {
  reviewIndex.value = (reviewIndex.value + direction + reviews.value.length) % reviews.value.length;
};
const loadReviews = async () => {
  try {
    const response = await fetch("/reviews.json", { cache: "no-store" });
    if (!response.ok) return;
    const data = (await response.json()) as { reviews?: Review[] };
    const valid = data.reviews?.filter((review) => review.name && review.text && review.rating);
    if (valid?.length) reviews.value = valid;
  } catch {
    // Keep the local testimonials when live data is unavailable.
  }
};

onMounted(() => {
  updateReviewsPerPage();
  window.addEventListener("resize", updateReviewsPerPage);
  void loadReviews();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver?.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => revealObserver?.observe(element));
});

onUnmounted(() => {
  window.removeEventListener("resize", updateReviewsPerPage);
  revealObserver?.disconnect();
  document.body.classList.remove("menu-open");
});
</script>

<template>
  <div class="site-shell">
    <div class="barber-stripe" aria-hidden="true"></div>

    <header id="inicio" class="hero">
      <nav class="nav" aria-label="Navegação principal">
        <a class="brand" href="#inicio" aria-label="Barbearia Valverde — início" @click="closeMenu">
          <img src="/logocirculo.png?v=20260916-verde" alt="" />
          <span><strong>VALVERDE</strong><small>BARBEARIA • DESDE 2019</small></span>
        </a>
        <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Abrir menu" @click="toggleMenu"><span></span><span></span></button>
        <div class="nav-links" :class="{ open: menuOpen }">
          <a href="#servicos" @click="closeMenu">Serviços</a>
          <a href="#cortes" @click="closeMenu">Nossos cortes</a>
          <a href="#shop" @click="closeMenu">Shop</a>
          <a href="#historia" @click="closeMenu">Nossa casa</a>
          <a href="#avaliacoes" @click="closeMenu">Avaliações</a>
          <a href="#visite" @click="closeMenu">Localização</a>
          <a class="nav-cta" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Agendar horário <span>↗</span></a>
        </div>
      </nav>

      <div class="hero-grid">
        <div class="hero-copy reveal">
          <p class="eyebrow"><span></span> Vicente de Carvalho • Guarujá</p>
          <h1>Seu corte.<br /><em>Sua presença.</em></h1>
          <p class="hero-text">Técnica, conversa boa e atenção aos detalhes. Um atendimento feito com calma para você sair com o visual certo — e vontade de voltar.</p>
          <div class="hero-actions">
            <a class="button button-primary" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="#servicos">Conhecer os serviços <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div class="hero-visual reveal">
          <div class="hero-photo-frame">
            <img src="/service-cb.jpg" alt="Cliente com corte e barba finalizados na Barbearia Valverde" />
            <span class="photo-caption">Trabalho real • Valverde</span>
          </div>
          <div class="hero-seal" aria-label="Mais de 6 anos de história"><strong>6+</strong><span>anos de<br />história</span></div>
          <p class="vertical-note">BARBEARIA DE VERDADE</p>
        </div>
      </div>

      <div class="hero-bottom">
        <div><span>01</span><p>Atendimento<br />com hora marcada</p></div>
        <div><span>02</span><p>Acabamento<br />sem pressa</p></div>
        <div><span>03</span><p>Ambiente leve<br />e boa conversa</p></div>
      </div>
    </header>

    <main>
      <section id="servicos" class="services section-pad">
        <div class="section-heading reveal">
          <div><p class="eyebrow dark"><span></span> O que fazemos</p><h2>Serviço bom<br />se nota <em>no detalhe.</em></h2></div>
          <p>Cada atendimento começa entendendo o que combina com você. A técnica entra para valorizar seu estilo, não para apagar sua identidade.</p>
        </div>
        <div class="service-list">
          <article v-for="service in services" :key="service.number" class="service-row reveal">
            <span class="service-number">{{ service.number }}</span>
            <div class="service-image"><img :src="service.image" :alt="service.alt" loading="lazy" /></div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <a :href="serviceLink(service.message)" target="_blank" rel="noopener noreferrer" :aria-label="`Agendar ${service.title} pelo WhatsApp`">↗</a>
          </article>
        </div>
      </section>

      <section id="cortes" class="gallery section-pad" aria-labelledby="gallery-title">
        <div class="gallery-heading reveal">
          <div>
            <p class="eyebrow light"><span></span> Trabalhos da casa</p>
            <h2 id="gallery-title">O resultado<br /><em>fala por si.</em></h2>
          </div>
          <div class="gallery-intro">
            <p>Alguns trabalhos reais feitos aqui na Valverde. Cada corte tem seu jeito; o capricho é sempre o mesmo.</p>
            <span>Deslize para ver mais <span aria-hidden="true">→</span></span>
          </div>
        </div>
        <div class="gallery-grid" tabindex="0" aria-label="Galeria de cortes e barbas; deslize para ver as fotos">
          <figure v-for="work in gallery" :key="work.number" class="gallery-card reveal">
            <div class="gallery-photo"><img :src="work.image" :alt="work.alt" loading="lazy" /></div>
            <figcaption>
              <span>{{ work.number }} / 03</span>
              <div><strong>{{ work.title }}</strong><small>{{ work.detail }}</small></div>
            </figcaption>
          </figure>
        </div>
        <div class="gallery-bottom reveal">
          <p>Gostou do que viu? O próximo pode ser o seu.</p>
          <a class="button button-gold" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Agendar meu corte <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section id="shop" class="shop section-pad">
        <div class="shop-heading reveal">
          <div>
            <p class="eyebrow light"><span></span> Shop • seleção da casa</p>
            <h2>O cuidado continua<br /><em>fora da cadeira.</em></h2>
          </div>
          <p>Alguns essenciais para manter o visual em dia entre uma visita e outra. Fale com a gente para saber as marcas, tamanhos e opções disponíveis.</p>
        </div>

        <div class="shop-grid">
          <article v-for="product in shopProducts" :key="product.number" class="shop-card reveal">
            <div class="shop-art" :class="`shop-art--${product.art}`" aria-hidden="true">
              <span class="shop-art-number">{{ product.number }} / 03</span>
              <div class="product-object" :class="`product-object--${product.art}`">
                <span class="product-cap"></span>
                <span class="product-body"><span class="product-label"><small>BARBER CARE</small><strong>{{ product.label }}</strong><i>ESSENTIAL</i></span></span>
              </div>
              <span class="shop-art-word">{{ product.type }}</span>
            </div>
            <div class="shop-card-info">
              <p>{{ product.type }}</p>
              <h3>{{ product.title }}</h3>
              <span>{{ product.description }}</span>
              <a :href="productLink(product.title)" target="_blank" rel="noopener noreferrer" :aria-label="`Consultar ${product.title} pelo WhatsApp`">Consultar no WhatsApp <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
        <p class="shop-note reveal">Produtos ilustrativos. Marcas, tamanhos, preços e disponibilidade são confirmados diretamente com a barbearia.</p>
      </section>

      <section id="historia" class="story">
        <div class="story-image reveal">
          <img src="/service-b.jpg" alt="Cliente da Barbearia Valverde com barba finalizada" loading="lazy" />
          <div class="story-mark"><img src="/logocirculo.png?v=20260916-verde" alt="Símbolo da Barbearia Valverde" /></div>
        </div>
        <div class="story-copy reveal">
          <p class="eyebrow light"><span></span> Nossa casa</p>
          <h2>Mais que uma cadeira.<br /><em>Um ponto de encontro.</em></h2>
          <p>A Valverde nasceu em 2019 com uma ideia simples: recuperar o melhor da barbearia de bairro — o profissional que conhece seu estilo, a conversa sem formalidade e o capricho que faz diferença.</p>
          <p>Aqui, cada cliente é recebido pelo nome. O corte é preciso, o atendimento é próximo e a confiança se constrói visita após visita.</p>
          <blockquote>“Você não é só mais um cliente.<br />É parte da casa.”</blockquote>
        </div>
      </section>

      <section class="manifesto" aria-label="Manifesto Valverde">
        <p aria-hidden="true">VALVERDE • VALVERDE • VALVERDE •</p>
        <div class="manifesto-inner reveal">
          <span>Nosso compromisso</span>
          <h2>Sem fórmula pronta.<br />Sem atendimento automático.<br /><em>Só trabalho bem-feito.</em></h2>
        </div>
      </section>

      <section id="avaliacoes" class="reviews section-pad">
        <div class="reviews-top reveal">
          <div><p class="eyebrow dark"><span></span> Palavra de quem sentou na cadeira</p><h2>Quem vem,<br /><em>recomenda.</em></h2></div>
          <div class="rating-summary"><strong>5,0</strong><div><span>★★★★★</span><small>Avaliações no Google</small></div></div>
        </div>
        <div class="review-grid reveal" aria-live="polite">
          <article v-for="review in visibleReviews" :key="`${review.name}-${review.time}`" class="review-card">
            <span class="quote-mark">“</span><div class="stars">{{ "★".repeat(review.rating) }}</div><p>{{ review.text }}</p>
            <footer><strong>{{ review.name }}</strong><span>{{ review.time }}</span></footer>
          </article>
        </div>
        <div class="review-controls reveal">
          <div><button type="button" aria-label="Avaliação anterior" @click="moveReviews(-1)">←</button><button type="button" aria-label="Próxima avaliação" @click="moveReviews(1)">→</button></div>
          <a href="https://share.google/TZPf3SSHkaCBHhxcW" target="_blank" rel="noopener noreferrer">Ver todas no Google ↗</a>
        </div>
      </section>

      <section id="visite" class="visit">
        <div class="visit-copy reveal">
          <p class="eyebrow light"><span></span> Onde estamos</p>
          <h2>Seu próximo corte<br />começa <em>aqui.</em></h2>
          <div class="visit-info">
            <div><small>Endereço</small><p>Rua Nova Esperança, 169<br />Sítio Paecara — Guarujá, SP</p></div>
            <div><small>Atendimento</small><p>Exclusivo e com hora marcada.<br />Fale com a gente para consultar horários.</p></div>
          </div>
          <div class="visit-actions">
            <a class="button button-gold" :href="bookingUrl" target="_blank" rel="noopener noreferrer">Quero agendar <span>↗</span></a>
            <a class="map-link" href="https://maps.google.com/?q=R.+Nova+Esperan%C3%A7a,+169+-+S%C3%ADtio+Paecara,+Guaruj%C3%A1+-+SP,+11463-060" target="_blank" rel="noopener noreferrer">Abrir no mapa ↗</a>
          </div>
        </div>
        <div class="map-wrap reveal">
          <iframe title="Mapa da Barbearia Valverde" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9879303170847!2d-46.25350268446324!3d-23.98763448448269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce0289d840e5e5%3A0x2f9e9d4f722bffeb!2sR.%20Nova%20Esperan%C3%A7a%2C%20169%20-%20S%C3%ADtio%20Paecara%20(Vicente%20de%20Carvalho)%2C%20Guaruj%C3%A1%20-%20SP%2C%2011463-060!5e0!3m2!1spt-BR!2sbr!4v1635536701234!5m2!1spt-BR!2sbr" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <span>23°59'15.5"S&nbsp;&nbsp; 46°15'12.6"W</span>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-main">
        <a class="footer-brand" href="#inicio"><img src="/logocirculo.png?v=20260916-verde" alt="Barbearia Valverde" /></a>
        <p>Corte preciso. Atendimento próximo.<br />Desde 2019 no Guarujá.</p>
        <div class="social-links">
          <a href="https://www.instagram.com/barbeariavalverde/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <a href="https://www.facebook.com/barbeariavalverde" target="_blank" rel="noopener noreferrer">Facebook ↗</a>
          <a :href="whatsappBase" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
        </div>
      </div>
      <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} Barbearia Valverde</span><span>Guarujá • São Paulo</span></div>
    </footer>

    <a class="floating-whatsapp" :href="bookingUrl" target="_blank" rel="noopener noreferrer" aria-label="Agendar pelo WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a12 12 0 0 0 5.4 1.3c6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.4-8.3Zm-8.4 18.1c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-3.9 1 1-3.8-.2-.4a9.7 9.7 0 1 1 8.4 4.7Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4Z" /></svg>
      <span>Agendar</span>
    </a>
  </div>
</template>
