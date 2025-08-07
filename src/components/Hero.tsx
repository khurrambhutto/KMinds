import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Shipping reliable software and intelligent systems
          </h1>
          <p className="mt-6 text-base sm:text-lg text-foreground/70 max-w-prose">
            KMinds solutions builds production-grade Flutter apps, Python backends, agentic
            AI and RAG automations, machine learning and deep learning models, and modern
            full‑stack web applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-md bg-teal-600 text-white px-5 py-3 hover:bg-teal-500"
            >
              Get a quote
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md border border-black/10 dark:border-white/15 px-5 py-3 hover:bg-black/5 dark:hover:bg-white/10"
            >
              See projects
            </Link>
          </div>
        </div>

        <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1600&auto=format&fit=crop"
            alt="Developers collaborating"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}


