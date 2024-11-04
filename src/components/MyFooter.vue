<template>
  <footer class="bg-cinza-dark text-white text-center text-lg-start">
    <div class="container p-4">
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="text-uppercase">Links Úteis</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!" class="text-white">Home</a>
            </li>
            <li>
              <a href="#!" class="text-white">Serviços</a>
            </li>
            <li>
              <a href="#!" class="text-white">Contato</a>
            </li>
          </ul>
          <h5 class="text-uppercase mt-5">Siga-nos</h5>
          <a href="#!" class="text-white me-3"><i class="fab fa-facebook-f"></i></a>
          <a href="#!" class="text-white me-3"><i class="fab fa-twitter"></i></a>
          <a href="#!" class="text-white me-3"><i class="fab fa-instagram"></i></a>
        </div>

        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="text-uppercase">Localização</h5>
          <p>Localizada no Guarujá (Vicente de Carvalho), em atendimento exclusivo e agendado para melhor servi-lo.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9879303170847!2d-46.25350268446324!3d-23.98763448448269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce0289d840e5e5%3A0x2f9e9d4f722bffeb!2sVicente%20de%20Carvalho%2C%20Guaruj%C3%A1%20-%20SP%2C%2011405-300!5e0!3m2!1spt-BR!2sbr!4v1635536701234!5m2!1spt-BR!2sbr"
            width="100%"
            height="200"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </div>
        <div class="col-lg-4 col-md-6 mb-4 text-center">
          <img src="/logocirculo.png" alt="Logo" class="logo-footer" />
        </div>
      </div>
    </div>

    <div class="text-center p-3 bg-cinza-dark-2">
      <p class="mb-0">© 2024 Todos os direitos reservados</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Se necessário, você pode adicionar lógica aqui.
</script>

<style scoped>
/* Adicione seu estilo personalizado aqui, se necessário */
footer {
  position: relative;
  bottom: 0;
  width: 100%;
}

.logo-footer {
  max-width: 150px; /* Ajuste o tamanho da logo conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
}
</style>
