import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/studio/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_CURRENT_SITE_URL}/sitemap.xml`,
  }
}