import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import type { Metadata } from 'next'

type PostMeta = {
  title?: string
  description?: string
  date?: string
}

type BlogPost = {
  slug: string
} & PostMeta

export const metadata: Metadata = {
  title: 'Blog | Xaltris Technologies',
  description:
    'Ideas, insights, and updates from the builders at Xaltris. Read about software, scale, and smarter execution.',
  openGraph: {
    title: 'Xaltris Blog',
    description:
      'Ideas, insights, and updates from the builders at Xaltris. Read about software, scale, and smarter execution.',
    url: 'https://xaltris.com/blog',
    siteName: 'Xaltris',
    images: [
      {
        url: 'https://xaltris.com/xaltris-social.png',
        width: 1200,
        height: 630,
        alt: 'Xaltris Blog Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xaltris Blog',
    description: 'Ideas, insights, and updates from the builders at Xaltris.',
    images: ['https://xaltris.com/xaltris-social.png'],
  },
}

export default function Blog() {
  const postsDir = path.join(process.cwd(), 'src/content/blog')
  const files = fs.readdirSync(postsDir)

  const posts: BlogPost[] = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
    const { data } = matter(fileContent)
    const slug = filename.replace('.mdx', '')
    return { slug, ...data } as BlogPost
  })

  // Sort by date descending
  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : 0
    const dateB = b.date ? new Date(b.date).getTime() : 0
    return dateB - dateA
  })

  return (
    <main className="min-h-screen bg-[#638475] text-white px-6 py-16 font-montserrat transition-colors duration-300">
      <section className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-12 text-white">Blog</h1>

        <ul className="space-y-10">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="border-b border-gray-600 pb-8 last:border-none"
            >
              {/* Post Title */}
              <Link
                href={`/blog/${post.slug}`}
                className="text-2xl font-semibold text-white hover:text-[#cc595a] transition-colors duration-200"
              >
                {post.title ?? post.slug}
              </Link>

              {/* Description */}
              <p className="mt-3 text-base text-gray-300 leading-relaxed">
                {post.description ??
                  'No description provided for this post yet.'}
              </p>

              {/* Date */}
              {post.date && (
                <p className="text-xs text-gray mt-2">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
