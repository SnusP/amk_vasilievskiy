<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/AxiosInstance'
import { router } from '@/main'
import { TokenStore } from '@/stores/TokenStore'
import Nav from '@/components/admin/Nav.vue'
const Token = TokenStore()
const services = ref([])

function getServices() {
  instance
    .get('/services/', {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })
    .then((response) => {
      if (response.status === 201) {
        services.value = response.data
      }
    })
    .catch((error) => console.log(error))
}

function deleteService(id) {
  instance
    .delete(`/services/${id}/`, {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })
    .then((response) => {
      console.log(response)
      if (response.status === 201) {
        getServices()
      }
    })
    .catch((error) => console.log(error))
}

onMounted(() => {
  getServices()
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Nav />
    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <div class="d-flex align-center flex-column ga-10">
        <h2 style="margin-top: 10%">Услуги</h2>
        <template v-for="service in services" :key="service.id">
          <v-card
            width="700"
            :title="`${service.name}`"
            :subtitle="service.subtitle ? `${service.subtitle}` : ''"
            class="card"
          >
            <v-card-text>
              <h5>Цены:</h5>
              <div v-if="service.price1 || service.price3">
                <h6>Легковые: {{ service.price1 }}</h6>
                <h6>Кроссоверы: {{ service.price2 }}</h6>
                <h6>внедорожники: {{ service.price3 }}</h6>
              </div>
              <div v-else>
                <h6>Легковые: {{ service.price2 }}</h6>
                <h6>Кроссоверы: {{ service.price2 }}</h6>
                <h6>внедорожники: {{ service.price2 }}</h6>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="router.push('/admin/services/' + service.id)"> Изменить </v-btn>
              <v-btn @click="deleteService(service.id)"> Удалить </v-btn>
            </v-card-actions></v-card
          >
        </template>
        <v-btn style="margin-bottom: 10%" @click="router.push('/admin/add-service')"
          >Добавить</v-btn
        >
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
.card {
  border-radius: 15px;
}
</style>
