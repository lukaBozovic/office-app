import {axiosInstance} from "./axios";

export const login = (values) => {
    return axiosInstance.post('auth/login', values);
}