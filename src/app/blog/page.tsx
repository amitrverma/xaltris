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
        url: 'https://xaltris.com/logo.png',
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
    images: ['https://xaltris.com/logo.png'],
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
    <main className="min-h-screen bg-[#f7f2ea] px-6 pb-20 pt-12 text-[#162f2a] transition-colors duration-300 sm:pb-24 sm:pt-14">
      <section className="mx-auto max-w-5xl">
        <div className="mb-12 border-b border-[#d7ddd6] pb-10">
          <p className="type-kicker text-[#cc595a]">
            Blog
          </p>
          <h1
            className="type-hero mt-4 max-w-4xl"
          >
            My Notes.
          </h1>
          <p className="type-lead mt-5 max-w-2xl text-[#53675f]">
            Practical writing on product thinking, software delivery, AI leverage,
            and the engineering choices that matter after launch.
          </p>
        </div>

        <ul className="grid gap-5">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-lg border border-[#d7ddd6] bg-white p-6 shadow-[0_18px_45px_-36px_rgba(22,47,42,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cc595a]/35 sm:p-7"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="type-card-title text-[#162f2a] transition-colors duration-200 hover:text-[#cc595a]"
              >
                {post.title ?? post.slug}
              </Link>

              <p className="type-body mt-3 max-w-3xl text-[#53675f]">
                {post.description ??
                  'No description provided for this post yet.'}
              </p>

              {post.date && (
                <p className="type-meta mt-5 text-[#7c8b85]">
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
