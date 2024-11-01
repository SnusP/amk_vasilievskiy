<script setup>
defineProps({
  name: String,
  price1: String,
  price2: String,
  price3: String,
  subtitle: String
})
</script>
<template>
  <tr>
    <th scope="row" class="name-col head">
      <div class="name">{{ name }}</div>
      <div class="subtitle">{{ subtitle }}</div>
    </th>
    <td class="price">{{ price1 ? price1 + '₽' : '' }}</td>
    <td class="price">{{ price2 ? price2 + '₽' : '' }}</td>
    <td class="price">{{ price3 ? price3 + '₽' : '' }}</td>
  </tr>
</template>
<style scoped>
@media screen and (min-width: 1300px) {
  .price {
    font-size: x-large;
  }
  .name {
    font-size: xx-large;
  }
  .subtitle {
    font-size: x-large;
  }
}

@media screen and (min-width: 850px) and (max-width: 1299px) {
  .price {
    font-size: large;
  }
  .name {
    font-size: x-large;
  }
  .subtitle {
    font-size: medium;
  }
}

@media screen and (min-width: 700px) and (max-width: 849px) {
  .price {
    font-size: large;
  }
  .name {
    font-size: x-large;
  }
  .subtitle {
    font-size: medium;
  }
}
@media screen and (min-width: 600px) and (max-width: 699px) {
  .price {
    font-size: smaller;
  }
  .name {
    font-size: medium;
  }
  .subtitle {
    font-size: small;
  }
}

@media screen and (min-width: 450px) and (max-width: 599px) {
  .price {
    font-size: x-small;
  }
  .name {
    font-size: small;
  }
  .subtitle {
    font-size: x-small;
  }
}

@media screen and (min-width: 400px) and (max-width: 499px) {
  .price {
    font-size: xx-small;
  }
  .name {
    font-size: x-small;
  }
  .subtitle {
    font-size: xx-small;
  }
}

@media screen and (max-width: 399px) {
  .price {
    font-size: 7px;
  }
  .name {
    font-size: 7px;
  }
  .subtitle {
    font-size: 5px;
  }
}

.price {
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
  vertical-align: middle;
  text-align: center;
}

.name {
  font-weight: 600;
}
.subtitle {
  font-weight: 400;
}

td,
th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.head {
  text-align: center;
}
</style>
