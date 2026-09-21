import express, { Request } from "express";
import { UserSchema as User, UserSchemaType } from "@repo/types-common/index";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
app.post("/sign-up", (req: Request<{}, {}, UserSchemaType>, res) => {
  const UserSchema = User;
  const userSafeParse = UserSchema.safeParse(req.body);
});
app.get("/sign-up", (req, res) => {});
app.post("/sign-in", (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign(
    {
      id: 12341234,
    },
    "bharatbisht",
  );
  res.json({
    token,
  });
});
app.listen(5000, () => {
  console.log("server Started");
});
