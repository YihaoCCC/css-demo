import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import router from '../router'
class http {
    axiosInstance: AxiosInstance
    constructor(config:AxiosRequestConfig) {
        this.axiosInstance = axios.create(config)
        this.axiosInstance.interceptors.request.use((config:AxiosRequestConfig) => {
            return config
        })
        this.axiosInstance.interceptors.response.use((res:AxiosResponse) => {
            if(res.data) {
                if(res.data.code === 401) {
                    router.push('/login')
                }
                return res.data
            } else {
                return res.data
            }
        })
    }
    getInstance() {
        return this.axiosInstance
    }
}


export default http