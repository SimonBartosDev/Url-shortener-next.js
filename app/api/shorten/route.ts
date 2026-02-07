// app/api/shorten/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { nanoid } from "nanoid";
import { z } from "zod";

// Validation schema
const shortenSchema = z.object({
    url: z.string().url("Please enter a valid URL including http:// or https://"),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Validate Input
        const validation = shortenSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.errors[0].message },
                { status: 400 }
            );
        }

        const { url } = validation.data;

        // 2. Generate a short code (6 characters)
        const shortCode = nanoid(6);

        // 3. Save to Database
        const link = await prisma.link.create({
            data: {
                originalUrl: url,
                shortCode,
            },
        });

        return NextResponse.json(link);

    } catch (error) {
        console.error("Error creating link:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}