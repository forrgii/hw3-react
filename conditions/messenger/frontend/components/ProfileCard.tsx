import React from "react";
import type { User } from "../types";

type Props = {
  profile: User | null;
};

export function ProfileCard({ profile }: Props) {
  if (!profile) return null;

  // TODO: отобразить nickname, phone и bio из профиля (можно в простом div/карточке)
  return <div>{/* TODO: профиль */}</div>;
}

export default ProfileCard;
