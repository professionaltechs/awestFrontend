import axios from 'axios'

const adminToken = () => localStorage.getItem('adminAwestToken')

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/",  // local
    // baseURL: "https://backend.awestman.com//", // live
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*"
    }
})

// for Admin
export const axiosAuthInstance = axios.create({
    baseURL: "http://localhost:5000/",
    // baseURL: "https://backend.awestman.com//",
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
    }
})
axiosAuthInstance.interceptors.request.use(
    (config) => {
    config.headers.Authorization = `Bearer ${adminToken()}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );