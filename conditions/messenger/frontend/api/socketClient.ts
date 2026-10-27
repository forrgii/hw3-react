import type { Message } from "../types";

const WS_URL = import.meta.env?.VITE_WS_URL || "ws://localhost:3001";

type SocketCallbacks = {
  onMessage?: (message: Message) => void;
  onStatus?: (status: string) => void;
};

export function connectSocket(token: string, { onMessage, onStatus }: SocketCallbacks) {
  // TODO:
  // 1) подключиться к WebSocket по WS_URL
  // 2) при открытии сообщать статус "connected", при закрытии — "disconnected"
  // 3) слушать сообщения; при type === "message:new" вызывать onMessage(payload)
  // 4) вернуть методы sendMessage(text) -> отправка { type: "message:send", payload: { text, token } }
  // 5) вернуть disconnect() для закрытия сокета
  return {
    sendMessage: (_text: string) => {
      throw new Error("Not implemented");
    },
    disconnect: () => {
      throw new Error("Not implemented");
    }
  };
}
