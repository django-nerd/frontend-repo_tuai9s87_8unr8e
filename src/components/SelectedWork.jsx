export default function SelectedWork() {
  const projects = [
    {
      title: 'Nike — Motion Campaign',
      tag: 'Commercial',
      thumb: 'https://images.unsplash.com/photo-1520975922284-8b456906c813?q=80&w=1320&auto=format&fit=crop',
    },
    {
      title: 'BMW — Electric Future',
      tag: 'Brand Film',
      thumb: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1320&auto=format&fit=crop',
    },
    {
      title: 'Artist — Neon Nights',
      tag: 'Music Video',
      thumb: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1320&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Selected Work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A curated selection of recent films and collaborations.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-white/30 text-white px-4 py-2 font-medium hover:border-white/60 transition">Start a project</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href="#contact" className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.thumb} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">{p.tag}</p>
                  <h3 className="text-white font-medium">{p.title}</h3>
                </div>
                <span className="text-white/70 group-hover:text-white transition">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
