<script setup>
import { ref } from 'vue'
import instance from '@/AxiosInstance'
import { router } from '@/main'
import { TokenStore } from '@/stores/TokenStore'
import Nav from '@/components/admin/Nav.vue'
const Token = TokenStore()

const form = ref({
  login: '',
  password: ''
})

const regForm = ref({
  login: '',
  password: ''
})

function login() {
  instance
    .post('http://amk-vo.online/api/login', form.value)
    .then((response) => {
      if (response.status === 201) {
        Token.setToken(response.data.token)
        router.push('/admin/services')
      }
    })
    .catch((error) => console.log(error))
}
function reg() {
  instance
    .post('http://amk-vo.online/api/register', form.value)
    .then((response) => {
      console.log("registered")
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
          <h2>Вход</h2>
          <v-text-field label="Логин" v-model="form.login"></v-text-field>
          <v-text-field label="Пароль" v-model="form.password"></v-text-field>
          <v-btn @click="login">Войти</v-btn>
        </div>

        <div class="w-50 mx-auto">
          <h2>Рега</h2>
          <v-text-field label="Логин" v-model="regForm.login"></v-text-field>
          <v-text-field label="Пароль" v-model="regForm.password"></v-text-field>
          <v-btn @click="reg">Войти</v-btn>
        </div>
      </v-app>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
