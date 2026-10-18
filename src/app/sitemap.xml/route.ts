import { readFileSync, readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BASE_URL = 'https://xaltris.com'

export async function GET() {
  const staticRoutes = [
    '',
    '/about',
    '/vibe-to-viable',
    '/portfolio',
    '/blog',
    '/for-good',
    '/contact',
  ]

  const blogDir = path.join(process.cwd(), 'src/content/blog')
  const blogEntries = readdirSync(blogDir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = readFileSync(path.join(blogDir, file), 'utf-8')
      const { data } = matter(source)

      return {
        route: `/blog/${file.replace('.mdx', '')}`,
        lastModified: data.updated ?? data.date,
      }
    })

  const allEntries = [
    ...staticRoutes.map((route) => ({ route, lastModified: undefined })),
    ...blogEntries,
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    ({ route, lastModified }) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    ${lastModified ? `<lastmod>${lastModified}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`.trim()

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
