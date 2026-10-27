import React from "react";
import type { Message } from "../types";

type Props = {
  messages: Message[];
};

export function MessageList({ messages }: Props) {
  if (!messages?.length) {
    return <p>Нет сообщений</p>;
  }

  // TODO: отрисовать список сообщений (author, text, createdAt)
  return <div>{/* TODO: список */}</div>;
}

export default MessageList;
