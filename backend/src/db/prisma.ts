import { PrismaClient } from "@prisma/client";

/**
 * Prisma Client Singleton
 *
 * Ensures only one instance of PrismaClient exists throughout the application lifecycle.
 * This pattern prevents connection pool exhaustion and database connection issues.
 *
 * In development, Next.js and other frameworks reload modules on file changes,
 * which can inadvertently create multiple PrismaClient instances.
 * This singleton pattern prevents that by reusing the same instance across reloads.
 *
 * In production, a single instance is created once and reused for the lifetime of the app.
 */

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/**
 * Graceful shutdown handler
 * Disconnects the Prisma Client when the process exits
 */
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export default prisma;
