'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <section className="min-h-screen w-full bg-[var(--background)] text-[var(--foreground)] font-montserrat px-6 py-20 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-[var(--heading)]">
          Contact Us
        </h1>
        <p className="text-[var(--muted)] text-center mb-12">
          Whether you’re curious about a demo, partnership, or just want to say hi — we’re listening.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[var(--muted)] mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-900 
                         dark:bg-zinc-900 dark:border-zinc-700 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-[#cc595a]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[var(--muted)] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-900 
                         dark:bg-zinc-900 dark:border-zinc-700 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-[#cc595a]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[var(--muted)] mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us what’s on your mind…"
              className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-900 
                         dark:bg-zinc-900 dark:border-zinc-700 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-[#cc595a]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#cc595a] px-6 py-2 rounded-md text-white font-semibold 
                       hover:brightness-110 transition disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'sent' && <p className="text-green-600 dark:text-green-400">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-600 dark:text-red-400">Something went wrong. Try again.</p>}
        </form>

        <div className="mt-12 text-center text-sm text-[var(--foreground)]">
          Or reach us at{' '}
          <a href="mailto:hello@xaltris.com" className="text-[#cc595a] hover:underline">
            hello@xaltris.com
          </a>
        </div>
      </div>
    </section>
  )
}
