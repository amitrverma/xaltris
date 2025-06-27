import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

type BlogParams = {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogParams) {
  const { slug } = params
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
          url: `${baseUrl}/xaltris-social.png`,
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
      images: [`${baseUrl}/xaltris-social.png`],
    },
  }
}


export default async function BlogPost({ params }: BlogParams) {
  const filePath = path.join(process.cwd(), 'src/content/blog', `${params.slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(source)

  return (
    <article className="prose prose-invert prose-xl max-w-2xl mx-auto px-6 py-24 font-montserrat leading-relaxed space-y-6">
      <h1 className="text-4xl font-extrabold text-white mb-2">{data.title}</h1>
      {data.date && (
        <p className="text-sm text-gray-400 mb-6">{new Date(data.date).toDateString()}</p>
      )}
      <MDXRemote source={content} />
    </article>
  )
}
