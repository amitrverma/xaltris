import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { ImageResponse } from 'next/og'

import { DEFAULT_AUTHOR } from './site-metadata'

export const BLOG_SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
}

type BlogSocialImageData = {
  title?: string
  description?: string
  date?: string
  author?: string
}

function formatSocialDate(date?: string) {
  if (!date) return 'Xaltris Notes'

  const parsedDate = new Date(date)
  if (Number.isNaN(parsedDate.getTime())) return date

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsedDate)
}

function truncate(value: string, maximumLength: number) {
  if (value.length <= maximumLength) return value
  return `${value.slice(0, maximumLength - 1).trimEnd()}…`
}

export function renderBlogSocialImage(slug: string) {
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const { data: rawData } = matter(source)
  const data = rawData as BlogSocialImageData
  const title = data.title ?? slug
  const description = truncate(
    data.description ?? 'Ideas on technology, products, organizations, and the people shaping them.',
    170,
  )
  const titleSize = title.length > 68 ? 52 : title.length > 42 ? 60 : 68

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          background: '#f7f2ea',
          color: '#162f2a',
          padding: '58px 68px 54px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '12px',
            display: 'flex',
            background: '#cc595a',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-74px',
            bottom: '-218px',
            display: 'flex',
            fontSize: 620,
            lineHeight: 1,
            fontWeight: 800,
            color: '#3f6759',
            opacity: 0.08,
            letterSpacing: '-0.12em',
          }}
        >
          X
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: 54,
                height: 54,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#3f6759',
                color: '#ffffff',
                fontSize: 34,
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              X
            </div>
            <div
              style={{
                display: 'flex',
                marginLeft: 18,
                fontSize: 25,
                fontWeight: 700,
                letterSpacing: '0.16em',
                color: '#315348',
              }}
            >
              XALTRIS
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#a53f43',
            }}
          >
            Notes / {formatSocialDate(data.date)}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 970 }}>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Georgia, serif',
              fontSize: titleSize,
              fontWeight: 700,
              letterSpacing: '-0.035em',
              lineHeight: 1.04,
              color: '#162f2a',
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              maxWidth: 925,
              marginTop: 25,
              fontSize: 25,
              lineHeight: 1.38,
              color: '#53675f',
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 22,
            borderTop: '2px solid #d7ddd6',
            fontSize: 18,
            fontWeight: 700,
            color: '#315348',
          }}
        >
          <div style={{ display: 'flex' }}>{data.author ?? DEFAULT_AUTHOR}</div>
          <div style={{ display: 'flex', color: '#a53f43' }}>xaltris.com/blog</div>
        </div>
      </div>
    ),
    BLOG_SOCIAL_IMAGE_SIZE,
  )
}
