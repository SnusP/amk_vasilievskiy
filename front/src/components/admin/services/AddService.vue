<script setup>
import { ref } from 'vue'
import instance from '@/AxiosInstance'
import { router } from '@/main'
import { TokenStore } from '@/stores/TokenStore'
import Nav from '@/components/admin/Nav.vue'
const Token = TokenStore()

const form = ref({
  name: '',
  subtitle: '',
  price1: '',
  price2: '',
  price3: '',
  type: ''
})

function create() {
  instance
    .post('/services', form.value, {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })
    .then((response) => {
      if (response.status === 201) {
        router.push('/admin/services')
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
          <h2 style="margin-top: 10%">Добавить услугу</h2>
          <v-select
            v-model="form.type"
            :items="['Кузов', 'Салон', 'Колеса', 'Двигатель', 'Антидождь']"
            label="Категория услуги"
            required
          ></v-select>
          <v-text-field label="Название" v-model="form.name" required></v-text-field>
          <v-text-field label="Описание" v-model="form.subtitle"></v-text-field>
          <v-text-field label="Цена за легковой" v-model="form.price1"></v-text-field>
          <v-text-field label="Цена за кроссовер" v-model="form.price2"></v-text-field>
          <v-text-field label="Цена за внедорожник" v-model="form.price3"></v-text-field>
          <v-btn @click="create">Добавить</v-btn>
        </div>
      </v-app>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
