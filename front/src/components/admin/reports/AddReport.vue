<script setup>
import { ref } from 'vue'
import instance from '@/AxiosInstance'
import { router } from '@/main'
import { TokenStore } from '@/stores/TokenStore'
import Nav from '@/components/admin/Nav.vue'
const Token = TokenStore()

const form = ref({
  reporter: '',
  text: '',
  photo: null
})
const onFileChange = (event) => {
  const file = event.target.files[0]
  form.value.photo = file
}

function create() {
  console.log(form.value)
  instance
    .post('/reports/', form.value, {
      headers: {
        Authorization: `Bearer ${Token.token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      if (response.status === 201) {
        router.push('/admin/reports')
      }
    })
    .catch((error) => console.log(error))
}
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Nav />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <v-app>
        <div class="w-50 mx-auto">
          <h2 style="margin-top: 10%; margin-bottom: 10%; text-align: center">Добавить отзыв</h2>
          <v-text-field label="Имя" v-model="form.reporter" required></v-text-field>
          <v-text-field label="Текст отзыва" v-model="form.text" required></v-text-field>
          <v-file-input
            @change="onFileChange"
            label="Загрузить фото"
            accept="image/*"
            class="w-100"
          ></v-file-input>
          <v-btn @click="create">Добавить</v-btn>
        </div>
      </v-app>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
