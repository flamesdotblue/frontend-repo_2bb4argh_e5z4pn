import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-b from-[#0B0F19] to-[#0A0C14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-end px-6 pb-16 text-left text-white">
        <p className="mb-2 text-sm uppercase tracking-widest text-blue-300/80">Graphic Designer</p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
          Elevating brands with sleek, modern visuals
        </h1>
        <p className="mt-4 max-w-2xl text-blue-100/80">
          Portfolio showcasing clean, technology-inspired design with a dark, blue–purple aesthetic.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-90">
            View Projects
          </a>
          <a href="#contact" className="rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/5">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
