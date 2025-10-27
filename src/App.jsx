import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0C14] text-white">
      {/* Simple header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A0C14]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="text-sm font-medium tracking-wide text-white/90">Portfolio</div>
          <nav className="hidden gap-6 text-sm text-blue-100/80 sm:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0A0C14] py-8 text-center text-xs text-blue-100/60">
        © {new Date().getFullYear()} — Designed with a clean dark gradient aesthetic.
      </footer>
    </div>
  );
}

export default App;
