import type { Metadata } from 'next'

export const SITE_URL = 'https://xaltris.com'
export const ORGANIZATION_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`
export const AMIT_PERSON_ID = `${SITE_URL}/about#amit-verma`
export const DEFAULT_AUTHOR = 'Amit Verma'

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  label?: string
  socialTitle?: string
  socialDescription?: string
  absoluteTitle?: boolean
}

export function createPageMetadata({
  title,
  description,
  path,
  label = 'Xaltris',
  socialTitle = title,
  socialDescription = description,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const pageUrl = new URL(path, SITE_URL).toString()
  const imageUrl = new URL('/social-card', SITE_URL)
  imageUrl.searchParams.set('label', label)
  imageUrl.searchParams.set('title', socialTitle)
  imageUrl.searchParams.set('description', socialDescription)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: pageUrl,
      siteName: 'Xaltris',
      images: [
        {
          url: imageUrl.toString(),
          width: 1200,
          height: 630,
          alt: `${socialTitle} — Xaltris`,
          type: 'image/png',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: socialDescription,
      images: [
        {
          url: imageUrl.toString(),
          alt: `${socialTitle} — Xaltris`,
        },
      ],
    },
  }
}
