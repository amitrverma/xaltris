

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

type PostMeta = {
  title?: string
  description?: string
}

type BlogPost = {
  slug: string
} & PostMeta

export default function Blog() {
  const postsDir = path.join(process.cwd(), 'src/content/blog')
  const files = fs.readdirSync(postsDir)

  const posts: BlogPost[] = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
    const { data } = matter(fileContent)
    const slug = filename.replace('.mdx', '')
    return { slug, ...data } as BlogPost
  })

  return (
    <section className="min-h-screen px-6 py-20 text-white font-montserrat max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-10">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-800 pb-6">
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 hover:underline"
            >
              {post.title ?? post.slug}
            </Link>
            <p className="mt-2 text-white text-sm">
              {post.description ?? 'No description provided.'}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
