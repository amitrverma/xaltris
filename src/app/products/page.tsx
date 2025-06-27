export const metadata = {
  title: 'Products | Xaltris Technologies',
  description:
    'Explore our AI-driven tools that help teams work smarter, healthier, and more efficiently.',
}

export default function ProductsPage() {
  return (
    <section className="min-h-screen px-6 py-20 font-montserrat text-white bg-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-16 text-center">Our Products</h1>

{/* Clarity */}
<div className="bg-zinc-900 rounded-2xl p-8 shadow-md border border-zinc-800 mb-12">
  <h2 className="text-3xl font-bold text-cyan-400 mb-4">Clarity</h2>
  <p className="text-gray-300 mb-6">
    <strong>Work Smarter. Live Healthier.</strong><br />
    Clarity is a workforce well-being tool that helps businesses balance productivity and burnout — without surveillance. It detects hidden inefficiencies, overwork patterns, and underused tools, helping teams stay focused and healthy.
  </p>
  <div className="flex justify-end">
    <a
      href="/products/clarity"
      className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-semibold px-6 py-2 rounded-md hover:brightness-110 transition"
    >
      Learn More
    </a>
  </div>
</div>

{/* Momentum */}
<div className="bg-zinc-900 rounded-2xl p-8 shadow-md border border-zinc-800">
  <h2 className="text-3xl font-bold text-fuchsia-400 mb-4">Momentum</h2>
  <p className="text-gray-300 mb-6">
    <strong>Precision Meets Performance.</strong><br />
    Momentum is a real-time performance management platform built for modern teams. With dashboards, activity tracking, and Mood-o-Meter analytics, it helps organizations optimize workflows while staying human-aware.
  </p>
  <div className="flex justify-end">
    <a
      href="/products/momentum"
      className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold px-6 py-2 rounded-md hover:brightness-110 transition"
    >
      Learn More
    </a>
  </div>
</div>

      </div>
    </section>
  )
}
