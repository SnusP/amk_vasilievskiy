<script setup>
import instance from '@/AxiosInstance'
import { onMounted, ref } from 'vue'
const phone = ref()

function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, '')

  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
  }

  return phoneNumber
}

const getPhone = () => {
  instance
    .get('/about/')
    .then((response) => {
      console.log(response.status)
      if (response.status === 201) {
        phone.value = formatPhoneNumber(response.data.phone)
      }
    })
    .catch((error) => console.log(error))
}
onMounted(() => {
  getPhone()
})
</script>
<template>
  <div class="container-fluid">
    <div class="d-flex align-items-center justify-content-evenly">
      <div class="item">
        <a href="#Services" class="nav-links">
          <div class="nav-text">Услуги</div>
        </a>
      </div>
      <div class="item">
        <a href="#photos" class="nav-links">
          <div class="nav-text">Отзывы и фото</div>
        </a>
      </div>
      <div class="item">
        <a href="#formCont" class="nav-links">
          <div class="nav-text">Контакты</div>
        </a>
      </div>
      <div class="item">
        <a href="#about" class="nav-links">
          <div class="nav-text">О компании</div>
        </a>
      </div>
      <div class="item">
        <a href="#Map" class="nav-links">
          <div class="nav-text">Мы на карте</div>
        </a>
      </div>
      <div class="item"></div>
      <div class="item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-telephone"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          />
        </svg>
        <a href="tel:+79602801943" class="link nav-text">{{ phone }}</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media screen and (min-width: 1700px) {
  .nav-text {
    font-size: 30px;
  }
  .bi {
    width: 30px;
    height: 30px;
  }
}
@media screen and (min-width: 1400px) and (max-width: 1699px) {
  .nav-text {
    font-size: 26px;
  }
  .bi {
    width: 26px;
    height: 26px;
  }
}
@media screen and (min-width: 1100px) and (max-width: 1399px) {
  .nav-text {
    font-size: 22px;
  }
  .bi {
    width: 22px;
    height: 22px;
  }
}
@media screen and (min-width: 850px) and (max-width: 1099px) {
  .nav-text {
    font-size: 18px;
  }
  .bi {
    width: 18px;
    height: 18px;
  }
}
@media screen and (min-width: 650px) and (max-width: 849px) {
  .nav-text {
    font-size: 15px;
  }
  .bi {
    width: 15px;
    height: 15px;
  }
}
@media screen and (min-width: 550px) and (max-width: 649px) {
  .nav-text {
    font-size: 12px;
  }
  .bi {
    width: 12px;
    height: 12px;
  }
}

@media screen and (min-width: 450px) and (max-width: 549px) {
  .nav-text {
    font-size: 10px;
  }
  .bi {
    width: 10px;
    height: 10px;
  }
}

@media screen and (min-width: 350px) and (max-width: 449px) {
  .nav-text {
    font-size: 8px;
  }
  .bi {
    width: 8px;
    height: 8px;
  }
}
@media screen and (max-width: 349px) {
  .nav-text {
    font-size: 6px;
  }
  .bi {
    width: 6px;
    height: 6px;
  }
}

.item {
  color: white;
  white-space: nowrap;
}
.container-fluid {
  height: 20vh;
  background-color: #17181c;
}
.d-flex {
  height: 20vh;
  background-color: #17181c;
}
.link {
  text-decoration: none;
  color: white;
}
.nav-links {
  text-decoration: none;
  color: white;
  font-family: 'Manrope', sans-serif;
}
</style>
