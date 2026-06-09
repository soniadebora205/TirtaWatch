import { PrismaClient } from "@prisma/client";

// ✅ Pola singleton global — wajib untuk Next.js
// Tanpa ini, setiap hot-reload di dev akan membuat koneksi Prisma baru
// hingga database kehabisan connection slot.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}