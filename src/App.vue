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
  <MyReviews></MyReviews>
  <div class="frase bg-cinza-dark-2 text-white">
    <div class="container text-center py-5">
      <h3>SEU ESTILO, NOSSO COMPROMISSO</h3>
      <p class="fst-italic" style="max-width: 600px; margin: 0 auto">
        Cada cliente Ã© Ãºnico â€” e nosso atendimento tambÃ©m. Trabalhamos com dedicaÃ§Ã£o para entender seu estilo e entregar
        um resultado que valorize sua personalidade.
        O corte Ã© preciso.
        O atendimento Ã© prÃ³ximo.
        A confianÃ§a Ã© construÃ­da a cada visita.
        Porque mais do que cuidar do visual, construÃ­mos relaÃ§Ãµes que atravessam o tempo.
      </p>
    </div>
  </div>
  <!-- <MyCTA></MyCTA> -->
  <!-- Adiconar localizaÃ§Ã£o da barbearia  -->
  <MyFooter></MyFooter>

</template>

<style scoped></style>


