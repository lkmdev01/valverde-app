<script setup lang="ts">
import MyNavbar from "./components/MyNavbar.vue";
import MyHero from "./components/MyHero.vue"
import MyServices from "./components/MyServices.vue"
import MyAbout from "./components/MyAbout.vue"
import MyFooter from "./components/MyFooter.vue"
import MyCTA from "./components/MyCTA.vue"
</script>

<template>
  <header>
    <MyNavbar></MyNavbar>
    <MyHero></MyHero>
  </header>
  <MyServices></MyServices>
  <MyAbout></MyAbout>
  <!-- Adicionar componete que mostra avaliações do Google meu negocio -->
  <div class="frase bg-cinza-dark-2 text-white">
    <div class="container text-center py-5">
      <h3>Aqui cada cliente é único</h3>
      <p class="fst-italic" style="max-width: 600px; margin: 0 auto">
          Aqui, tratamos cada cliente com uma exclusividade única e trabalhamos para oferecer um serviço especial que atenda às suas necessidades.
      </p>
    </div>
  </div>
  <MyCTA></MyCTA>
  <!-- Adiconar localização da barbearia  -->
  <MyFooter></MyFooter>

</template>

<style scoped>

</style>
