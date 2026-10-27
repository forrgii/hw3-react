import React, { useEffect, useState } from "react";
import type { User } from "../types";

type Props = {
  token: string;
};

export function ProfilePage({ token }: Props) {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [nickname, setNickname] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  useEffect(() => {
    // TODO: при монтировании получить профиль через userApi.getProfile(token)
    // TODO: заполнить профиль и стейты nickname/bio, обрабатывать ошибки через handleError, выставлять loading
  }, [token]);

  const handleSave = async () => {
    // TODO (опционально): вызвать userApi.updateProfile(token, { nickname, bio }), обновить профиль, обработать ошибки
  };

  return (
    <div>
      <h2>Профиль</h2>
      {loading && <p>Загрузка...</p>}
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      {/* TODO: отрисовать карточку профиля */}
      <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Ник" />
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Описание" />
        <button onClick={handleSave} disabled={loading}>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
