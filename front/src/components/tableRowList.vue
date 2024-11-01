<script setup>
import tableRow from './tableRow.vue'
defineProps({
  items: Array
})
</script>
<template>
  <tableRow
    v-for="item in items"
    :key="item.id"
    :name="item.name"
    :subtitle="item.subtitle"
    :price1="item.price1"
    :price2="item.price2"
    :price3="item.price3"
  />
</template>
<style scoped></style>
