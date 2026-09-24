import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
const adapter = new PrismaPg({
  connectionString:
    "postgresql://neondb_owner:npg_JFbdEtnI9HD4@ep-aged-cell-b5d7shce-pooler.c-7.us-east-2.aws.neon.tech/chat-App?sslmode=verify-full&channel_binding=require",
});

export const client: PrismaClient = new PrismaClient({ adapter });
export const tokenSecret =
  "ASdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdasdfasdfasdfasdfasd";
console.log(process.env.DATABASE_URL);
