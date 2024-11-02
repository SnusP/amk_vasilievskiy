import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://amk-vo.online/api'
})

export default instance
