import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const tokenkey = import.meta.env.VITE_TOKEN;
const token = localStorage.getItem("accessToken");

//create axios
const apiInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

//request
apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Token added to headers:", token);
    } else {
      console.log("No token found");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//response
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      sessionStorage.clear();
    }
    return Promise.reject(error);
  }
);

export default apiInstance;
