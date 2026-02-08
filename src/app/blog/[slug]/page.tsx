// app/blog/[slug]/page.tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'

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
    title: `${title} | Blog – Xaltris`,
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
<div className="bg-[#638475] text-white min-h-screen transition-colors duration-300">
  <article className="prose max-w-3xl mx-auto px-6 py-24 font-montserrat leading-relaxed space-y-6">
    <h1 className="text-4xl font-extrabold mb-2 text-[var(--foreground)]">
      {data.title}
    </h1>
    {data.date && (
      <p className="text-sm text-gray-500 mb-6">
        {new Date(data.date).toDateString()}
      </p>
    )}
    <MDXRemote source={content} />
  </article>
</div>

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

