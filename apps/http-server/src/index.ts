import bcrypt from "bcrypt";
import express, { Request } from "express";
import {
  chatRoomSchema,
  CreateRoomSchema,
  RoomResTypeBody,
  SignSchema,
  SignSchemaType,
  UserSchema as User,
  UserSchema,
  UserSchemaType,
} from "@repo/types-common/index";
import { client, tokenSecret } from "@repo/db-common/prismaClient";
import jwt from "jsonwebtoken";
import { Middleware } from "./middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";

declare global {
  namespace Express {
    interface Request {
      userId: number;
    }
  }
}

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.post("/sign-up", async (req: Request<{}, {}, UserSchemaType>, res) => {
  const userSafeParse = UserSchema.safeParse(req.body);
  if (!userSafeParse.success) {
    return res.json({
      success: userSafeParse.success,
      message: "All input fileds are required",
    });
  }

  const existUser = await client.user.findUnique({
    where: {
      email: userSafeParse.data.email,
      username: userSafeParse.data.password,
    },
  });
  if (existUser) {
    return res.status(300).json({
      success: false,
      message: "User already exist",
    });
  }
  const hashPass = await bcrypt.hash(userSafeParse.data.password, 13);
  const user = await client.user.create({
    data: {
      email: userSafeParse.data.email,
      password: hashPass,
      username: userSafeParse.data.username,
    },
    omit: {
      password: true,
    },
  });

  res.json({
    success: userSafeParse.success,
    message: "User Created Successfully",
    user,
  });
});

app.post("/sign-in", async (req: Request<{}, {}, SignSchemaType>, res) => {
  const { email, password } = req.body;

  try {
    const parseData = SignSchema.safeParse(req.body);
    if (!parseData.success) {
      return res.json({
        success: parseData.success,
        message: "Wrong credential are send",
      });
    }

    const user = await client.user.findFirst({
      where: {
        email: email,
      },
    });
    if (user === null) {
      return res.json({
        success: false,
        message: "User Not found",
      });
    }
    const hasedPassCheck = await bcrypt.compare(password, user.password);
    if (!hasedPassCheck) {
      return res.json({
        message: "Credentail are wrong",
        success: hasedPassCheck,
      });
    }

    const token = jwt.sign({ id: user.id }, tokenSecret as string);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });
    res.json({
      success: true,
      message: "Login Successful",
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.json({
        success: false,
        message: err.message,
      });
    }
    res.json({
      success: false,
      message: "Internal Server Problem ",
    });
  }
});

app.post(
  "/room",
  Middleware,
  async (req: Request<{}, {}, RoomResTypeBody>, res) => {
    const userId = req.userId;
    try {
      const parsedData = CreateRoomSchema.safeParse(req.body);
      if (!parsedData.success) {
        return res.json({
          message: "Incorect Input",
        });
      }
      const Room = await client.room.create({
        data: {
          AdminId: userId,
          name: parsedData.data.name,
        },
      });
      res.json({
        success: parsedData.success,
        message: "Room created Succesfully",
        roomId: Room.id,
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.json({
          success: false,
          message: err.message,
        });
      }
      res.json({
        success: false,
        message: "Internal Server Problem ",
      });
    }
  },
);

app.get(
  "/chats/:roomId",
  Middleware,
  async (req: Request<{ roomId: string }>, res) => {
    const parsedData = chatRoomSchema.safeParse(req.params);
    if (!parsedData.success) {
      return res.json({
        success: parsedData.success,
        message: "RoomId not-found",
      });
    }

    try {
      const chat = await client.chat.findMany({
        where: {
          roomId: Number(parsedData.data.roomId),
        },
        orderBy: {
          id: "desc",
        },
        take: 100,
      });

      if (chat.length === 0) {
        return res.json({
          success: false,
          message: [],
        });
      }
      res.json({
        success: parsedData.success,
        message: chat,
      });
    } catch (err) {
      if (err instanceof Error) {
        return res.json({
          success: false,
          message: err.message,
        });
      }
      res.json({
        success: false,
        message: "Internal Server Problem ",
      });
    }
  },
);

app.get(
  "/room/:name",
  Middleware,
  async (req: Request<{ name: string }>, res) => {
    const name = req.params.name;
    const room = await client.room.findFirst({
      where: {
        name,
      },
    });

    res.json({
      success: true,
      message: room,
    });
  },
);
app.listen(5000, () => {
  console.log("server Started");
});
