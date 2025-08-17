import { socialLinks } from "@/config/data";

export const revalidate = 3600;

export async function GET() {
    try {
        if (!socialLinks || !socialLinks?.length)
            return Response.json({ error: "No social links found!" });
        return Response.json(socialLinks);
    } catch (error) {
        return Response.json({ error: "Something went wrong!" });
    }
}
