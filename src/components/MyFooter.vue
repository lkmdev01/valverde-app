<template>
  <footer id="contato" class="bg-cinza text-white text-center text-lg-start">
    <div class="container px-4 py-5">
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-6 mb-15 md:mb-4 text-center">
          <img src="/logocirculo.png" alt="Logo" class="logo-footer mx-auto" />
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="text-uppercase">Links Úteis</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#home" class="text-white">Home</a>
            </li>
            <li>
              <a href="#about" class="text-white">Serviços</a>
            </li>
            <li>
              <a href="#contato" class="text-white">Contato</a>
            </li>
          </ul>
          <h5 class="text-uppercase mt-5">Siga-nos</h5>
          <a href="https://www.facebook.com/barbeariavalverde" class="text-white me-3"><i class="fab fa-facebook-f"></i></a>
          <a href="https://api.whatsapp.com/send?phone=5513997607210" class="text-white me-3"><i class="fab fa-whatsapp"></i></a>
          <a href="https://www.instagram.com/barbeariavalverde/" class="text-white me-3"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="col-lg-4 col-md-6 mb-4">
          <h5 class="text-uppercase">Localização</h5>
          <p>Localizada no Guarujá (Vicente de Carvalho), em atendimento exclusivo e agendado para melhor servi-lo.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.9879303170847!2d-46.25350268446324!3d-23.98763448448269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce0289d840e5e5%3A0x2f9e9d4f722bffeb!2sR.%20Nova%20Esperan%C3%A7a%2C%20169%20-%20S%C3%ADtio%20Paecara%20(Vicente%20de%20Carvalho)%2C%20Guaruj%C3%A1%20-%20SP%2C%2011463-060!5e0!3m2!1spt-BR!2sbr!4v1635536701234!5m2!1spt-BR!2sbr"
            width="100%"
            height="200"
            style="border:0;"
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>

    <div class="text-center p-3 bg-cinza-dark border-t border-gray-400">
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
  max-width: 200px; /* Ajuste o tamanho da logo conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
}

</style>
