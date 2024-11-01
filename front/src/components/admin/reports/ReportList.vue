<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/AxiosInstance'
import { router } from '@/main'
import { TokenStore } from '@/stores/TokenStore'
import Nav from '@/components/admin/Nav.vue'
const Token = TokenStore()
const reports = ref([])

function getReports() {
  instance
    .get('/reports/', {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })
    .then((response) => {
      if (response.status === 200) {
        reports.value = response.data
      }
    })
    .catch((error) => console.log(error))
}

function deleteService(id) {
  instance
    .delete(`/reports/${id}/`, {
      headers: {
        Authorization: `Bearer ${Token.token}`
      }
    })
    .then((response) => {
      console.log(response)
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
        <h2 style="margin-top: 10%">Отзывы</h2>
        <template v-for="report in reports" :key="report.id">
          <v-card width="700" class="card">
            <v-card-text>
              <div class="reportTitle">
                <div>{{ report.reporter }}</div>
              </div>
              <div class="reportText">
                <div>
                  {{ report.text }}
                </div>
              </div>
              <div class="reportImg" v-if="report.filename">
                <img
                  :src="`${instance.defaults.baseURL}uploads/${report.filename}`"
                  class="w-100"
                  alt="..."
                />
              </div>
            </v-card-text>
            <v-card-actions class="d-flex justify-content-evenly">
              <v-btn @click="router.push('/admin/reports/' + report.id)"> Изменить </v-btn>
              <v-btn @click="deleteService(report.id)"> Удалить </v-btn>
            </v-card-actions></v-card
          >
        </template>
        <v-btn style="margin-bottom: 10%" @click="router.push('/admin/add-report')">Добавить</v-btn>
      </div>
    </v-main>
  </v-layout>
</template>

<style scoped>
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
  padding-bottom: 10%;
  margin: auto;
  width: 20%;
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
