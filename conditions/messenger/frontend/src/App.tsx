import React, { useState, useEffect } from "react";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { ChatPage } from "../pages/ChatPage";
import { getToken, clearToken } from "../helpers/authStorage";
import type { User } from "../types";

export function App() {
  const [token, setToken] = useState<string | null>(getToken());
  const [user, setUser] = useState<User | null>(null);
  
  // Добавляем состояние для отслеживания текущего пути
  const [currentHash, setCurrentHash] = useState(window.location.hash || "#/profile");

  // Слушаем изменения хэша в браузере
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#/profile");
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleLogin = (newToken: string, newUser: User) => {
    setToken(newToken);
    setUser(newUser);
    window.location.hash = "#/profile";
  };

  const handleLogout = () => {
    clearToken();
    setToken(null);
    setUser(null);
    window.location.hash = "";
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
      
      {currentHash === "#/chat" ? <ChatPage /> : <ProfilePage />}
    </div>
  );
}

export default App;