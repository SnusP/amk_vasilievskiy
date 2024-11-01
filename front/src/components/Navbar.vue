<script></script>
<template>
  <div class="d-flex links justify-content-center">
    <div class="nav-item">
      <a href="#Services" class="nav-links">
        <div class="nav-text">Услуги</div>
      </a>
    </div>
    <div class="nav-item">
      <a href="#photos" class="nav-links">
        <div class="nav-text">Отзывы и фото</div>
      </a>
    </div>
    <div class="nav-item">
      <a href="#formCont" class="nav-links">
        <div class="nav-text">Контакты</div>
      </a>
    </div>
    <div class="nav-item">
      <a href="#about" class="nav-links">
        <div class="nav-text">О компании</div>
      </a>
    </div>
    <a href="#Map"
      ><button class="nav-item buts"><div class="nav-text">Мы на карте</div></button></a
    >
  </div>
  <div class="d-flex justify-content-center">
    <div class="title">
      <div class="title-text1">АМК ВАСИЛЬЕВСКИЙ</div>
      <div class="title-text2">Химчистка, Детейлинг, Автомойка</div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 1500px) {
  .nav-text {
    font-size: xx-large;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1499px) {
  .nav-text {
    font-size: x-large;
  }
}

@media screen and (min-width: 700px) and (max-width: 999px) {
  .nav-text {
    font-size: large;
  }
}

@media screen and (min-width: 600px) and (max-width: 699px) {
  .nav-text {
    font-size: medium;
  }
}

@media screen and (min-width: 500px) and (max-width: 599px) {
  .nav-text {
    font-size: small;
  }
}

@media screen and (max-width: 499px) {
  .nav-text {
    font-size: xx-small;
  }
}

.title-text1 {
  font-weight: 800;
  font-size: 5vw;
}
.title-text2 {
  font-weight: 500;
  font-size: 2vw;
}

.title {
  margin-top: 5%;
  color: #000000;
  position: relative;
  z-index: 2;
  font-family: 'Manrope', sans-serif;
}
.buts {
  background: rgba(107, 107, 107, 0.3);
  color: #000000;
  border-radius: 5px;
}
.links {
  margin-top: 5vh;
  position: relative;
  z-index: 2;
}
.nav-item {
  box-sizing: border-box;
  margin-right: 3%;
  margin-left: 3%;
}

.nav-links {
  text-decoration: none;
}

.nav-text {
  color: #17181c;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  white-space: nowrap;
}
</style>
