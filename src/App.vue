<script setup lang="ts">
import MyHero from "./components/MyHero.vue"
import MyNavBar from "./components/MyNavBar.vue"
import MyServices from "./components/MyServices.vue"
import MyAbout from "./components/MyAbout.vue"
import MyFooter from "./components/MyFooter.vue"
import MyReviews from "./components/MyReviews.vue"
</script>

<template>
  <header>
    <MyNavBar></MyNavBar>
    <MyHero></MyHero>
  </header>
  <MyServices></MyServices>
  <MyAbout></MyAbout>
  <div class="frase bg-cinza-dark-2 text-white">
    <div class="container text-center py-5">
      <h3>SEU ESTILO, NOSSO COMPROMISSO</h3>
      <p class="fst-italic" style="max-width: 600px; margin: 0 auto">
        Cada cliente é único e nosso atendimento também. Trabalhamos com dedicação para entender seu estilo e entregar
        um resultado que valorize sua personalidade.
        O corte é preciso.
        O atendimento é próximo.
        A confiança é construída a cada visita.
        Porque mais do que cuidar do visual, construímos relações que atravessam o tempo.
      </p>
    </div>
  </div>
  <MyReviews></MyReviews>
  <!-- <MyCTA></MyCTA> -->
  <!-- Adiconar localização da barbearia  -->
  <MyFooter></MyFooter>

</template>

<style scoped></style>


