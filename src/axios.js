import axios from 'axios'

const instance = axios.create({
  baseURL: "https://937e3062.ngrok.io/api"
})

export default instance