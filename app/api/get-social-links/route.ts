import { getSocialLinks } from "@/lib/actions";
import { sortByPriority } from "@/lib/utils";

export const revalidate = 3600;

export async function GET() {
    try {
        const socialLinks = await getSocialLinks();
        if (!socialLinks || !socialLinks.length)
            return Response.json({ error: "No social links found!" });
        const data = sortByPriority(socialLinks).map((link, index) => {
            return {
                id: index + 5,
                ...link,
            };
        });
        return Response.json(data);
    } catch (error) {
        return Response.json({ error: "Something went wrong!" });
    }
}
