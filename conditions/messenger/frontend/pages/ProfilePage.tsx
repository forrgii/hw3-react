import React, { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../api/userApi";
import { handleError } from "../helpers/handleError";
import { ProfileCard } from "../components/ProfileCard";
import type { User } from "../types";

export function ProfilePage() {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (err) {
      setError(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (data: { nickname: string; bio: string }) => {
    setSaving(true);
    setError("");
    try {
      const updated = await updateProfile(data);
      setProfile(updated);
    } catch (err) {
      setError(handleError(err));
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Загрузка профиля...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;
  if (!profile) return <div>Профиль не найден</div>;

  return (
    <div>
      <h2>Профиль</h2>
      <ProfileCard profile={profile} onSave={handleSave} saving={saving} />
    </div>
  );
}

export default ProfilePage;