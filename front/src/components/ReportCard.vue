<script setup>
import instance from '@/AxiosInstance'
defineProps({
  reporter: String,
  text: String,
  filename: String,
  path: String
})
</script>
<template>
  <div class="carousel-item">
    <div class="d-flex d-dlock flex-column justify-content-center align-items-center">
      <div class="reportTitle">
        <div>{{ reporter }}</div>
      </div>
      <div class="reportText">
        <div>
          {{ text }}
        </div>
      </div>
      <div class="reportImg" v-if="filename">
        <img :src="`${instance.defaults.baseURL}uploads/${filename}`" class="w-100" alt="..." />
      </div>
    </div>
  </div>
</template>
<style scoped>
@media screen and (min-width: 900px) {
  .reportTitle {
    font-size: xx-large;
  }
  .reportText {
    font-size: x-large;
  }
}
@media screen and (min-width: 600px) and (max-width: 899px) {
  .reportTitle {
    font-size: x-large;
  }
  .reportText {
    font-size: large;
  }
}
@media screen and (min-width: 500px) and (max-width: 599px) {
  .reportTitle {
    font-size: large;
  }
  .reportText {
    font-size: medium;
  }
}
@media screen and (min-width: 400px) and (max-width: 499px) {
  .reportTitle {
    font-size: medium;
  }
  .reportText {
    font-size: small;
  }
}
@media screen and (min-width: 300px) and (max-width: 399px) {
  .reportTitle {
    font-size: small;
  }
  .reportText {
    font-size: x-small;
  }
}
@media screen and (min-width: 200px) and (max-width: 299px) {
  .reportTitle {
    font-size: x-small;
  }
  .reportText {
    font-size: xx-small;
  }
}
.reportImg {
  object-fit: contain;
  padding-bottom: 10%;

  width: 20%;
  min-width: 100px;
  height: auto;
}
.reportTitle {
  padding-top: 5%;
  color: black;
  text-align: center;
  margin: auto;
  font-weight: 800;
  font-family: 'Manrope', sans-serif;
  text-align: center;
  height: 10vh;
}
.reportText {
  color: black;
  text-align: center;
  margin: auto;
  padding: 5%;
  font-weight: 500;
  font-family: 'Manrope', sans-serif;
  text-align: center;
}
</style>
