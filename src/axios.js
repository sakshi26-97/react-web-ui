import axios from 'axios'

const instance = axios.create({
  baseURL: "https://624a344c.ngrok.io/api"
})

export default instance