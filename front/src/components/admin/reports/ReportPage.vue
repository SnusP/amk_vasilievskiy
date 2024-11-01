<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/AxiosInstance'
import { router } from '@/main'
import { TokenStore } from '@/stores/TokenStore'
import Nav from '@/components/admin/Nav.vue'
const Token = TokenStore()

const form = ref({
  reporter: '',
  text: ''
})

function getPaper() {
  instance
    .get(`/reports/${router.currentRoute.value.params.id}/`, {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })
    .then((response) => {
      console.log(response.status)
      if (response.status === 200) {
        console.log(response.data)
        form.value = response.data
      }
    })
    .catch((error) => console.log(error))
}

function savePaper() {
  const { id, ...rest } = form.value
  console.log(rest)
  instance
    .patch(`/reports/${router.currentRoute.value.params.id}/`, rest, {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })

    .then((response) => {
      if (response.status === 201) {
        router.push('/admin/reports')
      }
    })
    .catch((error) => console.log(error))
  console.log(id)
}

onMounted(() => {
  getPaper()
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Nav />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <v-app>
        <div class="w-50 mx-auto">
          <h2 style="margin-top: 10%">Изменить услугу</h2>

          <v-text-field label="Имя" v-model="form.reporter" required></v-text-field>
          <v-textarea label="Текст" v-model="form.text" auto-grow></v-textarea>

          <v-btn @click="savePaper">Сохранить</v-btn>
        </div>
      </v-app></v-main
    >
  </v-layout>
</template>

<style scoped></style>
