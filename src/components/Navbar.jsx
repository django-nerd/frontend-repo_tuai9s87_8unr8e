import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-white/10 border border-white/20 grid place-items-center">
                <span className="text-white font-semibold">TS</span>
              </div>
              <span className="text-white/90 font-semibold tracking-wide">Your Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">Book Now</a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition">Book Now</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
