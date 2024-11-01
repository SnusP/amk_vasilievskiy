<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/AxiosInstance'
import { router } from '@/main'
import { TokenStore } from '@/stores/TokenStore'
import Nav from '@/components/admin/Nav.vue'
const Token = TokenStore()
const photos = ref([])

function getReports() {
  instance
    .get('/photos/', {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })
    .then((response) => {
      if (response.status === 200) {
        photos.value = response.data
      }
    })
    .catch((error) => console.log(error))
}

function deleteService(id) {
  instance
    .delete(`/photos/${id}/`, {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })
    .then((response) => {
      if (response.status === 200) {
        getReports()
      }
    })
    .catch((error) => console.log(error))
}

onMounted(() => {
  getReports()
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Nav />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <div class="d-flex align-center flex-column ga-10">
        <h2 style="margin-top: 10%">Фото</h2>
        <template v-for="photo in photos" :key="photo.id">
          <v-card width="700" class="card">
            <v-card-text>
              <div class="img">
                <img
                  :src="`${instance.defaults.baseURL}uploads/${photo.filename}`"
                  class="img"
                  alt="..."
                />
              </div>
            </v-card-text>
            <v-card-actions class="d-flex justify-content-evenly">
              <v-btn @click="deleteService(photo.id)"> Удалить </v-btn>
            </v-card-actions></v-card
          >
        </template>
        <v-btn style="margin-bottom: 10%" @click="router.push('/admin/add-photo')">Добавить</v-btn>
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
.card {
  border-radius: 15px;
}
.img {
  object-fit: contain;
  /* padding-bottom: 10%; */
  margin: auto;
  width: 100%;
  min-width: 100px;
  height: auto;
}
</style>
