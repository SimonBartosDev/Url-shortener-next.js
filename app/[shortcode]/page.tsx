// app/[shortcode]/page.tsx
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

interface PageProps {
    params: Promise<{ shortcode: string }>;
}

export default async function RedirectPage({ params }: PageProps) {
    const { shortcode } = await params;

    // 1. Find the link in the DB
    const link = await prisma.link.findUnique({
        where: { shortCode: shortcode },
    });

    if (!link) {
        return (
            <div className="h-screen flex items-center justify-center text-2xl font-bold">
                404 - Link Not Found
            </div>
        );
    }

    // 2. Increment Click Counter (Async - don't await strictly if speed is key, but good for accuracy)
    await prisma.link.update({
        where: { id: link.id },
        data: { clicks: { increment: 1 } },
    });

    // 3. Redirect to the original URL
    redirect(link.originalUrl);
}