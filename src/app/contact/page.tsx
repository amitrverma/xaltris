export const metadata = {
  title: 'Contact | Xaltris Technologies',
  description: 'Get in touch with the Xaltris team — we’d love to hear from you.',
  openGraph: {
    title: 'Contact | Xaltris Technologies',
    description: 'Get in touch with the Xaltris team — whether it’s about a project, partnership, or just to say hi.',
    url: 'https://xaltris.com/contact',
    siteName: 'Xaltris',
    images: [
      {
        url: '/xaltris-social.png',
        width: 1200,
        height: 630,
        alt: 'Contact Xaltris',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Xaltris',
    description: 'Reach out to Xaltris — we’re always up for a good conversation.',
    images: ['/xaltris-social.png'],
  },
}

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 py-20 font-montserrat text-white bg-black max-w-2xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-6 text-center">Contact Us</h1>
      <p className="text-gray-400 text-center mb-12">
        Whether you’re curious about a demo, partnership, or just want to say hi — we’re listening.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-1">Message</label>
          <textarea
            rows={5}
            placeholder="Tell us what’s on your mind…"
            className="w-full bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-2 rounded-md text-white font-semibold hover:brightness-110 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center text-sm text-white">
        Or reach us at{' '}
        <a href="mailto:hello@xaltris.com" className="text-cyan-400 hover:underline">
          hello@xaltris.com
        </a>
      </div>
    </section>
  )
}
