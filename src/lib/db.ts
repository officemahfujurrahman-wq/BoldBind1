import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

/* ----------------------------------------------------------------------------
 * Auto schema bootstrap
 * On ephemeral hosts (e.g. Vercel serverless, /tmp) the SQLite file starts
 * empty. This creates the tables on first use so form submissions never fail
 * with "table does not exist".
 * -------------------------------------------------------------------------- */
let schemaReady: Promise<void> | null = null;

async function createTables(): Promise<void> {
  await db.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "ContactMessage" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "name" TEXT NOT NULL,
      "company" TEXT,
      "email" TEXT NOT NULL,
      "phone" TEXT,
      "service" TEXT,
      "budget" TEXT,
      "message" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  await db.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "NewsletterSubscriber" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "email" TEXT NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  await db.$executeRawUnsafe(
    `CREATE UNIQUE INDEX IF NOT EXISTS "NewsletterSubscriber_email_key" ON "NewsletterSubscriber"("email");`
  );
}

export function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = createTables().catch((error) => {
      // allow retry on the next request if bootstrap failed
      schemaReady = null;
      throw error;
    });
  }
  return schemaReady;
}
