<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Navbar from './Navbar.vue'
import BurgerNav from './BurgerNav.vue'
import HeaderSubtitle from './HeaderSubtitle.vue'
const currentComponent = ref(window.innerWidth > 700 ? Navbar : BurgerNav)

const handleResize = () => {
  currentComponent.value = window.innerWidth > 700 ? Navbar : BurgerNav
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header>
    <div class="bg"></div>
    <div class="content">
      <component :is="currentComponent" />

      <HeaderSubtitle />
    </div>
  </header>
</template>

<style scoped>
header {
  padding-bottom: 20%;
  position: relative;
  overflow: hidden;
}
.content {
  z-index: 22;
}
.bg {
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  opacity: 0.2;
  width: 100%;
  background-attachment: fixed;
  background: url('/bg.jpg') no-repeat center;
  background-size: cover;
}
</style>
