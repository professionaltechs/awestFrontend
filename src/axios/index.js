import axios from 'axios'

const adminToken = () => localStorage.getItem('adminAwestToken')

export const axiosInstance = axios.create({
    // baseURL: "http://localhost:5000/",  // local
    baseURL: "http://52.71.29.228/", // live
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*"
    }
})

// for Admin
export const axiosAuthInstance = axios.create({
    // baseURL: "http://localhost:5000/",
    baseURL: "http://52.71.29.228/",
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