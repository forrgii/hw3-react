import React, { useEffect, useState } from "react";
import { getMessages, sendMessage } from "../api/messageApi";
import { connectSocket, sendSocketMessage, disconnectSocket } from "../api/socketClient";
import { getToken } from "../helpers/authStorage";
import { handleError } from "../helpers/handleError";
import { MessageList } from "../components/MessageList";
import { MessageInput } from "../components/MessageInput";
import type { Message } from "../types";

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [socketStatus, setSocketStatus] = useState<"connected" | "disconnected">("disconnected");

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setError("Нет токена");
      setLoading(false);
      return;
    }

    loadHistory();
    const socket = connectSocket(token, (newMessage: Message) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    socket.onopen = () => setSocketStatus("connected");
    socket.onclose = () => setSocketStatus("disconnected");

    return () => {
      disconnectSocket();
    };
  }, []);

  const loadHistory = async () => {
    setLoading(true);
    try {
      const history = await getMessages();
      setMessages(history);
    } catch (err) {
      setError(handleError(err));
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async (text: string) => {
    const token = getToken();
    if (!token) {
      setError("Нет токена");
      return;
    }

    try {
      await sendMessage(text);
    } catch (err) {
      try {
        sendSocketMessage(text, token);
      } catch (wsErr) {
        setError(handleError(wsErr));
      }
    }
  };

  return (
    <div>
      <h2>Чат</h2>
      <div>Статус сокета: {socketStatus}</div>
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
      {loading ? <div>Загрузка сообщений...</div> : <MessageList messages={messages} />}
      <MessageInput onSend={handleSend} disabled={socketStatus !== "connected"} />
    </div>
  );
}

export default ChatPage;