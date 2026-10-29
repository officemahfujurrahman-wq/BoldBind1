import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db, ensureSchema } from "@/lib/db";

const newsletterSchema = z.object({
  email: z.string().email("Valid email is required").max(200),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const { email } = parsed.data;
    const normalized = email.toLowerCase().trim();

    await ensureSchema();

    await db.newsletterSubscriber.upsert({
      where: { email: normalized },
      update: {},
      create: { email: normalized },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("[/api/newsletter] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
