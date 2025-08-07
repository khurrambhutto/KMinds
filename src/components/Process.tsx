const steps = [
  {
    title: "1. Discover",
    desc: "We clarify goals, constraints, and success metrics, then propose the right approach.",
  },
  {
    title: "2. Design",
    desc: "Architecture and UX design with a focus on reliability, performance, and maintainability.",
  },
  {
    title: "3. Build",
    desc: "Agile delivery in tight iterations with continuous feedback and demos.",
  },
  {
    title: "4. Launch & Scale",
    desc: "Production hardening, monitoring, and growth support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-2xl sm:text-3xl font-semibold">Process</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.title} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-background">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


