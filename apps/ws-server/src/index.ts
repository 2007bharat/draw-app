import jwt, { JwtPayload } from "jsonwebtoken";
import { WebSocket } from "ws";
import { WebSocketServer } from "ws";
import { IncomingMessage } from "node:http";
import { tokenSecret, client } from "@repo/db-common/prismaClient";
const wss = new WebSocketServer({ port: 8080 });
type Users = {
  userId: number;
  roomId: string[];
  ws: WebSocket;
};
interface TokenPaylod {
  userId: number;
}
const users: Users[] = [];

async function tokenValid(token: string) {
  try {
    const verifyToken = jwt.verify(token, tokenSecret as string) as TokenPaylod;
    if (verifyToken == null || verifyToken.userId == null) {
      return null;
    }
    const userFindDb = await client.user.findUnique({
      where: {
        id: verifyToken.userId,
      },
      omit: {
        password: true,
      },
    });
    if (userFindDb?.id !== verifyToken.userId) {
      return null;
    }
    return userFindDb;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}
wss.on("connection", async (ws: WebSocket, request: IncomingMessage) => {
  const url = new URLSearchParams(request.url?.split("?")[1]);
  const token = url.get("token");
  if (token == null) {
    ws.close();
    return;
  }
  const user = await tokenValid(token);
  if (user?.id == null) {
    ws.close();
    return;
  }

  users.push({
    userId: user.id,
    roomId: [],
    ws: ws,
  });

  ws.on("message", (data: WebSocket.RawData) => {
    console.log(data);
    const parsedData = JSON.parse(data.toString());
  });
});
