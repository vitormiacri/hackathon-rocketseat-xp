import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.100.81.93:3000/',
})

export default api
