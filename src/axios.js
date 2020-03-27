import axios from 'axios'

const instance = axios.create({
  baseURL: "https://89176a67.ngrok.io/api"
})

export default instance