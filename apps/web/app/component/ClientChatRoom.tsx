"use client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

type ClientChatRoomType = {
  id: number;
  message: string;
  userChatId: number;
  createdAt: Date;
  roomId: number;
};

export default function ClientChatRoom({
  message,
}: {
  message: ClientChatRoomType[];
}) {
  const [chat, setChat] = useState<string>("sst");

  const handlerFunction: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChat(e.target.value);
  };

  return (
    <>
      <input
        value={chat}
        placeholder="..send Message"
        onChange={(e) => handlerFunction(e)}
      />
      <button>Send Message</button>
      <div>
        {message.map((chat) => {
          return <p key={chat.id}>{chat.message}</p>;
        })}
      </div>
    </>
  );
}
