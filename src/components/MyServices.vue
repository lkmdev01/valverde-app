<template>
<div class="bg-cinza-dark">
  <div class="d-flex justify-content-center gap-3 flex-wrap py-5 container">
    <div class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">CABELO</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Entrar em contato</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">BARBA</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Entrar em contato</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">CABELO + BARBA</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.card{
  background-color: #141414;
  color: rgb(232, 232, 232);
  border: solid 1px rgb(0, 0, 0);
}

.card a{
  background-color: #c59e3d;
  color: rgb(0, 0, 0);
  border: solid 1px rgb(0, 0, 0);
}
</style>