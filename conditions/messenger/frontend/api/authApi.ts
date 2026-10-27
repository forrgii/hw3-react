import type { User } from "../types";
import axios from "axios";

const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:3001";

export type LoginPayload = {
  phone: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export async function login({ phone, password }: LoginPayload): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/auth/login`, {
      phone,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}