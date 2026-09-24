import { tokenSecret } from "@repo/db-common/prismaClient";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function Middleware(req: Request, res: Response, next: NextFunction) {
  try {
    let tokenSplit;
    let token = req.cookies?.token || "";

    if (!token) {
      return res.json({
        success: false,
        message: "Invalid Token as Bearer ...",
      });
    }

    type TokenPayload = {
      id: number;
    };
    const checkToken = jwt.verify(token, tokenSecret) as TokenPayload;
    if (typeof checkToken === "string") {
      return res.json({
        success: false,
        message: "Token format was wrong",
      });
    }

    req.userId = checkToken.id;
    next();
  } catch (err) {
    if (err instanceof Error) {
      return res.json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
