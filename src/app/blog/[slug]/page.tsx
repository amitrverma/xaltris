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

  return (
    <main className="min-h-screen bg-[#f7f2ea] px-6 py-16 text-[#162f2a] transition-colors duration-300 sm:py-20">
      <article className="prose mx-auto max-w-5xl rounded-lg border border-[#d7ddd6] bg-white px-6 py-10 shadow-[0_18px_45px_-36px_rgba(22,47,42,0.55)] sm:px-10 sm:py-12">
        <Link
          href="/blog"
          className="not-prose mb-5 inline-flex text-sm font-semibold text-[#cc595a] transition-colors hover:text-[#a74648]"
        >
          Back to blog
        </Link>
        <h1 className="type-section-title mb-3 mt-4 text-[#162f2a]">
          {data.title}
        </h1>
        {data.date && (
          <p className="type-meta mb-8 text-[#7c8b85]">
            {new Date(data.date).toDateString()}
          </p>
        )}
        <MDXRemote source={content} />
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
