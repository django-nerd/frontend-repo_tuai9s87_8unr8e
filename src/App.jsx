import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Contact />

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Your Studio. All rights reserved.</p>
          <div className="text-white/60 text-sm">Based in Anywhere • Working worldwide</div>
        </div>
      </footer>
    </div>
  )
}

export default App
