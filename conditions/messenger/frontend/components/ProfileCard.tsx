import React, { useState } from "react";
import type { User } from "../types";

type Props = {
  profile: User;
  onSave: (data: { nickname: string; bio: string }) => void;
  saving: boolean;
};

export function ProfileCard({ profile, onSave, saving }: Props) {
  const [nickname, setNickname] = useState(profile.nickname);
  const [bio, setBio] = useState(profile.bio);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ nickname, bio });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Телефон: {profile.phone}</label>
      </div>
      <div>
        <label>Никнейм:</label>
        <input value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>
      <div>
        <label>Описание:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>
      <button type="submit" disabled={saving}>
        {saving ? "Сохранение..." : "Сохранить"}
      </button>
    </form>
  );
}