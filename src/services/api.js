import axios from 'axios'
const api = axios.create({
  //baseURL: "http://localhost:4000"
  baseURL: "http://142.93.11.203:4000"
})

export default api