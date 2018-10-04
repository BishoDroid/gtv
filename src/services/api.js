import {create} from 'apisauce'
import AppConfig from '../config/AppConfig'

// define the api
const api = create({
  baseURL: AppConfig.apiUrl,
  headers: {
      'Accept': 'application/json',
      'X-API-KEY': '5RM6jXnX4Y4W6Q2JxIqqDawevQBZ4ZeR6QJBvAaP',
      'Content-Type': 'application/json'
    }
})

export default api;