import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-foreground/70">
          © {new Date().getFullYear()} KMinds solutions. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/#services" className="hover:text-teal-600">Services</Link>
          <Link href="/projects" className="hover:text-teal-600">Projects</Link>
          <a href="mailto:kminds.solutions@gmail.com" className="hover:text-teal-600">Email</a>
        </div>
      </div>
    </footer>
  );
}


