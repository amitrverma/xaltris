'use client'

import { useState } from 'react'
import { CalendarClock, Mail, MessageCircle, Phone, Send } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
})

const contactEmail = 'hello@xaltris.com'
const contactPhoneE164 = '+918551915656'
const contactPhoneDisplay = '+91-8551915656'
const encodedWhatsAppMessage = encodeURIComponent(
  'Hi Amit, I would like to talk about building software with Xaltris.',
)
const whatsAppHref = `https://wa.me/${contactPhoneE164.replace(/^\+/, '')}?text=${encodedWhatsAppMessage}`
const phoneHref = `tel:${contactPhoneE164}`

const contactChannels = [
  {
    label: 'WhatsApp',
    detail: 'Fastest for a quick first conversation.',
    value: 'Start a chat',
    href: whatsAppHref,
    Icon: MessageCircle,
    primary: true,
  },
  {
    label: 'Email',
    detail: 'Best for a detailed brief, context, or documents.',
    value: contactEmail,
    href: `mailto:${contactEmail}?subject=Project%20conversation%20with%20Xaltris`,
    Icon: Mail,
  },
  {
    label: 'Call',
    detail: 'Useful when the problem is easier to talk through.',
    value: contactPhoneDisplay,
    href: phoneHref,
    Icon: Phone,
  },
]

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
    <main className="min-h-screen bg-[#638475] px-6 pt-28 pb-16 text-white font-montserrat transition-colors duration-300 sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-8 border-b border-white/12 pb-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7d281]">
              Contact
            </p>
            <h1
              className={`${playfairDisplay.className} mt-4 max-w-4xl text-[3.5rem] font-extrabold leading-[0.92] tracking-[-0.035em] text-white sm:text-[4.6rem] md:text-[5.6rem] lg:text-[6.2rem]`}
            >
              Start with a conversation.
            </h1>
          </div>

          <div className="max-w-2xl lg:pb-2">
            <p className="text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
              Pick the channel that matches the urgency and context. If it looks
              like I can help, we can move from there to a focused working
              session.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-[#f8f4ee]">
              <span className="rounded-md border border-white/18 bg-white/8 px-3 py-1.5">
                Fractional CTO
              </span>
              <span className="rounded-md border border-white/18 bg-white/8 px-3 py-1.5">
                Product build
              </span>
              <span className="rounded-md border border-white/18 bg-white/8 px-3 py-1.5">
                Technical direction
              </span>
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7d281]">
              Choose a channel
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-[#f8f4ee] sm:text-4xl">
              Whatever gets us to clarity fastest.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/72">
              For early-stage work, the first useful outcome is usually not a
              proposal. It is understanding the problem, the stage, and what
              needs to become real.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactChannels.map(({ label, detail, value, href, Icon, primary }) => (
              <a
                key={label}
                href={href}
                target={label === 'WhatsApp' ? '_blank' : undefined}
                rel={label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className={`group flex min-h-[16rem] flex-col justify-between rounded-lg border p-6 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
                  primary
                    ? 'border-[#e08a8b] bg-[#cc595a] shadow-[0_18px_50px_rgba(4,42,43,0.16)]'
                    : 'border-white/16 bg-white/8 hover:border-white/32 hover:bg-white/12'
                }`}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-[#f8f4ee]">
                  <Icon className="h-6 w-6" strokeWidth={1.9} />
                </span>
                <span>
                  <span className="block text-2xl font-bold tracking-[-0.03em] text-[#f8f4ee]">
                    {label}
                  </span>
                  <span className="mt-3 block text-base leading-7 text-white/76">
                    {detail}
                  </span>
                </span>
                <span className="inline-flex items-center justify-between gap-3 border-t border-white/14 pt-5 text-sm font-semibold text-white">
                  {value}
                  <Send
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-10 border-t border-white/12 py-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7d281]">
              Prefer writing?
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-[#f8f4ee] sm:text-4xl">
              Send the short version.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/72">
              A few lines are enough. What are you building, where are you
              stuck, and what would make the next thirty days useful?
            </p>
            <div className="mt-7 flex items-start gap-4 border-t border-white/10 pt-6">
              <CalendarClock className="mt-1 h-6 w-6 shrink-0 text-[#e7d281]" strokeWidth={1.8} />
              <p className="text-base leading-7 text-white/72">
                If there is a fit, the next step is a focused call to map the
                problem and decide what should happen first.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="block text-sm font-semibold text-[#f8f4ee]">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-md border border-white/18 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-[#e7d281] focus:ring-2 focus:ring-[#e7d281]/45"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-[#f8f4ee]">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-md border border-white/18 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-[#e7d281] focus:ring-2 focus:ring-[#e7d281]/45"
                />
              </label>
            </div>

            <label className="block">
              <span className="block text-sm font-semibold text-[#f8f4ee]">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me what you are trying to build or untangle."
                className="mt-2 w-full rounded-md border border-white/18 bg-white px-4 py-3 text-gray-950 outline-none transition focus:border-[#e7d281] focus:ring-2 focus:ring-[#e7d281]/45"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#e08a8b] bg-[#cc595a] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status === 'loading'}
              >
                <Send className="h-4 w-4" strokeWidth={2} />
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </button>

              {status === 'sent' && (
                <p className="text-sm font-semibold text-[#f8f4ee]">
                  Message sent. I will reply by email.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-semibold text-[#f8f4ee]">
                  Something went wrong. Email {contactEmail} directly.
                </p>
              )}
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}
