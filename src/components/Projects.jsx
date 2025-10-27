const projects = [
  {
    title: 'Neon Grid Posters',
    description: 'A series of abstract posters with luminous grids and gradients.',
  },
  {
    title: 'Sleek Brand System',
    description: 'Minimal brand identity with dark UI, icon set, and typography.',
  },
  {
    title: 'Gradient Waves Landing',
    description: 'Hero visuals inspired by blue–purple digital waves.',
  },
  {
    title: 'Futuristic Deck',
    description: 'Corporate pitch deck with clean layouts and micro-illustrations.',
  },
  {
    title: 'Event Visual Pack',
    description: 'Stage backdrops, social graphics, and motion-ready assets.',
  },
  {
    title: 'Dashboard UI Kit',
    description: 'Dark UI components with accessible color system and grids.',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0A0C14] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Selected Work</h2>
            <p className="mt-2 text-sm text-blue-200/70">A curated set of recent projects</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:border-indigo-400/30 hover:shadow-[0_10px_50px_-15px_rgba(99,102,241,0.35)]"
            >
              <div className="mb-5 h-40 w-full rounded-lg bg-gradient-to-br from-indigo-600/30 via-purple-600/25 to-blue-600/30 transition group-hover:scale-[1.02]" />
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
