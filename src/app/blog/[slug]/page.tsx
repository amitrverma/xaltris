// app/blog/[slug]/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '../../../components/JsonLd'
import {
  AMIT_PERSON_ID,
  DEFAULT_AUTHOR,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
} from '../../../lib/site-metadata'

type PostData = {
  title?: string
  description?: string
  date?: string
  updated?: string
  author?: string
  layout?: string
}

function formatPostDate(date: string) {
  const parsedDate = new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    return date
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsedDate)
}

function BlogPostHeader({ data, title }: { data: PostData; title: string }) {
  const author = data.author ?? DEFAULT_AUTHOR
  const wasUpdated = Boolean(data.updated && data.updated !== data.date)

  return (
    <header className="blog-essay-header">
      <h1>{title}</h1>
      <p className="blog-essay-meta">
        By{' '}
        <Link
          href="/about"
          className="text-[#cc595a] underline decoration-1 underline-offset-4 transition-colors hover:text-[#a74648]"
        >
          {author}
        </Link>
        {data.date && (
          <>
            <span aria-hidden="true"> · </span>
            <time dateTime={data.date}>{formatPostDate(data.date)}</time>
          </>
        )}
        {wasUpdated && data.updated && (
          <>
            <span aria-hidden="true"> · </span>
            Updated{' '}
            <time dateTime={data.updated}>{formatPostDate(data.updated)}</time>
          </>
        )}
      </p>
    </header>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const { data: rawData } = matter(source)
  const data = rawData as PostData
  const title = data.title ?? slug
  const description = data.description ?? 'Read this blog post on xaltris.com'
  const author = data.author ?? DEFAULT_AUTHOR
  const postUrl = `${SITE_URL}/blog/${slug}`

  return {
    title: `${title} | Blog - Xaltris`,
    description,
    alternates: {
      canonical: postUrl,
    },
    authors: [
      {
        name: author,
        url: `${SITE_URL}/about`,
      },
    ],
    openGraph: {
      title,
      description,
      url: postUrl,
      siteName: 'Xaltris',
      publishedTime: data.date,
      modifiedTime: data.updated ?? data.date,
      authors: [`${SITE_URL}/about`],
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/logo.png`],
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const { content, data: rawData } = matter(source)
  const data = rawData as PostData
  const title = data.title ?? slug
  const description = data.description ?? 'Read this blog post on xaltris.com'
  const author = data.author ?? DEFAULT_AUTHOR
  const postUrl = `${SITE_URL}/blog/${slug}`
  const modifiedDate = data.updated ?? data.date
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    headline: title,
    description,
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    image: `${SITE_URL}/logo.png`,
    author: {
      '@type': 'Person',
      '@id': AMIT_PERSON_ID,
      name: author,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    inLanguage: 'en',
    ...(data.date ? { datePublished: data.date } : {}),
    ...(modifiedDate ? { dateModified: modifiedDate } : {}),
  }

  // The editorial essay treatment is the default for new posts. Older posts
  // can retain the original presentation with `layout: "standard"`.
  if (data.layout !== 'standard') {
    return (
      <>
        <JsonLd data={articleStructuredData} />
        <main className="fermat-post min-h-screen bg-[#f7f2ea] text-[#162f2a]">
          <article className="blog-essay fermat-article">
            <BlogPostHeader data={data} title={title} />
            <div className="fermat-article-content">
              <MDXRemote source={content} />
            </div>
          </article>
        </main>
      </>
    )
  }

  return (
    <>
      <JsonLd data={articleStructuredData} />
      <main className="min-h-screen bg-[#f7f2ea] text-[#162f2a] transition-colors duration-300">
        <article className="blog-essay">
          <BlogPostHeader data={data} title={title} />
          <div className="blog-essay-content">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>
    </>
  )
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'src/content/blog')
  const files = fs.readdirSync(blogDir)

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }))
}
