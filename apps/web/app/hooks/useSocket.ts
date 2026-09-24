"use client";
import { useEffect, useState } from "react";

export function useScoket() {
  const [socket, setScoket] = useState<WebSocket | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      setLoading(false);
      setScoket(socket);
    };
  }, []);
  return {
    socket,
    loading,
  };
}
