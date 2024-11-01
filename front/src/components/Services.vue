<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/AxiosInstance'
import tableRowList from './tableRowList.vue'

const items1 = ref([])
const items2 = ref([])
const items3 = ref([])
const items4 = ref([])
const items5 = ref([])
const services = async (category) => {
  try {
    let url = `/services/findByCategory/${category}`
    const { data } = await instance.get(url)
    if (category == 'Кузов') {
      items1.value = data
    }
    if (category == 'Салон') {
      items2.value = data
    }
    if (category == 'Колеса') {
      items3.value = data
    }
    if (category == 'Двигатель') {
      items4.value = data
    }
    if (category == 'Антидождь') {
      items5.value = data
    }
  } catch (err) {
    console.log(err)
  }
}
onMounted(() => {
  services('Кузов')
  services('Салон')
  services('Колеса')
  services('Двигатель')
  services('Антидождь')
})
</script>
<template>
  <div class="services" id="Services">
    <h1 style="text-align: center; font-family: 'Manrope', sans-serif">НАШИ УСЛУГИ</h1>
    <hr style="width: 50%; margin: auto" />
  </div>
  <table class="table">
    <thead class="table-dark">
      <tr class="head">
        <th scope="col" class="name-col head title">Кузов</th>
        <th scope="col" class="title">Легковые</th>
        <th scope="col" class="title">Кроссоверы</th>
        <th scope="col" class="title">Минивены, внедорожники и представительский класс</th>
      </tr>
    </thead>
    <tbody>
      <tableRowList :items="items1" />
    </tbody>
  </table>
  <table class="table">
    <thead class="table-dark">
      <tr class="head">
        <th scope="col" class="name-col head title">Салон</th>
        <th scope="col" class="title">Легковые</th>
        <th scope="col" class="title">Кроссоверы</th>
        <th scope="col" class="title">Минивены, внедорожники и представительский класс</th>
      </tr>
    </thead>
    <tbody>
      <tableRowList :items="items2" />
    </tbody>
  </table>
  <table class="table">
    <thead class="table-dark">
      <tr class="head">
        <th scope="col" class="name-col head title">Колеса</th>
        <th scope="col" class="title">Легковые</th>
        <th scope="col" class="title">Кроссоверы</th>
        <th scope="col" class="title">Минивены, внедорожники и представительский класс</th>
      </tr>
    </thead>
    <tbody>
      <tableRowList :items="items3" />
    </tbody>
  </table>
  <table class="table">
    <thead class="table-dark">
      <tr class="head">
        <th scope="col" class="name-col head title">Двигатель</th>
        <th scope="col" class="title">Легковые</th>
        <th scope="col" class="title">Кроссоверы</th>
        <th scope="col" class="title">Минивены, внедорожники и представительский класс</th>
      </tr>
    </thead>
    <tbody>
      <tableRowList :items="items4" />
    </tbody>
  </table>
  <table class="table">
    <thead class="table-dark">
      <tr class="head">
        <th scope="col" class="name-col head title">Антидождь</th>
        <th scope="col" class="title">Легковые</th>
        <th scope="col" class="title">Кроссоверы</th>
        <th scope="col" class="title">Минивены, внедорожники и представительский класс</th>
      </tr>
    </thead>
    <tbody>
      <tableRowList :items="items5" />
    </tbody>
  </table>
</template>
<style scoped>
@media screen and (min-width: 1300px) {
  .table {
    width: 60%;
  }
  .title {
    font-size: x-large;
  }
}

@media screen and (min-width: 850px) and (max-width: 1299px) {
  .table {
    width: 80%;
  }
  .title {
    font-size: large;
  }
}

@media screen and (min-width: 700px) and (max-width: 849px) {
  .table {
    width: 90%;
  }
  .title {
    font-size: large;
  }
}

@media screen and (min-width: 600px) and (max-width: 699px) {
  .table {
    width: 90%;
  }
  .title {
    font-size: medium;
  }
}
@media screen and (max-width: 599px) {
  .table {
    width: 90%;
  }
  .title {
    font-size: smaller;
  }
}

@media screen and (min-width: 600px) and (max-width: 699px) {
  .table {
    width: 90%;
  }
  .title {
    font-size: medium;
  }
}
@media screen and (min-width: 500px) and (max-width: 599px) {
  .table {
    width: 90%;
  }
  .title {
    font-size: smaller;
  }
}

@media screen and (min-width: 400px) and (max-width: 499px) {
  .table {
    width: 90%;
  }
  .title {
    font-size: x-small;
  }
}

@media screen and (max-width: 399px) {
  .table {
    width: 90%;
  }
  .title {
    font-size: xx-small;
  }
}

.table {
  margin: auto;
  margin-top: 3%;
}
.title {
  font-family: 'Manrope', sans-serif;
  vertical-align: middle;
}
.price {
  font-weight: 800;
  font-family: 'Manrope', sans-serif;
  vertical-align: middle;
  text-align: center;
}
.head {
  text-align: center;
}

.services {
  margin-top: 5%;
}
</style>
