import Link from 'next/link'

export const metadata = {
  title: 'Solutions | Xaltris Technologies',
  description:
    'Whether you need strategic guidance, custom tools, or AI-driven workflows — Xaltris helps you solve the right problems, faster.',
  openGraph: {
    title: 'Solutions | Xaltris Technologies',
    description:
      'Explore how Xaltris delivers strategic tech leadership, custom builds, and practical AI solutions — built with care, not fluff.',
    url: 'https://xaltris.com/solutions',
    siteName: 'Xaltris',
    images: [
      {
        url: '/xaltris-social.png',
        width: 1200,
        height: 630,
        alt: 'Solutions by Xaltris',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions by Xaltris',
    description:
      'Fractional CTO. Internal platforms. Quietly effective AI. Xaltris builds what your business really needs.',
    images: ['/xaltris-social.png'],
  },
}


export default function SolutionsPage() {
  return (
    <section className="min-h-screen px-6 py-20 font-montserrat text-white bg-black max-w-5xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6">Solutions</h1>
      <p className="text-gray-400 mb-12">
        Not every challenge needs a product. Some need judgment, speed, and someone who’s been there before. These are the kinds of problems we help solve at Xaltris.
      </p>

      {/* Fractional CTO */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-cyan-400 mb-2">Fractional CTO</h2>
        <p className="text-gray-300 mb-2">
          Strategic tech leadership without the full-time overhead. We help you architect smartly, ship faster, and avoid overengineering. Ideal for scaling startups or solo founders who need experienced technical judgment.
        </p>
  <Link href="/blog/fractional-cto" className="text-sm text-cyan-400 hover:underline">
    Read more →
  </Link>
      </div>

      {/* Custom Build Support */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-fuchsia-400 mb-2"> Custom-Built Solutions</h2>
        <p className="text-gray-300">         
        Need something that doesn’t exist yet? We design and deliver internal platforms, microtools, and workflow fixes — built from scratch. Clean. Scoped. Shippable.
        </p>
      </div>
      {/* AI-Powered Solutions */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-2">AI-Powered Solutions</h2>
        <p className="text-gray-300">
          We design and deliver AI-driven solutions that solve real operational problems — not just experiment with prompts. We help you use AI where it works best: quietly, efficiently, and without drama.
        </p>
      </div>
 </section>
  )
}
