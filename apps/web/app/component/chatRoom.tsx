import axios from "axios";
import { cookies } from "next/headers";

import ClientChatRoom from "./ClientChatRoom";
export const BACKEND_URL = "http://localhost:5000/";

export default async function ChatRoom({ id }: { id: number }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = await axios.get(BACKEND_URL + "chats/" + id, {
    headers: {
      Cookie: `token=${token}`,
    },
  });
  return <ClientChatRoom message={response.data.message} />;
}
