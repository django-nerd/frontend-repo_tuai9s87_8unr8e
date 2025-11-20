import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[90vh]">
        <div className="max-w-3xl">
          <p className="text-white/90 uppercase tracking-[0.2em] text-sm mb-4">Video Production • Creative Studio</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white leading-[1.05]">
            Visual stories that move people
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            We craft films, commercials and branded content driven by concept, design and emotional impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">See Our Work</a>
            <a href="#contact" className="rounded-lg border border-white/30 text-white px-5 py-3 font-medium hover:border-white/60 transition">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
