<script setup>
import instance from '@/AxiosInstance'
import { ref } from 'vue'
const fileName = ref('')

const handleFileChange = () => {
  const file = document.getElementById('input__file').value
  fileName.value = file.split('\\').pop()
  console.log(fileName)
}
// const sendForm = () => {
//   const form = event.target
//   const formData = new FormData(form)
//   console.log(formData)
//   instance
//     .post('/email', formData)
//     .then((response) => {
//       console.log(response.status)
//       if (response.status == 200) {
//         console.log()
//         document.getElementById('status').innerHTML = 'Успешно отправлено!'
//         document.getElementById('status').style.color = '#22bb33'
//         document.getElementById('formContainer').style.border = 'medium solid #22bb33'
//       }
//     })
//     .catch((error) => {
//       console.log(error)
//       document.getElementById('status').innerHTML = 'Произошла ошибка'
//       document.getElementById('status').style.color = 'red'
//       document.getElementById('formContainer').style.border = 'medium solid red'
//     })
//   document.getElementById('name').value = ''
//   document.getElementById('phone').value = ''
//   document.getElementById('message').value = ''
//   document.getElementById('input__file').value = ''
//   fileName.value = ''
// }
const sendForm = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = new FormData(form)
  console.log(formData)

  instance
    .post('/email', formData)
    .then((response) => {
      console.log(response.status)
      if (response.status == 200) {
        document.getElementById('status').innerHTML = 'Успешно отправлено!'
        document.getElementById('status').style.color = '#22bb33'
        const formContainer = document.getElementById('formContainer')
        if (formContainer) {
          formContainer.style.border = 'medium solid #22bb33'
        } else {
          console.error('Элемент formContainer не найден.')
        }
      }
    })
    .catch((error) => {
      console.log(error)
      document.getElementById('status').innerHTML = 'Произошла ошибка'
      document.getElementById('status').style.color = 'red'
      const formContainer = document.getElementById('formContainer')
      if (formContainer) {
        formContainer.style.border = 'medium solid red'
      } else {
        console.error('Элемент formContainer не найден.')
      }
    })

  document.getElementById('name').value = ''
  document.getElementById('phone').value = ''
  document.getElementById('message').value = ''
  document.getElementById('input__file').value = ''
  fileName.value = ''
}
</script>
<template>
  <div class="container-fluid" id="formCont">
    <div class="d-flex justify-content-center mainCont">
      <div class="d-flex justify-content-center formContainer" id="formCont">
        <div class="form" id="myform">
          <h2>Связаться с нами</h2>
          <hr style="width: 80%; margin: auto" />
          <form @submit.prevent="sendForm" id="form">
            <div class="input-wrapper">
              <input type="text" id="name" placeholder="Ваше имя" name="name" required />
              <div class="input-line"></div>
            </div>
            <div class="input-wrapper">
              <input type="text" id="phone" placeholder="Телефон для связи" name="phone" required />
              <div class="input-line"></div>
            </div>
            <div class="input-wrapper">
              <textarea
                id="message"
                placeholder="Текст сообщения"
                class="message"
                name="message"
                required
              ></textarea>
              <div class="input-line"></div>
            </div>
            <div class="input__wrapper">
              <input
                name="picture"
                type="file"
                id="input__file"
                class="input input__file"
                @change="handleFileChange"
                multiple
              />
              <label for="input__file" class="input__file-button">
                <span class="input__file-icon-wrapper"
                  ><img class="input__file-icon" src="/save.svg" alt="Выбрать файл" width="25"
                /></span>
                <span class="input__file-button-text" v-if="!fileName">Выберите файл</span>
                <span class="input__file-button-text" v-else>{{ fileName }}</span>
              </label>
              <h3 id="status" class="status"></h3>
            </div>
            <button type="submit" class="btn btn-primary">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.status {
  margin-top: 5%;
  font-size: 20px;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  /* color: #22bb33; */
}
.container-fluid {
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.formContainer {
  min-width: 325px;
  width: 50%;
  background-color: white;
  margin-top: 5%;
  padding-bottom: 5%;
  /* border: medium solid #22bb33; */
}
input,
textarea {
  color: black;
  text-align: center;
}
.btn {
  margin-top: 10%;
  width: 50%;
}
.fileInput {
  margin-top: 10%;
}
.form {
  text-align: center;
  padding-top: 5%;
}
.message {
  width: 50%;
  min-width: 220px;
}
.input-wrapper {
  position: relative;
  margin-top: 5%;
  width: 25vw;
  min-width: 220px;
}

.input-line {
  position: relative;
  margin: auto;
  width: 40%;
  min-width: 220px;
  height: 2px;
  background-color: #000;
}

input[type='text'] {
  text-align: center;
  border: none;
  outline: none;
  padding: 8px 0;
  font-size: 16px;
  font-family: 'Manrope', sans-serif;
}

.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}

.input__file {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}

.input__file-icon-wrapper {
  height: 60px;
  width: 60px;
  margin-right: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-right: 1px solid #fff;
}

.input__file-button-text {
  text-align: center;
  line-height: 1;
  margin-top: 1px;
  font-weight: 800;
  font-family: 'Manrope', sans-serif;
}

.input__file-button {
  width: 100%;
  max-width: 300px;
  min-width: 220px;
  height: 50px;
  background: #6b6b6b59;
  color: black;
  font-size: 1.125rem;
  font-weight: 600;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 auto;
}
</style>
