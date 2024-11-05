<template>
  <div class="bg-cinza">
    <div class="container py-5">
      <div class="text-center">
        <h2 class="fs-3">Faça seu agendamento!</h2>
        <p style="max-width: 600px; margin: 0 auto;margin-bottom: 10px;">
          A Barbearia Valverde traz cortes modernos e clássicos, tendo em vista sempre a satisfação de seus clientes, com serviços de qualidade e ótimo custo benefício. Ambiente aconchegante e ótima música.
        </p>
        <button type="button" class="btn btn-primary cta-button">Agende Agora</button>
        <!-- <span class="span-text">Veja nosso trabalho abaixo</span> -->
      </div>
      <!-- <div class="row justify-content-center">
        <div id="carouselExampleIndicators" class="carousel slide w-75" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://wellivalentesalon.com.br/wp-content/webp-express/webp-images/uploads/2024/05/image-820x1024.png.webp" class="d-block img-fluid slide-img" alt="Slide 1">
            </div>
            <div class="carousel-item">
              <img src="https://blog.oceane.com.br/wp-content/uploads/2024/02/destaque-cortes-de-cabelo-masculino.jpg" class="d-block img-fluid slide-img" alt="Slide 2">
            </div>
            <div class="carousel-item">
              <img src="https://barbeariatatuape.com.br/wp-content/uploads/2020/02/corte-americano-38.jpg" class="d-block img-fluid slide-img" alt="Slide 3">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> -->
      <!-- <div class="text-center mt-4">
        
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
h2, p, span {
  color: rgb(235, 235, 235);
}

.span-text{
  background-color: #c59e3d;
  padding: 3px 16px;
  border-radius: 15px;
  font-weight: 600;
  color: rgb(10, 10, 10);
}

.cta-button {
  background-color: #c59e3d;
  color: rgb(0, 0, 0);
  border: solid 1px rgb(0, 0, 0);
}

.bg-cinza {
  background-color: #363435;
}

.carousel-inner {
  height: 600px; /* Altura fixa para garantir que as imagens estejam no formato retrato */
}

.slide-img {
  object-fit: cover; /* Cobre a área do slide sem distorcer a imagem */
  width: auto;
  height: 100%; /* Ajusta a altura da imagem ao slide */
  max-height: 600px; /* Garante que a altura máxima seja respeitada */
  margin: 0 auto; /* Centraliza a imagem dentro do slide */
}

.carousel-control-prev, 
.carousel-control-next {
  top: 50%;
  transform: translateY(-50%);
  width: 5%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 2rem;
  height: 2rem;
}
</style>
