import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const client: PrismaClient = new PrismaClient({ adapter });
export const tokenSecret = process.env.USER_SECRET;
