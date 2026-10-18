'use client'

import { useState } from 'react'
import { CalendarClock, Download, Mail, MessageCircle, Phone, Send } from 'lucide-react'

const contactEmail = 'hello@xaltris.com'
const companyProfileHref = '/case-studies/xaltris-technologies.pdf'
const contactPhoneE164 = '+918551915656'
const contactPhoneDisplay = '+91-8551915656'
const whatsAppHref = `https://wa.me/${contactPhoneE164.replace(/^\+/, '')}?text=${encodeURIComponent('Hi Amit, I would like to talk about building software with Xaltris.')}`

const contactChannels = [
  { label: 'WhatsApp', detail: 'Fastest for a quick first conversation.', value: 'Start a chat', href: whatsAppHref, Icon: MessageCircle, external: true },
  { label: 'Email', detail: 'Best for a detailed brief, context, or documents.', value: contactEmail, href: `mailto:${contactEmail}?subject=Project%20conversation%20with%20Xaltris`, Icon: Mail },
  { label: 'Call', detail: 'Useful when the problem is easier to talk through.', value: contactPhoneDisplay, href: `tel:${contactPhoneE164}`, Icon: Phone },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) throw new Error('Contact request failed')
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="bg-[#f7f2ea] text-[#162f2a]">
      <section className="relative overflow-hidden bg-[#3f6759] px-6 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true"><div className="hero-grid" /></div>
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">Contact</p>
            <h1 className="hero-primary-title mt-6 max-w-4xl text-white">Start with the real situation.</h1>
          </div>
          <div className="border-t border-white/18 pt-6">
            <p className="type-lead max-w-2xl text-white/92">Tell me what you are building, where it stands, and what is getting in the way. We can work out whether I am the right person to help.</p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold text-white/90">
              <span className="rounded-md border border-white/18 bg-white/8 px-3 py-1.5">Fractional CTO</span>
              <span className="rounded-md border border-white/18 bg-white/8 px-3 py-1.5">Product build</span>
              <span className="rounded-md border border-white/18 bg-white/8 px-3 py-1.5">Vibe Code Rescue</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
            <div><p className="type-kicker text-[#a53f43]">Choose a channel</p><h2 className="type-section-title mt-5">Whatever gets us to clarity fastest.</h2></div>
            <p className="type-body-lg max-w-2xl text-[#53675f] lg:justify-self-end">The first useful outcome is usually not a proposal. It is understanding the problem, the stage, and what needs to become real.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {contactChannels.map(({ label, detail, value, href, Icon, external }) => (
              <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="group flex min-h-[16rem] flex-col justify-between rounded-xl border border-[#d7ddd6] bg-white p-6 shadow-[0_18px_45px_-38px_rgba(22,47,42,0.55)] transition-all hover:-translate-y-1 hover:border-[#cc595a]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc595a]/50">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f2ea] text-[#315348]"><Icon className="h-6 w-6" strokeWidth={1.9} /></span>
                <span><span className="type-card-title block">{label}</span><span className="type-body mt-3 block text-[#53675f]">{detail}</span></span>
                <span className="inline-flex items-center justify-between gap-3 border-t border-[#d7ddd6] pt-5 text-sm font-semibold text-[#a53f43]">{value}<Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#315348] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <p className="type-kicker text-[#d9bf69]">Prefer writing?</p>
            <h2 className="type-section-title mt-5 text-white">Send the short version.</h2>
            <p className="type-body-lg mt-6 text-white/82">A few lines are enough: what are you building, where are you stuck, and what would make the next thirty days useful?</p>
            <div className="mt-7 flex gap-4 border-t border-white/14 pt-6"><CalendarClock className="mt-1 h-6 w-6 shrink-0 text-[#d9bf69]" /><p className="type-body text-white/82">If there is a fit, the next step is a focused call to map the problem and decide what should happen first.</p></div>
            <a href={companyProfileHref} download className="mt-7 inline-flex items-center gap-2 font-semibold text-white underline decoration-white/35 underline-offset-4 hover:decoration-white"><Download className="h-4 w-4" />Download company profile</a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl bg-white p-6 text-[#162f2a] shadow-[0_28px_80px_-42px_rgba(0,0,0,0.8)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="text-sm font-semibold">Name</span><input type="text" name="name" value={form.name} onChange={handleChange} required autoComplete="name" placeholder="Your name" className="mt-2 w-full rounded-md border border-[#d7ddd6] bg-[#f7f2ea] px-4 py-3 outline-none transition focus:border-[#cc595a] focus:ring-2 focus:ring-[#cc595a]/25" /></label>
              <label className="block"><span className="text-sm font-semibold">Email</span><input type="email" name="email" value={form.email} onChange={handleChange} required autoComplete="email" placeholder="you@example.com" className="mt-2 w-full rounded-md border border-[#d7ddd6] bg-[#f7f2ea] px-4 py-3 outline-none transition focus:border-[#cc595a] focus:ring-2 focus:ring-[#cc595a]/25" /></label>
            </div>
            <label className="mt-5 block"><span className="text-sm font-semibold">What are you trying to make real?</span><textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="A rough description is enough." className="mt-2 w-full rounded-md border border-[#d7ddd6] bg-[#f7f2ea] px-4 py-3 outline-none transition focus:border-[#cc595a] focus:ring-2 focus:ring-[#cc595a]/25" /></label>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button type="submit" disabled={status === 'loading'} className="inline-flex items-center justify-center gap-2 rounded-md bg-[#a53f43] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8f3438] disabled:cursor-not-allowed disabled:opacity-65"><Send className="h-4 w-4" />{status === 'loading' ? 'Sending…' : 'Send message'}</button>
              <div aria-live="polite" className="text-sm font-semibold">
                {status === 'sent' && <p className="text-[#315348]">Message sent. I will reply by email.</p>}
                {status === 'error' && <p className="text-[#a53f43]">That did not send. Email {contactEmail} directly.</p>}
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
