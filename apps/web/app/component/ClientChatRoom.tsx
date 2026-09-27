"use client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useScoket } from "../hooks/useSocket";

type ClientChatRoomType = {
  id: number;
  message: string;
  userChatId: number;
  createdAt: Date;
  roomId: number;
};
type ParialClientChat = Partial<ClientChatRoomType>;
export default function ClientChatRoom({
  message,
  id,
}: {
  message: ClientChatRoomType[];
  id: number;
}) {
  const { loading, socket } = useScoket();
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [chat, setChat] = useState<ParialClientChat[]>(message);
  useEffect(() => {
    if (socket && !loading) {
      socket!.send(
        JSON.stringify({
          type: "join_room",
          roomId: id,
        }),
      );
      socket.onmessage = (event: MessageEvent) => {
        const parsedData = JSON.parse(event.data);
        if (parsedData.type === "chat_room") {
          setChat((prev) => {
            return [...prev, { message: parsedData.message }];
          });
        }
      };
    }
  });

  const handlerFunction: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setCurrentMessage(e.target.value);
  };
  const text =
    chat.length > 0 ? (
      chat.map((chat) => <p key={chat.id}>{chat.message}</p>)
    ) : (
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <h1> Chat NOT Found </h1>
      </div>
    );
  return (
    <>
      <input
        value={currentMessage}
        placeholder="..send Message"
        onChange={(e) => handlerFunction(e)}
      />
      <button
        onClick={() => {
          socket?.send(
            JSON.stringify({
              type: "chat_room",
              roomId: id,
              message: currentMessage,
            }),
          );
          setCurrentMessage("");
        }}
      >
        Send Message
      </button>
      {text}
    </>
  );
}
