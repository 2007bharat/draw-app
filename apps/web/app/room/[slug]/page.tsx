import axios, { AxiosError, AxiosResponse } from "axios";
import { JSX } from "react";
import ChatRoom from "../../component/chatRoom";
import { cookies } from "next/headers";

export const BACKEND_URL = "http://localhost:5000/";

export async function getRoom<GetRoomProps extends string>(name: GetRoomProps) {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    const response = await axios.get(BACKEND_URL + "room/" + name, {
      headers: {
        Cookie: `token=${token}`,
      },
    });
    return response.data.message.id;
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
  return <ChatRoom id={roomId} />;
}
