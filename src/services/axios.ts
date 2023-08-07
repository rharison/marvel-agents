import axios from "axios";
const PERMISSAO_API = import.meta.env.PERMISSAO_API;
const BASE_URL_API = 'https://gateway.marvel.com/'
import { getApiCredentials } from "../utils/security";

export const axiosInstance = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "permissao": PERMISSAO_API,
  },
});

axiosInstance.interceptors.request.use((config) => {
    const { ts, apikey, hash } = getApiCredentials();
    config.params = {
        ...config.params,
        ts,
        apikey,
        hash,
    };
    return config;
});