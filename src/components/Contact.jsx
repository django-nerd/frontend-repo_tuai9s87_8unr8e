import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks — we\'ll get back to you shortly!')
  }

  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s make something</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Tell us about your project, timeline and budget. We\'ll be in touch.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/70 text-sm mb-2">Name</label>
              <input required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-white/70 text-sm mb-2">Email</label>
              <input type="email" required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" placeholder="jane@email.com" />
            </div>
          </div>
          <div>
            <label className="block text-white/70 text-sm mb-2">Message</label>
            <textarea rows="5" required className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30" placeholder="Tell us about your project..." />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button type="submit" className="inline-flex items-center rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">Send Message</button>
            <p className="text-sm text-white/70">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
