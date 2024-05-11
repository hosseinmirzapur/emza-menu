import axios from "axios"

axios.defaults.baseURL = "https://api.emza.cafe/public/api"
axios.defaults.headers.common["Content-Type"] = "application/json"

export const api = axios
