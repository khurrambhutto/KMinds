import Image from "next/image";
import Link from "next/link";
import { getService, getServiceSlugs } from "@/lib/services";
import type { Metadata } from "next";

type Params = { slug: string };

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return {
    title: `${service.title} — KMinds solutions`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <p>Service not found.</p>
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold">{service.title}</h1>
          <p className="mt-4 text-foreground/70 max-w-prose">{service.summary}</p>
          <ul className="mt-6 space-y-2 text-sm">
            {service.bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <Link href="/#contact" className="rounded-md bg-teal-600 text-white px-4 py-2">
              Get a quote
            </Link>
            <Link
              href="/projects"
              className="rounded-md border border-black/10 dark:border-white/15 px-4 py-2"
            >
              See projects
            </Link>
          </div>
        </div>
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}


