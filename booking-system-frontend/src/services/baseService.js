import axios from 'axios';

const baseService = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://tour-booking-system-production.up.railway.app" : 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

baseService.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default baseService;
