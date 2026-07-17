import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl items-center justify-center px-4 py-24 sm:px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-zinc-900 dark:text-white">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
          Page Not Found
        </h2>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-indigo-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-600"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
