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
  async function (error) {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (
      error.response.status === 403 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      originalRequest._retry = true;

      const access_token = await chatAPI.post("/auth/refresh-token", {
        refreshToken,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
      return chatAPI(originalRequest);
    }
    return Promise.reject(error);
  }
);
