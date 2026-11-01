import { profileDocument } from './profile-document'

// A standalone document keeps the shared profile focused and avoids a second
// navbar/footer. HTML metadata remains visible to WhatsApp and other crawlers.
export const dynamic = 'force-static'

export function GET() {
  return new Response(profileDocument, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
