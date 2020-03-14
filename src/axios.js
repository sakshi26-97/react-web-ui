import axios from 'axios'

const instance = axios.create({
  baseURL: "https://e58e724e.ngrok.io/api"
})

export default instance