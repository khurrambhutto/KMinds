const techs = [
  "Flutter",
  "Dart",
  "Python",
  "FastAPI",
  "Django",
  "LangChain",
  "OpenAI",
  "LlamaIndex",
  "Vector DBs (PGV, Pinecone)",
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Kubernetes",
  "AWS/GCP/Azure",
];

export default function TechStack() {
  return (
    <section id="tech" className="bg-black/[.03] dark:bg-white/[.03] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Tech stack</h2>
        <p className="mt-3 text-foreground/70 max-w-prose">
          We choose the right tools for each job, with battle‑tested frameworks and modern
          infrastructure.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {techs.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full bg-background border border-black/10 dark:border-white/10 px-3 py-1 text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


