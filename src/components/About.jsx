export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-white">About</h2>
            </div>
            <div className="md:col-span-2 text-white/80 leading-relaxed space-y-5">
              <p>
                We are a creative studio focused on filmmaking, design and post-production. Our work blends concept, art direction and technical craft to deliver cinematic results.
              </p>
              <p>
                We collaborate with agencies, brands and artists from pitch to final delivery, assembling the right team for every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
