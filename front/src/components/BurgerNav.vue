<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/AxiosInstance'
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToSection = (sectionId) => {
  event.preventDefault()

  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
  closeMenu()
}

document.addEventListener('click', (event) => {
  const menu = document.querySelector('.navbar-collapse')
  const isClickInsideMenu = menu.contains(event.target)
  const menuButton = document.querySelector('.navbar-toggler')
  const isClickOnMenuButton = menuButton.contains(event.target)

  if (!isClickInsideMenu && !isClickOnMenuButton) {
    isMenuOpen.value = false
  }
})

const phoneFormated = ref()
const phone = ref()
function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, '')

  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
  }

  return phoneNumber
}

const getPhone = () => {
  instance
    .get('/about/')
    .then((response) => {
      console.log(response.status)
      if (response.status === 201) {
        phone.value = response.data.phone
        phoneFormated.value = formatPhoneNumber(response.data.phone)
      }
    })
    .catch((error) => console.log(error))
}
onMounted(() => {
  getPhone()
})
</script>
<template>
  <nav class="d-flex bg-transparent">
    <button
      class="navbar-toggler"
      type="button"
      @click="toggleMenu"
      aria-controls="navbarNav"
      :aria-expanded="isMenuOpen ? 'true' : 'false'"
      aria-label="Toggle navigation"
      :class="{ 'menu-open': isMenuOpen }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </button>
    <div
      :class="['collapse', 'navbar-collapse', { show: isMenuOpen, 'fixed-menu': isMenuOpen }]"
      id="navbarNav"
    >
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" @click="scrollToSection('Services')">
          <a class="nav-link" href="#Services">Услуги</a>
        </li>
        <li class="nav-item" @click="scrollToSection('photos')">
          <a class="nav-link" href="#photos">Отзывы и фото</a>
        </li>
        <li class="nav-item" @click="scrollToSection('formCont')">
          <a class="nav-link" href="#formCont">Контакты</a>
        </li>
        <li class="nav-item" @click="scrollToSection('Map')">
          <a class="nav-link" href="#about">Мы на карте</a>
        </li>
        <li class="nav-item" @click="scrollToSection('about')">
          <a class="nav-link" href="#about">О компании</a>
        </li>
        <li class="nav-item">
          <button class="buts">
            <a :href="`tel:${phone}`" class="phone">{{ phoneFormated }}</a>
          </button>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-center nav-title">
      <div class="title">
        <div class="title-text1">АМК ВАСИЛЬЕВСКИЙ</div>
        <div class="title-text2">Химчистка, Детейлинг, Автомойка</div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-toggler {
  width: 10vw;
  height: 10vw;
  border-radius: 5px;
}
.title-text1 {
  font-weight: 800;
  font-size: 5vw;
}
.title-text2 {
  font-weight: 500;
  font-size: 2vw;
}
.nav-title {
  margin-left: 15%;
}
.title {
  white-space: nowrap;
  margin-left: 30%;
  margin-top: 7%;
  color: #000000;
  position: relative;
  z-index: 2;
  font-family: 'Manrope', sans-serif;
}
.navbar {
  background: rgba(255, 255, 255, 0.8);
}

.fixed-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(194, 194, 194, 0.9);
  z-index: 1040;
  padding-top: 70px;
  padding-left: 5%;
}

.navbar-toggler {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  background-color: rgba(107, 107, 107, 0.9);
  margin-top: 5%;
  margin-left: 5%;
}
.bi {
  width: 30px;
  color: white;
}
.menu-open {
  position: fixed;
  top: 10px;
  left: 10px;
}

.navbar-nav .nav-item {
  margin: 3%;
  margin-top: 5%;
  max-width: 40%;
}

.nav-link {
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  white-space: nowrap;
  color: #000000;
  font-size: large;
}
.phone {
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  white-space: nowrap;
  color: white;
  /* color: rgb(41, 41, 196); */
  font-size: large;
}
.buts {
  background: rgba(48, 48, 48, 0.6);
  color: #000000;
  border-radius: 5px;
  font-family: 'Manrope', sans-serif;
  font-weight: 8000;
  white-space: nowrap;
  padding: 5%;
}
</style>
