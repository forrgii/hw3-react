import React from "react";
import type { Message } from "../types";

type Props = {
  messages: Message[];
};

export function MessageList({ messages }: Props) {
  return (
    <ul>
      {messages.map((msg) => (
        <li key={msg.id}>
          <strong>{msg.author}:</strong> {msg.text}
        </li>
      ))}
    </ul>
  );
}