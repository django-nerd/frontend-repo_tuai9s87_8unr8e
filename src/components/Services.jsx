export default function Services() {
  const items = [
    {
      title: 'Commercials',
      desc: 'High-end ads and campaign films with concept development, direction and post-production.',
    },
    {
      title: 'Brand Content',
      desc: 'Short-form stories for brands and products across social, web and experiential.',
    },
    {
      title: 'Music Videos',
      desc: 'Performance and narrative videos with bold art direction and cinematography.',
    },
    {
      title: 'Documentary',
      desc: 'Character-driven mini-docs and behind-the-scenes that reveal authentic stories.',
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What we do</h2>
          <p className="mt-3 text-white/70 max-w-2xl">From idea to final delivery, we handle creative, production and finishing with a design-led approach.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <h3 className="text-white font-medium text-lg">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
