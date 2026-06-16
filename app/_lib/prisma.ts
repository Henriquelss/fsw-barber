import { PrismaClient } from "../../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"

declare global {
  var cachedPrisma: PrismaClient
}

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL environment variable")
}

const prismaClientOptions = {
  adapter: new PrismaPg(databaseUrl),
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient(prismaClientOptions)
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient(prismaClientOptions)
  }
  prisma = global.cachedPrisma
}

export const db = prisma
