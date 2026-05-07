// app/blog/[slug]/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(source)
  const title = data.title ?? slug
  const description = data.description ?? 'Read this blog post on xaltris.com'
  const baseUrl = 'https://xaltris.com'

  return {
    title: `${title} | Blog - Xaltris`,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'Xaltris',
      images: [
        {
          url: `${baseUrl}/logo.png`,
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
      images: [`${baseUrl}/logo.png`],
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
  const { content, data } = matter(source)

  if (data.layout === 'fermat') {
    return (
      <main className="fermat-post min-h-screen bg-[#f7f2ea] text-[#162f2a]">
        <article className="blog-essay fermat-article">
          <Link
            href="/blog"
            className="blog-essay-back"
          >
            Back to blog
          </Link>
          <header className="blog-essay-header">
            <p className="blog-essay-kicker">Blog</p>
            <h1>{data.title}</h1>
            {data.date && (
              <p className="blog-essay-meta">
                {new Date(data.date).toDateString()}
              </p>
            )}
          </header>
          <div className="fermat-article-content">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#162f2a] transition-colors duration-300">
      <article className="blog-essay">
        <Link
          href="/blog"
          className="blog-essay-back"
        >
          Back to blog
        </Link>
        <header className="blog-essay-header">
          <p className="blog-essay-kicker">Blog</p>
          <h1>{data.title}</h1>
          {data.date && (
            <p className="blog-essay-meta">
              {new Date(data.date).toDateString()}
            </p>
          )}
        </header>
        <div className="blog-essay-content">
          <MDXRemote source={content} />
        </div>
      </article>
    </main>
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
