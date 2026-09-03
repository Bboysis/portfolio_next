"use client";

import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-accent/30 bg-accent/10 text-4xl">
          📴
        </div>

        <h1 className="mt-8 font-display text-3xl font-bold text-paper light:text-navy">
          You're Offline
        </h1>

        <p className="mt-4 leading-7 text-paper/60 light:text-navy/60">
          It looks like you're not connected to the internet.
          Please check your connection and try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="mt-8 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-navy transition hover:scale-105"
        >
          Try Again
        </button>

        <Link
          href="/"
          className="mt-4 block text-sm text-accent"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}