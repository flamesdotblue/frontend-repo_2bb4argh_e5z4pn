export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-[#0A0C14] to-[#0B0F19] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold sm:text-3xl">About</h2>
        <p className="mt-4 max-w-3xl text-blue-100/80">
          I craft modern, minimal visuals that balance clarity with character. From identity systems to presentation design
          and digital collateral, I focus on grids, hierarchy, and color that feels both premium and usable.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {['Brand Systems', 'Presentation Design', 'Art Direction', 'UI Graphics', 'Motion-Ready'].map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/90"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
