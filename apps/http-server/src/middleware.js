import { tokenSecret } from "@repo/db-common/prismaClient";
import jwt from "jsonwebtoken";
export function Middleware(req, res, next) {
    try {
        let tokenSplit;
        let token = req.headers.authorization || req.cookies?.token || "";
        if (token.startsWith("Bearer ")) {
            tokenSplit = req.headers.authorization?.split(" ")[1];
        }
        else {
            tokenSplit = token;
        }
        console.log(token);
        if (!token || token === null) {
            return res.json({
                success: false,
                message: "Invalid Token as Bearer ...",
            });
        }
        if (tokenSplit == null) {
            return res.json({
                success: false,
                message: "Invalid Token",
            });
        }
        const checkToken = jwt.verify(tokenSplit, tokenSecret);
        if (typeof checkToken === "string") {
            return res.json({
                success: false,
                message: "Token format was wrong",
            });
        }
        req.userId = checkToken.id;
        next();
    }
    catch (err) {
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
