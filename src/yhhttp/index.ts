import http from "./http";
import { base_url, time_out } from "./config";
import { AxiosRequestConfig } from "axios";
let config:AxiosRequestConfig = {
    baseURL: base_url,
    timeout: time_out
}
const yhHttp = new http(config)

export default yhHttp