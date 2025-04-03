<script setup lang="ts">
import { ref } from 'vue'

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Contato', href: '#contato' }
]

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-toggle" :class="{ 'active': isOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="nav-menu" :class="{ 'active': isOpen }">
        <ul>
          <li v-for="item in menuItems" :key="item.name">
            <a :href="item.href" @click="closeMenu">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #363435;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: center; /* Centralizado agora que não tem logo */
  align-items: center;
}

/* Remove .nav-logo styles */

.nav-menu ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu a {
  color: #D5C185;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #D5C185;
  transition: width 0.3s ease;
}

.nav-menu a:hover::after {
  width: 100%;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 4px;
}

.nav-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #D5C185;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  .nav-menu {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #363435;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-menu ul {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  .nav-menu a {
    font-size: 1.2rem;
  }
}
</style>
