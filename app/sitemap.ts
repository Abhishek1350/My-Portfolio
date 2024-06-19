import { MetadataRoute } from 'next'
import { getBlogSlugs} from '@/sanity/lib/actions';
import { IBlog } from '@/sanity/lib/types';

interface IRoute {
    path: string;
    lastmod?: string;
    priority?: number;
}

const staticRoutes: IRoute[] = [
    {
        path: "/",
        priority: 1,
    },
    {
        path: "/projects",
        priority: 0.9,
    },
    {
        path: "/blogs",
        priority: 0.8,
    },
    {
        path: "/contact",
        priority: 0.9,
    },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogs: IBlog[] = await getBlogSlugs();

    const dynamicRoutes: IRoute[] = blogs.map((blog) => ({
        path: `/blogs/${blog.slug}`,
        lastmod: new Date((blog as any)._updatedAt).toISOString(),
        priority: 0.8,
    }));

    const sitemap: MetadataRoute.Sitemap = [];

    staticRoutes.forEach((route) => {
        sitemap.push({
            url: `${process.env.NEXT_PUBLIC_CURRENT_SITE_URL}${route.path}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: route.priority || 1,
        });
    });

    dynamicRoutes.forEach((route) => {
        sitemap.push({
            url: `${process.env.NEXT_PUBLIC_CURRENT_SITE_URL}${route.path}`,
            lastModified: route.lastmod,
            changeFrequency: "monthly",
            priority: route.priority || 1,
        });
    });

    return sitemap;
}