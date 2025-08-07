export type Service = {
  slug: string;
  title: string;
  summary: string;
  bullets: string[];
  heroImage: string;
};

export const services: Service[] = [
  {
    slug: "flutter-apps",
    title: "Flutter Apps",
    summary:
      "Pixel‑perfect, performant apps for iOS and Android from a single codebase.",
    bullets: [
      "Rapid prototyping and production hardening",
      "CI/CD, testing, and store deployment",
      "Native integrations and push notifications",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "python-engineering",
    title: "Python Engineering",
    summary: "APIs, automation, and data tooling built on FastAPI/Django.",
    bullets: [
      "Scalable microservices and workers",
      "ETL/data pipelines and integrations",
      "Monitoring, observability, and reliability",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "agentic-rag",
    title: "Agentic AI & RAG",
    summary:
      "Production‑ready agents that plan, tool‑use, and retrieve knowledge with RAG.",
    bullets: [
      "LangChain/LlamaIndex, function/tool calling",
      "Vector databases & embeddings",
      "Guardrails, evals, and monitoring",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1551281044-8e8d0083f343?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "ml-deeplearning",
    title: "ML & Deep Learning",
    summary: "From notebooks to production MLOps and inference at scale.",
    bullets: [
      "NLP, CV, recommendation, forecasting",
      "Training pipelines and experiment tracking",
      "Serving, A/B tests, and monitoring",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1534759846116-57968a6b8f3b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "full-stack-web",
    title: "Full‑Stack Web",
    summary:
      "Modern web apps with Next.js/React, Node.js, PostgreSQL, and cloud‑native ops.",
    bullets: [
      "Design systems and accessible UX",
      "APIs, databases, authentication, and payments",
      "Infra as code, CI/CD, and observability",
    ],
    heroImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs() {
  return services.map((s) => s.slug);
}


