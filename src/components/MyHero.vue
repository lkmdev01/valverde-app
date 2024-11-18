<template>
  <div>
    <!-- Carousel -->
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active bg-cinza" style="padding-top: 20px;">
          <img src="/logocirculo.png" class="img-fluid" style="width: 400px" alt="Nature Image">
        </div>
        <!-- Outros itens de carousel podem ser adicionados aqui -->
      </div>
    </div>

    <!-- Texto e Botão de Agendamento abaixo do carousel -->
    <div class="carousel-caption-below text-center py-4">
      <h2 class="fs-3 text-white">FAÇA SEU AGENDAMENTO!</h2>
      <p class="text-white" style="max-width: 600px; margin: 0 auto; margin-bottom: 10px;">
        A Barbearia Valverde traz cortes modernos e clássicos, tendo em vista sempre a satisfação de seus clientes, com serviços de qualidade e ótimo custo benefício. Ambiente aconchegante e ótima música.
      </p>
      <button type="button" class="btn btn-primary cta-button">
        <a style="text-decoration: none; color: black;" href="https://api.whatsapp.com/send?phone=5513981384533&text=Vim%20pelo%20site%20e%20gostaria%20de%20marcar%20um%20horário.">Agende Agora</a>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
h2, p, span {
  color: rgb(235, 235, 235);
}

.cta-button {
  background-color: #c59e3d;
  color: rgb(0, 0, 0);
  border: solid 1px rgb(0, 0, 0);
}

.bg-cinza {
  background-color: #363435;
}

.carousel-caption-below {
  background-color: #363435;
  padding: 20px 0;
}

.text-white {
  color: #ffffff;
}
</style>
