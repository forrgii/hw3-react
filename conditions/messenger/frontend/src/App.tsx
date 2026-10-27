import React, { useState } from "react";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { ChatPage } from "../pages/ChatPage";
import { getToken, clearToken } from "../helpers/authStorage";
import type { User } from "../types";

export function App() {
  const [token, setToken] = useState<string | null>(getToken());
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
  };

  const handleLogout = () => {
    clearToken();
    setToken(null);
    setUser(null);
  };

  if (!token) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div>
      <nav>
        <button onClick={() => (window.location.hash = "#/profile")}>Профиль</button>
        <button onClick={() => (window.location.hash = "#/chat")}>Чат</button>
        <button onClick={handleLogout}>Выйти</button>
      </nav>
      {window.location.hash === "#/chat" ? <ChatPage /> : <ProfilePage />}
    </div>
  );
}

export default App;