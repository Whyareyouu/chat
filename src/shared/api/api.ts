import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "shared/const/localStorage";

export const BASE_URL = "http://localhost:5555";

export const chatAPI = axios.create({
  baseURL: BASE_URL,
});

chatAPI.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

chatAPI.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem(REFRESH_TOKEN)
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        const response = await chatAPI.post("/auth/refresh-token", {
          refreshToken,
        });
        if (response.data?.token) {
          localStorage.setItem(ACCESS_TOKEN, response.data.token);
        }
        originalRequest.headers.Authorization = `Bearer ${response.data?.token}`;
        return chatAPI(originalRequest);
      } catch (e) {
        return error;
      }
    }
    return Promise.reject(error);
  }
);
