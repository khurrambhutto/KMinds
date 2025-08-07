import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">About KMinds solutions</h2>
          <p className="mt-3 text-foreground/70 max-w-prose">
            We are a team of engineers who love building useful software. From mobile to web, from
            classic backends to intelligent systems, we deliver reliable, maintainable solutions that
            scale.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>• Senior experience in product and consulting</li>
            <li>• Pragmatic approach: ship value fast, iterate, measure</li>
            <li>• Clear communication and transparent processes</li>
          </ul>
        </div>
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1600&auto=format&fit=crop"
            alt="Team working"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}


