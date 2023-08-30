import { io } from "socket.io-client";
import { BASE_URL } from "shared/api/api";
export const socket = io(BASE_URL);
