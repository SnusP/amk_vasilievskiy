<script>
export default {
  name: 'YourComponentName',
  mounted() {
    // Пример кода, если потребуется добавить скрипты
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="subtitle d-flex justify-content-center">
      <div class="cont cont1">
        <h1 class="title-text">Качественная работа и грамотная консультация</h1>
        <hr style="border-width: 0.2vh; border-color: black; border-style: solid" />
        <h1 class="subtitle-text">Полный спектр услуг от быстрой мойки до химчистки</h1>
      </div>
      <div class="cont cont2">
        <h1 class="title-text">Легковые авто</h1>
      </div>
      <div class="cont cont2">
        <h1 class="title-text">Кроссоверы</h1>
      </div>
      <div class="cont cont2">
        <h1 class="title-text">Минивены, внедорожники и представительский класс</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  z-index: 22;
  display: flex;
  justify-content: center;
  align-items: stretch; /* растягивает элементы по высоте */
  width: 100%;
  opacity: 1;
}

.cont {
  z-index: 22;
  flex: 1;
  margin: 2%;
  padding: 3%;
  background: #6b6b6b59;
  border-radius: 10px;
  box-sizing: border-box;
  opacity: 1;
}

.title-text,
.subtitle-text {
  z-index: 22;
  margin: 0;
}

@media screen and (min-width: 1300px) {
  .title-text {
    font-size: 30px;
  }
  .subtitle-text {
    font-size: 22px;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1299px) {
  .title-text {
    font-size: 24px;
  }
  .subtitle-text {
    font-size: 19px;
  }
}

@media screen and (min-width: 800px) and (max-width: 999px) {
  .title-text {
    font-size: 20px;
  }
  .subtitle-text {
    font-size: 16px;
  }
}

@media screen and (min-width: 600px) and (max-width: 799px) {
  .title-text {
    font-size: 16px;
  }
  .subtitle-text {
    font-size: 12px;
  }
}

@media screen and (min-width: 500px) and (max-width: 599px) {
  .title-text {
    font-size: 12px;
  }
  .subtitle-text {
    font-size: 10px;
  }
}

@media screen and (min-width: 400px) and (max-width: 499px) {
  .title-text {
    font-size: 10px;
  }
  .subtitle-text {
    font-size: 8px;
  }
}

@media screen and (min-width: 300px) and (max-width: 399px) {
  .title-text {
    font-size: 8px;
  }
  .subtitle-text {
    font-size: 6px;
  }
}

@media screen and (max-width: 299px) {
  .title-text {
    font-size: 6px;
  }
  .subtitle-text {
    font-size: 4px;
  }
}

.container-fluid {
  width: 60vw;
  z-index: 22;
  padding-top: 7%;
}

.subtitle {
  margin-top: 5%;
  font-family: 'Manrope', sans-serif;
  opacity: 1;
  z-index: 22;
}

.title-text {
  font-weight: 800;
  opacity: 1;
  z-index: 22;
}

.subtitle-text {
  color: black;
  opacity: 1;
  font-weight: 500;
  z-index: 22;
}
</style>
