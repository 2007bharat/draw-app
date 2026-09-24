import axios, { AxiosError, AxiosResponse } from "axios";
import { JSX } from "react";
import ChatRoom from "../../component/chatRoom";

export const BACKEND_URL = "http://localhost:5000/";

export async function getRoom<GetRoomProps extends string>(name: GetRoomProps) {
  try {
    const response = await axios.get(BACKEND_URL + "room/" + name);
    console.log("DAta" + response.data.message.room.id);
    return response.data.message.room.id;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log("This is error" + err.response?.data);
    }
  }
}
export default async function ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const roomId = await getRoom<string>(slug);
  console.log("id h y" + roomId);
  return <ChatRoom id={roomId} />;
}
