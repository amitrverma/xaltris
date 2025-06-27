import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

type BlogParams = {
  params: { slug: string }
}

export async function generateMetadata(context: { params: { slug: string } }) {
  const { slug } = context.params

  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(source)

  return {
    title: `${data.title} | Blog – xaltris`,
    description: data.description ?? '',
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
