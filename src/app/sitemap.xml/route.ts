import { readdirSync } from 'fs'
import path from 'path'

const BASE_URL = 'https://xaltris.com'

export async function GET() {
  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/products',
    '/products/clarity',
    '/products/momentum',
    '/solutions',
  ]

  const blogDir = path.join(process.cwd(), 'src/content/blog')
  const blogSlugs = readdirSync(blogDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''))

  const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`)
  const allRoutes = [...staticRoutes, ...blogRoutes]

  const lastMod = new Date().toISOString()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${lastMod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`.trim()

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
