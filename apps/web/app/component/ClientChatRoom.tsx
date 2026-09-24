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

export default function ClientChatRoom({
  message,
  id,
}: {
  message: ClientChatRoomType[];
  id: number;
}) {
  const { loading, socket } = useScoket();
  const [chat, setChat] = useState<string>("sst");
  useEffect(() => {
    if (socket && !loading) {
      socket!.send(
        JSON.stringify({
          type: "join_room",
          roomId: id,
        }),
      );
    }
  });
  const handlerFunction: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChat(e.target.value);
  };
  const text =
    message.length > 0 ? (
      message.map((chat) => <p key={chat.id}>{chat.message}</p>)
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
        value={chat}
        placeholder="..send Message"
        onChange={(e) => handlerFunction(e)}
      />
      <button>Send Message</button>
      {text}
    </>
  );
}
