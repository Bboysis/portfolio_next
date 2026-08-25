import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-display text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-paper light:text-navy">
        Page not found
      </h1>
      <p className="mt-2 text-paper/60 light:text-navy/60">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy transition hover:bg-accent-bright"
      >
        Back to Home
      </Link>
    </div>
  );
}
