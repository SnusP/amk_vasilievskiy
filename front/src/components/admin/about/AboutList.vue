<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/AxiosInstance'
import { TokenStore } from '@/stores/TokenStore'
import Nav from '@/components/admin/Nav.vue'
import { router } from '@/main'
const Token = TokenStore()
const about = ref([])
function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, '')

  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
  }

  return phoneNumber
}
function getAbout() {
  instance
    .get('/about/', {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })
    .then((response) => {
      if (response.status === 201) {
        about.value.phone = formatPhoneNumber(response.data.phone)
        about.value.info = response.data.info.replace(/\n/g, '<br>')
      }
    })
    .catch((error) => console.log(error))
}

onMounted(() => {
  getAbout()
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Nav />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <div class="d-flex align-center flex-column ga-10">
        <h2 style="margin-top: 10%">Фото</h2>

        <v-card width="700" class="card">
          <v-card-text>
            <div class="reportTitle">
              <div style="font-weight: 500; margin-bottom: 10px">Номер телефона:</div>

              <div>{{ about.phone }}</div>
            </div>
            <div class="reportText">
              <div v-html="about.info"></div>
            </div>
          </v-card-text>
          <v-card-actions class="d-flex justify-content-evenly">
            <v-btn class="but" @click="router.push('/admin/aboutPage')"> Изменить </v-btn>
          </v-card-actions></v-card
        >
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
.but {
  margin-bottom: 30px;
}
.card {
  border-radius: 15px;
}
.reportText {
  font-size: large;
  text-align: center;
  margin: auto;
  padding: 5%;
  font-weight: 500;
  font-family: 'Manrope', sans-serif;
  text-align: center;
}
.reportImg {
  object-fit: contain;
  /* padding-bottom: 10%; */
  margin: auto;
  width: 500px;
  min-width: 100px;
  height: auto;
}
.reportTitle {
  font-size: x-large;
  padding-top: 5%;
  text-align: center;
  margin: auto;
  font-weight: 800;
  font-family: 'Manrope', sans-serif;
  text-align: center;
  height: 10vh;
}
</style>
