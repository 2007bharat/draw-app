import jwt, { JwtPayload } from "jsonwebtoken";
import { WebSocket } from "ws";
import { WebSocketServer } from "ws";
import { IncomingMessage } from "node:http";
import { tokenSecret, client } from "@repo/db-common/prismaClient";
import { createImportSpecifier } from "typescript/unstable/ast/factory";
const wss = new WebSocketServer({ port: 8080 });
type Users<T> = {
  userId: number;
  rooms: T[];
  ws: WebSocket;
};
interface TokenPaylod {
  userId: number;
}
export type ClientTypeChat = "join_room" | "chat_room" | "leave_room";
type ClientJoinChatType<T> = { type: T; roomId: string; message?: string };
type RoomId = string;
const users: Users<RoomId>[] = [];
const rooms: RoomId[] = [];
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
    rooms: [],
    ws: ws,
  });

  ws.on("message", async (data: WebSocket.RawData) => {
    const parsedData: ClientJoinChatType<ClientTypeChat> = JSON.parse(
      data.toString(),
    );

    const currentUser = users.find((user) => {
      return user.ws === ws;
    });

    if (!currentUser) {
      return;
    }

    if (parsedData.type === "join_room") {
      rooms.push(parsedData.roomId);

      currentUser.rooms.push(parsedData.roomId);

      ws.send(`congratulation to join this ${parsedData.type}`);
    }

    if (parsedData.type === "leave_room") {
      currentUser.rooms = currentUser.rooms.filter(
        (room) => room !== parsedData.roomId,
      );
    }

    if (parsedData.type === "chat_room") {
      const roomId = parsedData.roomId;
      const message = parsedData.message;

      if (message === undefined) {
        return;
      }

      await client.chat.create({
        data: {
          roomId: Number(roomId),
          message,
          userChatId: user.id,
        },
      });

      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(
            JSON.stringify({
              type: "chat",
              message,
              roomId,
            }),
          );
        }
      });
    }
  });
});
