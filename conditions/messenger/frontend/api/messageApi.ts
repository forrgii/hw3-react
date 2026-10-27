import type { Message } from "../types";
import { getToken } from "../helpers/authStorage";
import axios from "axios";

const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:3001";

export async function getMessages(): Promise<Message[]> {
  const token = getToken();
  if (!token) {
    throw new Error("No token");
  }

  const response = await fetch(`${API_URL}/messages`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

export async function sendMessage(text: string): Promise<Message> {
  const token = getToken();
  if (!token) {
    throw new Error("No token");
  }

  const response = await axios.post<Message>(
    `${API_URL}/messages`,
    { text },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}