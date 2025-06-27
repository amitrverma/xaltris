export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://xaltris.com/sitemap.xml
`.trim()

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
