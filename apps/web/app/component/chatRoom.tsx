import axios from "axios";
import { BACKEND_URL } from "../room/[slug]/page";
import ClientChatRoom from "./ClientChatRoom";
import { consoleAsyncStorage } from "next/dist/server/app-render/console-async-storage.external";

export default async function ChatRoom({ id }: { id: number }) {
  const response = await axios.get(BACKEND_URL + "chats/" + id);
  console.log("Y data h reponse ka " + JSON.stringify(response.data));
  return (
    <>
      <ClientChatRoom message={response.data} />
    </>
  );
}
