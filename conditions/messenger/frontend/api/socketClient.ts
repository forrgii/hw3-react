let socket: WebSocket | null = null;

export function connectSocket(token: string, onMessage: (message: any) => void): WebSocket {
  if (socket) {
    socket.close();
  }

  socket = new WebSocket(import.meta.env?.VITE_WS_URL || "ws://localhost:3001");

  socket.onopen = () => {
    console.log("WebSocket connected");
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      if (data.type === "message:new") {
        onMessage(data.payload);
      }
    } catch (error) {
      console.error("WebSocket message parse error", error);
    }
  };

  socket.onclose = () => {
    console.log("WebSocket disconnected");
  };

  return socket;
}

export function sendSocketMessage(text: string, token: string): void {
  if (!socket || socket.readyState !== WebSocket.OPEN) {
    throw new Error("WebSocket not connected");
  }

  socket.send(
    JSON.stringify({
      type: "message:send",
      text,
      token,
    })
  );
}

export function disconnectSocket(): void {
  if (socket) {
    socket.close();
    socket = null;
  }
}