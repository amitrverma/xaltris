import { ImageResponse } from 'next/og'

export const SITE_SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
}

function truncate(value: string, maximumLength: number) {
  if (value.length <= maximumLength) return value
  return `${value.slice(0, maximumLength - 1).trimEnd()}…`
}

export function renderSiteSocialImage({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  const safeLabel = truncate(label, 42)
  const safeTitle = truncate(title, 92)
  const safeDescription = truncate(description, 185)
  const titleSize = safeTitle.length > 70 ? 50 : safeTitle.length > 46 ? 58 : 68

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
            height: 12,
            display: 'flex',
            background: '#3f6759',
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
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#a53f43',
            }}
          >
            {safeLabel}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 985 }}>
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
            {safeTitle}
          </div>
          <div
            style={{
              display: 'flex',
              maxWidth: 930,
              marginTop: 25,
              fontSize: 25,
              lineHeight: 1.38,
              color: '#53675f',
            }}
          >
            {safeDescription}
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
          <div style={{ display: 'flex' }}>Product Build · Fractional CTO</div>
          <div style={{ display: 'flex', color: '#a53f43' }}>xaltris.com</div>
        </div>
      </div>
    ),
    SITE_SOCIAL_IMAGE_SIZE,
  )
}
