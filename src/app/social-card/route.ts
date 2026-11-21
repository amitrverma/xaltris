import { NextRequest } from 'next/server'

import { renderSiteSocialImage } from '../../lib/site-social-image'

export function GET(request: NextRequest) {
  const label = request.nextUrl.searchParams.get('label') ?? 'Xaltris'
  const title = request.nextUrl.searchParams.get('title') ?? 'Senior technology judgment, applied where it matters.'
  const description =
    request.nextUrl.searchParams.get('description') ??
    'Product building and Fractional CTO leadership for founder-led product teams.'

  return renderSiteSocialImage({ label, title, description })
}
