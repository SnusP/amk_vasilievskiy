<script setup>
import instance from '@/AxiosInstance'
import { onMounted, ref } from 'vue'
const text = ref()

const getText = () => {
  instance
    .get('/about/')
    .then((response) => {
      console.log(response.status)
      if (response.status === 201) {
        text.value = response.data.info.replace(/\n/g, '<br>')
      }
    })
    .catch((error) => console.log(error))
}
onMounted(() => {
  getText()
})
</script>
<template>
  <div class="container" id="about">
    <h1 class="title">О КОМПАНИИ</h1>
    <hr />
    <div class="text" v-html="text"></div>
  </div>
</template>
<style scoped>
@media screen and (min-width: 1300px) {
  .text {
    font-size: xx-large;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1299px) {
  .text {
    font-size: x-large;
  }
}
@media screen and (min-width: 700px) and (max-width: 999px) {
  .text {
    font-size: large;
  }
}
@media screen and (min-width: 550px) and (max-width: 699px) {
  .text {
    font-size: medium;
  }
}
@media screen and (min-width: 450px) and (max-width: 549px) {
  .text {
    font-size: small;
  }
}
@media screen and (min-width: 300px) and (max-width: 449px) {
  .text {
    font-size: x-small;
  }
}
.title {
  white-space: nowrap;
  margin-top: 10vh;
  font-family: 'Manrope', sans-serif;
}
.text {
  margin-top: 10vh;
  font-family: 'Manrope', sans-serif;
  margin-bottom: 10%;
}
.container {
  width: 90vw;
  text-align: center;
  font-family: 'Manrope', sans-serif;
}
</style>
