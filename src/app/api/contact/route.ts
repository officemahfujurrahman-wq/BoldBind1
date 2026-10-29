import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db, ensureSchema } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  company: z.string().max(160).optional().nullable(),
  email: z.string().email("Valid email is required").max(200),
  phone: z.string().max(40).optional().nullable(),
  service: z.string().max(120).optional().nullable(),
  budget: z.string().max(60).optional().nullable(),
  message: z.string().min(1, "Message is required").max(4000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = parsed.data;

    await ensureSchema();

    const saved = await db.contactMessage.create({
      data: {
        name: data.name,
        company: data.company || null,
        email: data.email,
        phone: data.phone || null,
        service: data.service || null,
        budget: data.budget || null,
        message: data.message,
      },
    });

    return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
  } catch (error) {
    console.error("[/api/contact] error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
