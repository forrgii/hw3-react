import React, { useState } from "react";
import type { User } from "../types";

type Props = {
  onLogin: (token: string, user: User) => void;
};

export function LoginPage({ onLogin }: Props) {
  const [phone, setPhone] = useState<string>("+79990000000");
  const [password, setPassword] = useState<string>("123456");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: вызвать authApi.login с телефоном и паролем
    // TODO: при успехе сохранить токен через authStorage.setToken и вызвать onLogin(token, user)
    // TODO: показать сообщение об ошибке через handleError при неуспехе
    // TODO: выставлять флаги loading/error
  };

  return (
    <div>
      <h2>Вход</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Входим..." : "Войти"}
        </button>
      </form>
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
    </div>
  );
}

export default LoginPage;
