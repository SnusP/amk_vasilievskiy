<script setup>
import instance from '@/AxiosInstance'
defineProps({
  title: String,
  filename: String,
  path: String
})
</script>
<template>
  <div class="carousel-item">
    <div class="d-flex d-dlock flex-column justify-content-center align-items-center">
      <div class="reportImg">
        <img :src="`${instance.defaults.baseURL}uploads/${filename}`" class="img-fluid" alt="..." />
      </div>
    </div>
  </div>
</template>
<style scoped>
.reportImg img {
  max-height: 60vh;
}
.reportImg {
  object-fit: contain;

  min-width: 100px;
  max-height: 100%;
  width: auto;
}
</style>
