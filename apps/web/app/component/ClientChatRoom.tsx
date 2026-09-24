"use client";
import React, { useState } from "react";

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
  console.log(chat);
  return (
    <>
      <h1>{JSON.stringify(chat)}</h1>
      {/* <input
        value={chat}
        placeholder="..send Message"
        onChange={(e) => handlerFunction(e)}
      />
      <button>Send Message</button>
      <div>
        {message.map((chat) => {
          return <p>{chat.message}</p>;
        })}
      </div> */}
    </>
  );
}
