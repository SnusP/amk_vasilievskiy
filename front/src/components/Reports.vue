<script setup>
import { onMounted, ref } from 'vue'
import instance from '@/AxiosInstance'
import ReportList from './ReportList.vue'
const items = ref([])
let firstElem = ''
function getReports() {
  instance
    .get('reports/')
    .then((response) => {
      if (response.status === 200) {
        items.value = response.data
        firstElem = items.value.shift()
      }
    })
    .catch((error) => console.log(error))
}
onMounted(() => {
  getReports()
})
</script>
<template>
  <div class="container-fluid" id="photos">
    <h1 class="title">ОТЗЫВЫ</h1>
    <hr style="width: 50%; margin: auto; margin-bottom: 5%" />

    <div class="d-flex justify-content-center photosCont flex-column justify-content-center">
      <div id="carouselPhoto" class="carousel slide" data-bs-ride="carousel" style="width: 80%">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-flex d-dlock flex-column justify-content-center align-items-center">
              <div class="reportTitle">
                <div>{{ firstElem.reporter }}</div>
              </div>
              <div class="reportText">
                <div>
                  {{ firstElem.text }}
                </div>
              </div>
              <div class="reportImg" v-if="firstElem.filename">
                <img
                  :src="`${instance.defaults.baseURL}uploads/${firstElem.filename}`"
                  class="w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <ReportList :items="items" />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPhoto"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselPhoto"
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
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
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
.carousel-inner {
  display: flex;
  margin: auto;
  width: 60vw;
  min-height: 40vh;
  background-color: white;
  border-radius: 10px;
}
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
}

.title {
  text-align: center;
  font-family: 'Manrope', sans-serif;
  vertical-align: middle;
  margin-top: 10%;
}
</style>
