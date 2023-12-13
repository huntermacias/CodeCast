import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}		

// if we're not in production hot-reload is going to create a bunch of prisma instances
// we use globalThis because its not affected by hot-reload
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") globalThis.prisma = db;