import zod, { z, infer } from "zod";
export const UserSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string(),
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(9),
});

export const SignSchema = z.object({
  password: z.string(),
  email: z.string(),
});

export const chatRoomSchema = z.object({
  roomId: z.coerce.number(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
export type RoomResTypeBody = z.infer<typeof CreateRoomSchema>;
export type SignSchemaType = z.infer<typeof SignSchema>;
