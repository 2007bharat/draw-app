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

declare global {
  namespace Express {
    interface Request {
      userId: number;
    }
  }
}

const app = express();
app.use(express.json());
app.post("/sign-up", async (req: Request<{}, {}, UserSchemaType>, res) => {
  const userSafeParse = UserSchema.safeParse(req.body);
  if (!userSafeParse.success) {
    return res.json({
      success: userSafeParse.success,
      message: "All input fileds are required",
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
    res.cookie("token", token);
    res.setHeader("Authorization", `Bearer ${token}`);
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

app.post("/room", async (req: Request<{}, {}, RoomResTypeBody>, res) => {
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
});

app.get("chat/:roomId", async (req: Request<{ roomId: string }>, res) => {
  const parsedData = chatRoomSchema.safeParse(req.params);
  if (!parsedData.success) {
    return res.json({
      success: parsedData.success,
      message: "RoomId not-found",
    });
  }

  try {
    const chat = await client.room.findMany({
      where: {
        id: Number(parsedData.data.roomId),
      },
      orderBy: {
        id: "desc",
      },
      take: 100,
    });
    res.json({
      success: parsedData.success,
      message: [chat],
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
app.listen(5000, () => {
  console.log("server Started");
});
