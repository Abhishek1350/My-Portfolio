import { getSocialLinks } from "@/sanity/lib/actions";
import { ISocialLink } from "@/sanity/lib/types";

export async function GET() {
    try {
        const socialLinks: ISocialLink[] = await getSocialLinks();
        if (!socialLinks || !socialLinks.length)
            return Response.json({ error: "No social links found!" });
        const requiredData = socialLinks.map((link) => {
            return {
                id: link._id,
                title: link.title,
                url: link.url,
                priority: link.priority,
            };
        });
        return Response.json(requiredData);
    } catch (error) {
        return Response.json({ error: "Something went wrong!" });
    }
}
