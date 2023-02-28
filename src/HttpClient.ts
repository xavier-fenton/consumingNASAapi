import axios from "axios"


const nasaEndpoint= process.env.REACT_APP_NASA_ENDPOINT
const nasaApiKey = process.env.REACT_APP_NASA_API_KEY



axios.interceptors.request.use(
  config => {
    config.params = config.params ? config.params : {}
    
    
    const configUrl = config.url
    console.log(configUrl);
    
    if (configUrl.includes(nasaEndpoint)) {
      config.params["api_key"] = nasaApiKey
        
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getApod() {
    return axios.get(`${nasaEndpoint}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${nasaApiKey}`)
  },
}