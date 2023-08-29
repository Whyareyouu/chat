import axios from "axios";
import { ACCESS_TOKEN } from "shared/const/localStorage";

const BASE_URL = "http://localhost:5555";

export const chatAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
  },
});
