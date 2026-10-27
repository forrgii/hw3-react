import React, { useState } from "react";

type Props = {
  onSend: (text: string) => void;
  disabled: boolean;
};

export function MessageInput({ onSend, disabled }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите сообщение"
        disabled={disabled}
      />
      <button type="submit" disabled={disabled || !text.trim()}>
        Отправить
      </button>
    </form>
  );
}