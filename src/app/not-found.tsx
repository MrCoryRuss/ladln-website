import Link from "next/link";

// Fallback for anything the proxy catch-all misses (paths with a file
// extension, for example). This must render real content: a redirect() here
// returns a blank 404 in the App Router, which is what shipped before.
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl text-center">
        <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#F46A6A" }}>
          Page not found
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#253E80" }}>
          That page has moved
        </h1>
        <p className="text-stone-600 leading-relaxed mb-8">
          We rebuilt our site in 2026, so some older links no longer point anywhere. Everything
          is on our home page now: scholarships, student stories, and how to donate.
        </p>
        <Link
          href="/"
          className="inline-flex items-center font-semibold px-6 py-3 rounded-full text-white shadow-sm transition-opacity hover:opacity-90"
          style={{ background: "#F46A6A" }}
        >
          Go to the home page
        </Link>
      </div>
    </main>
  );
}
