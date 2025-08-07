import Link from "next/link";
import Image from "next/image";

const services = [
  {
    slug: "flutter-apps",
    title: "Flutter Apps",
    description:
      "Beautiful, performant cross‑platform apps for iOS, Android, and desktop with a single codebase.",
    image:
      "https://images.unsplash.com/photo-1551651653-cf07a6e4c421?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "python-engineering",
    title: "Python Engineering",
    description:
      "APIs, data pipelines, automation, and robust backend services using FastAPI, Django, and more.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "agentic-rag",
    title: "Agentic AI & RAG",
    description:
      "Task‑orchestrating AI agents and Retrieval‑Augmented Generation for knowledge‑aware automation.",
    image:
      "https://images.unsplash.com/photo-1555421689-43cad7100751?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "ml-deeplearning",
    title: "ML & Deep Learning",
    description:
      "End‑to‑end model development, MLOps, and deployment for CV, NLP, forecasting, and more.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "full-stack-web",
    title: "Full‑Stack Web",
    description:
      "Modern web apps with Next.js/React, Node.js, PostgreSQL, and cloud‑native infrastructure.",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-baseline justify-between gap-6 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Services</h2>
        <Link href="/projects" className="text-teal-600 hover:underline">
          See projects →
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <article
            key={svc.slug}
            className="group rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-background hover:shadow-md transition-shadow"
          >
            <div className="relative h-44">
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg">{svc.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{svc.description}</p>
              <div className="mt-4">
                <Link
                  href={`/services/${svc.slug}`}
                  className="text-teal-600 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


