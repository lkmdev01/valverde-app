<template>
  <section class="hero-section">
    <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active bg-dark-custom pt-30">
          <div class="d-flex justify-content-center">
            <img 
              src="/logocirculo.png" 
              class="img-fluid hero-logo" 
              alt="Logotipo Barbearia Valverde"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="content-section bg-dark-custom text-center py-5">
      <div class="container">
        <h2 class="mb-2">FAÇA SEU AGENDAMENTO!</h2>
        <p class="description mx-auto mb-4">
          A Barbearia Valverde traz cortes modernos e clássicos, tendo em vista sempre 
          a satisfação de seus clientes, com serviços de qualidade e ótimo custo benefício. 
          Ambiente aconchegante e ótima música.
        </p>
        <a 
          href="https://api.whatsapp.com/send?phone=13997607210&text=Vim%20pelo%20site%20e%20gostaria%20de%20marcar%20um%20horário" 
          class="btn py-2 px-5 cta-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agende Agora
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Lógica do componente aqui, se necessário
</script>

<style scoped>
.hero-section {
  color: #ebebeb;
}

.hero-logo {
  width: 400px;
  max-width: 90%;
}

.bg-dark-custom {
  background-color: #363435;
}

.description {
  max-width: 600px;
  margin: 0 auto;
}

.cta-button {
  background-color: #c59e3d;
  color: #000000;
  border: 1px solid #000000;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #d4b05f;
  transform: translateY(-2px);
}
</style>
