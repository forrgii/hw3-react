import React, { useEffect, useState } from "react";
import type { Message } from "../types";

type Props = {
  token: string;
};

export function ChatPage({ token }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [socketStatus, setSocketStatus] = useState<string>("disconnected");
  const [socketClient, setSocketClient] = useState<any>(null);

  useEffect(() => {
    // TODO: при монтировании загрузить историю сообщений через messageApi.getMessages(token)
    // TODO: подключиться к сокету через connectSocket(token, { onMessage, onStatus })
    //  - onMessage: добавлять новые сообщения в стейт
    //  - onStatus: обновлять socketStatus
    // TODO: при размонтировании отключать сокет
  }, [token]);

  const handleSend = async (text: string) => {
    // TODO: вызвать messageApi.sendMessage(token, text), добавить отправленное сообщение в стейт без дублей
    // TODO: обрабатывать ошибки через handleError
  };

  return (
    <div>
      <h2>Чат</h2>
      <p>Статус сокета: {socketStatus}</p>
      {loading ? <p>Загрузка сообщений...</p> : null}
      {error ? <p style={{ color: "red" }}>{error}</p> : null}
      {/* TODO: отрисовать список сообщений и инпут отправки */}
    </div>
  );
}

export default ChatPage;
