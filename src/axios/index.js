import axios from "axios";

const adminToken = () => localStorage.getItem("adminAwestToken");

// const localURL = "http://localhost:5000/";
const productionURL = "https://backend.awestman.com/";

export const axiosInstance = axios.create({
  // baseURL: localURL,
  baseURL: productionURL,
  headers: {
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
  },
});

// for Admin
export const axiosAuthInstance = axios.create({
  // baseURL: localURL,
  baseURL: productionURL,
  headers: {
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
  },
});
axiosAuthInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${adminToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
