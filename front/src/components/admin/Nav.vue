<script setup>
import { TokenStore } from '@/stores/TokenStore'
const Token = TokenStore()
</script>
<template>
  <v-navigation-drawer permanent>
    <v-list-item title="АМК Васильевский"></v-list-item>
    <v-divider></v-divider>
    <template v-if="!Token.token">
      <router-link to="/admin" style="text-decoration: none; color: inherit"
        ><v-list-item link title="Войти"></v-list-item
      ></router-link>
    </template>
    <v-list-item v-else class="text-red" @click="Token.deleteToken">Выйти</v-list-item>
    <router-link to="/admin/services" style="text-decoration: none; color: inherit"
      ><v-list-item link title="Услуги"></v-list-item
    ></router-link>
    <router-link to="/admin/photos" style="text-decoration: none; color: inherit"
      ><v-list-item link title="Фото"></v-list-item
    ></router-link>
    <router-link to="/admin/reports" style="text-decoration: none; color: inherit"
      ><v-list-item link title="Отзывы"></v-list-item
    ></router-link>
    <router-link to="/admin/about" style="text-decoration: none; color: inherit"
      ><v-list-item link title="О компании"></v-list-item
    ></router-link>
  </v-navigation-drawer>
</template>

<style></style>
