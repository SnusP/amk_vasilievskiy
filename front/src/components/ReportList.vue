<script setup>
import ReportCard from './ReportCard.vue'
defineProps({
  items: Array
})
</script>
<template>
  <ReportCard
    v-for="item in items"
    :key="item.id"
    :reporter="item.reporter"
    :text="item.text"
    :filename="item.filename"
    :path="item.path"
  />
</template>
<style scoped></style>
