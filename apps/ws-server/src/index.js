import jwt from "jsonwebtoken";
import { WebSocketServer } from "ws";
import { tokenSecret, client } from "@repo/db-common/prismaClient";
const wss = new WebSocketServer({ port: 8080 });
const users = [];
const rooms = [];
async function tokenValid(token) {
    try {
        const verifyToken = jwt.verify(token, tokenSecret);
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
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
}
wss.on("connection", async (ws, request) => {
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
    ws.on("message", (data) => {
        const parsedData = JSON.parse(data.toString());
        if (parsedData.type === "join_room") {
            rooms.push(parsedData.roomId);
            ws.send(`congratulation to join this ${parsedData.type}`);
        }
    });
});
