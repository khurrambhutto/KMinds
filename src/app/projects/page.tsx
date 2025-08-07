import Image from "next/image";

const projects = [
  {
    title: "Agentic customer support",
    desc: "Multi‑tool agent answering support questions with RAG over knowledge base.",
    image:
      "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Cross‑platform fintech app",
    desc: "Flutter mobile app with real‑time data and secure authentication.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Demand forecasting pipeline",
    desc: "ML models with automated training and deployment, monitored in production.",
    image:
      "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Projects</h1>
      <p className="mt-3 text-foreground/70 max-w-prose">
        A few representative engagements. Details available on request.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
            <div className="relative h-48">
              <Image src={p.image} alt={p.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


