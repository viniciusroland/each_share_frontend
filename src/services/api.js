import axios from 'axios'
const api = axios.create({
  baseURL: "https://viniciusroland.tech"
  // baseURL: "http://localhost:4000"
})

export default api