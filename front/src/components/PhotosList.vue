<script setup>
import PhotoCard from './PhotoCard.vue'
defineProps({
  items: Array
})
</script>
<template>
  <PhotoCard
    v-for="item in items"
    :key="item.id"
    :title="item.title"
    :filename="item.filename"
    :path="item.path"
  />
</template>
<style scoped></style>
