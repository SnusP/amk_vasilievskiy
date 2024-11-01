<template>
  <div class="d-flex flex-column">
    <div class="label" id="Map">
      <h1 style="text-align: center; font-family: 'Manrope', sans-serif">МЫ НА КАРТЕ</h1>
      <hr style="width: 60%; margin: auto" />
    </div>
    <div class="d-flex justify-content-center">
      <div ref="mapContainer" class="map"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'YandexMap',
  setup() {
    const mapContainer = ref(null)

    onMounted(() => {
      // Загрузка скрипта Яндекс.Карт
      const script = document.createElement('script')
      script.src =
        'https://api-maps.yandex.ru/2.1/?apikey=68a91d50-feea-4fd9-bd9b-83c7169ee672&lang=ru_RU'
      script.onload = initMap
      document.head.appendChild(script)
    })

    const initMap = () => {
      let center = [59.957940066161804, 30.22190749377746]
      ymaps.ready(() => {
        const map = new ymaps.Map(mapContainer.value, {
          center: center,
          zoom: 17
        })

        let placemark = new ymaps.Placemark(
          center,
          {},
          {
            iconLayout: 'default#image',
            iconImageHref: '/location.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-10, -30]
          }
        )

        map.controls.remove('geolocationControl') // удаляем геолокацию
        map.controls.remove('searchControl') // удаляем поиск
        map.controls.remove('trafficControl') // удаляем контроль трафика
        map.controls.remove('typeSelector') // удаляем тип
        map.controls.remove('fullscreenControl') // удаляем кнопку перехода в полноэкранный режим
        map.controls.remove('zoomControl') // удаляем контрол зуммирования
        map.controls.remove('rulerControl') // удаляем контрол правил
        map.geoObjects.add(placemark)
      })
    }

    return {
      mapContainer
    }
  }
}
</script>

<style scoped>
.map {
  width: 70%;
  height: 500px;
  min-width: 300px;
  /* margin-bottom: 20%; */
}
.label {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
