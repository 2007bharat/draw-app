"use client";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState<string>("");
  const router = useRouter();
  function NavigationButton(): void {
    if (roomId.trim() === "") {
      return;
    } else {
      router.push(`/room/${roomId}`);
    }
  }
  const handlerFunction: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setRoomId(e.target.value);
  };
  return (
    <>
      <input
        value={roomId}
        placeholder="RoomId.."
        type="text"
        onChange={(e) => handlerFunction(e)}
      />
      <button onClick={NavigationButton}>Join Room</button>
    </>
  );
}
