import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import SiteCta from '../../components/SiteCta'

type PostMeta = {
  title?: string
  description?: string
  date?: string
}

type BlogPost = {
  slug: string
} & PostMeta

export const metadata: Metadata = {
  title: 'My Notes',
  description:
    'Essays from Amit Verma on technology, work, organizations, science, history, and the human patterns that connect them.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Xaltris Blog',
    description:
      'Essays from Amit Verma on technology, work, organizations, science, history, and the human patterns that connect them.',
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
    description:
      'Essays from Amit Verma on technology, work, organizations, science, history, and the human patterns that connect them.',
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
    <main className="min-h-screen bg-[#f7f2ea] text-[#162f2a]">
      <section className="relative overflow-hidden bg-[#3f6759] px-6 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="hero-grid" /></div>
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">Blog</p>
            <h1 className="hero-primary-title mt-6 max-w-4xl text-white">My Notes.</h1>
          </div>
          <p className="type-lead max-w-2xl border-t border-white/18 pt-6 text-white/90">
            I write about technology, work, organizations, science, history, and the human patterns that connect them.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <ul className="grid gap-5">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="group rounded-xl border border-[#d7ddd6] bg-white p-6 shadow-[0_18px_45px_-38px_rgba(22,47,42,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#cc595a]/35 sm:p-8"
            >
              <Link href={`/blog/${post.slug}`} className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <span>
                  {post.date && (
                    <span className="type-meta text-[#a53f43]">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  )}
                  <span className="type-card-title mt-3 block text-[#162f2a] transition-colors group-hover:text-[#a53f43]">{post.title ?? post.slug}</span>
                  <span className="type-body mt-3 block max-w-3xl text-[#53675f]">{post.description ?? 'No description provided for this post yet.'}</span>
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7ddd6] text-[#a53f43] transition group-hover:border-[#cc595a]/40 group-hover:bg-[#f7f2ea]">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </section>

      <SiteCta eyebrow="Have a product question?" title="A useful conversation beats another generic framework." copy="If one of these ideas connects with a product you are building, bring the real context and we can work through it." />
    </main>
  )
}
