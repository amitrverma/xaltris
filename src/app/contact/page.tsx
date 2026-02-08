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
    <section className="min-h-screen w-full bg-[#638475] text-white font-montserrat px-6 py-20 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-[var(--heading)]">
          Contact Me
        </h1>
        <p className=" text-center mb-12">
          Whether you&apos;re curious about a demo, partnership, or just want to say hi — I&apos;m listening.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold  mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-900 
                         
                        
                         focus:outline-none focus:ring-2 focus:ring-[#cc595a]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold  mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-900 
                         
                        
                         focus:outline-none focus:ring-2 focus:ring-[#cc595a]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold  mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us what’s on your mind…"
              className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-900 
                         
                        
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

          {status === 'sent' && <p className="text-green-600">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-600">Something went wrong. Try again.</p>}
        </form>

        <div className="mt-12 text-center text-sm text-white/90">
          Or reach me at{' '}
          <a
            href="mailto:hello@xaltris.com"
            className="inline-flex items-center rounded-md px-2 py-0.5 font-semibold text-white bg-white/12 border border-white/30 hover:bg-white/20 transition-colors"
          >
            hello@xaltris.com
          </a>
        </div>
      </div>
    </section>
  )
}



