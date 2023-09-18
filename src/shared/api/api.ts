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
    if (originalRequest.url === `/auth/refresh-token`) {
      return Promise.reject(error);
    }
    try {
      if (
        error.response.status === 401 &&
        !originalRequest._retry &&
        refreshToken
      ) {
        originalRequest._retry = true;
        const response = await chatAPI.post<{ token: string }>(
          "/auth/refresh-token",
          {
            refreshToken,
          }
        );
        if (!response.data?.token) {
          originalRequest._retry = false;
          return Promise.reject(error);
        }
        localStorage.setItem(ACCESS_TOKEN, response.data.token);
        originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
        return chatAPI(originalRequest);
      }
    } catch (e) {
      return Promise.reject(error);
    }
  }
);
