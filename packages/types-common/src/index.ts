import zod, { z, infer } from "zod";
export const UserSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
