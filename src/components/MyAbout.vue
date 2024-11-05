<template>
  <div id="about" class="bg-cinza-2">
    <div class="container py-5">
      <div class="row align-items-center justify-content-center"> <!-- Ajustado para centralizar -->
        <!-- <div class="col-12 col-md-6 mb-4 flex">
          <img
            src="https://curtamais.com.br/goiania/wp-content/uploads/sites/2/2023/08/0a219fa8123968fb4052151e0c10bd4b-819x1024.jpg"
            class="img-fluid rounded w-50"
            alt="Barbearia"
          />
        </div> -->
        <div class="col-12 text-center"> <!-- Adicionada classe text-center -->
          <h2 class="fs-3">QUEM SOMOS</h2>
          <p class="" style="max-width: 700px; margin: 0 auto;"> <!-- Adicionado margin: 0 auto para centralizar o parágrafo -->
            A Barbearia Valverde foi fundadada em outubro de 2019, com a intensão de prestar serviços de alta qualidade. Tendo em vista sempre o atendimento diferenciado e customizado.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Estilo adicional, se necessário */
img {
  float: right;
  margin-right: 20px;
}

h1, h2{
  color: #D5C185; 
}

p {
  color: rgb(220, 220, 220);
}

.bg-cinza-2 {
  background-color: #222222;
}
</style>
