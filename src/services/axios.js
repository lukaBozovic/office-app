


////////////////////////
// authorized request //
////////////////////////
import axios from "axios";
import {BASE_URL, STORAGE_KEYS} from "../utils/consts";

export const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.headers["lang"] = localStorage.getItem(
    STORAGE_KEYS.LANG
);
// Request interceptor
axiosInstance.interceptors.request.use(
    async (config) => {
        config.headers.Authorization = localStorage.getItem(STORAGE_KEYS.JWT)
            ? `${localStorage.get(STORAGE_KEYS.JWT)}`
            : "undefined";
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);