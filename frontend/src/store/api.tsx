import axios from "axios";

// "http://localhost:8000/api"

export const axiosInstance = axios.create({
  baseURL:
    "http://43.245.131.203:8000/api"
});

export default axiosInstance;
