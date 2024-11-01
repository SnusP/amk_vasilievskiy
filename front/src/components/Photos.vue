<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/AxiosInstance'
import axios from 'axios';
import PhotosList from './PhotosList.vue'
let firstElem = ''
const items = ref([])
function getPhotos() {
  axios
    .get('/api/photos/')
    .then((response) => {
      console.log(response.status)
      if (response.status === 200) {
        items.value = response.data
        firstElem = items.value.shift()
      }
    })
    .catch((error) => console.log(error))
}
onMounted(() => {
  getPhotos()
})
</script>

<template>
  <div class="container-fluid">
    <h1 class="title">ФОТОГРАФИИ</h1>
    <hr style="width: 50%; margin: auto; margin-bottom: 5%" />

    <div class="d-flex justify-content-center photosCont flex-column justify-content-center">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
        style="width: 80%"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex d-dlock flex-column justify-content-center align-items-center">
              <div class="reportImg">
                <img
                  :src="`${instance.defaults.baseURL}uploads/${firstElem.filename}`"
                  class="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <PhotosList :items="items" />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.reportImg img {
  max-height: 60vh; /* Устанавливаем максимальную высоту для изображений */
}
.reportImg {
  object-fit: contain;

  min-width: 100px;
  max-height: 100%;
  width: auto;
}
/* .carousel-inner {
  display: flex;
  margin: auto;
  width: 60vw;
  min-height: 40vh;
  background-color: white;
  border-radius: 10px;
} */
.d-block {
  color: black;
  max-height: 70vh;
  max-width: 70vw;
  margin: auto;
}
.photosCont {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.title {
  text-align: center;
  font-family: 'Manrope', sans-serif;
  vertical-align: middle;
  margin-top: 10%;
}
</style>
