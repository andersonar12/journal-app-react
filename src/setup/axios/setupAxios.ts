import { AxiosStatic } from "axios"


export default function setupAxios(axios: AxiosStatic, store) {
  // axios.defaults.headers.Accept = 'application/json'
  axios.defaults.headers.options
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { accessToken },
      } = store.getState()

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      return config
    },
    (err) => console.log/* Promise.reject(err) */
  )
}
