import type { User } from "../types";
import { getToken } from "../helpers/authStorage";

const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:3001";

export async function getProfile(): Promise<User> {
  const token = getToken();
  if (!token) {
    throw new Error("No token");
  }

  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

export async function updateProfile(data: Partial<Pick<User, "nickname" | "bio">>): Promise<User> {
  const token = getToken();
  if (!token) {
    throw new Error("No token");
  }

  const response = await fetch(`${API_URL}/users/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}