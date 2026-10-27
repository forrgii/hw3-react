import type { Message } from "../types";

const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:3001";

function authHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
}

export async function getMessages(token: string): Promise<Message[]> {
  // TODO: запросить GET /messages (Fetch) с заголовком Authorization Bearer <token>, вернуть список сообщений
  return Promise.reject(new Error("Not implemented"));
}

export async function sendMessage(token: string, text: string): Promise<Message> {
  // TODO: отправить POST /messages (Axios) c { text } и заголовком Authorization, вернуть созданное сообщение
  return Promise.reject(new Error("Not implemented"));
}
