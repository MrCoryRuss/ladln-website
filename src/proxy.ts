import { NextResponse, type NextRequest } from "next/server";

// The site is a single page. Old ladlnmulege.org links, blog posts and
// newsletters point at deep paths that no longer exist. next.config.ts handles
// the handful of known section paths; this catches everything else and sends it
// to the home page instead of a blank 404.
export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname === "/") return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/";
  url.hash = "";
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Skip the home page itself, Next internals, and anything with a file
  // extension (assets, images, sitemap). The ".+" keeps "/" from matching, so
  // the proxy never runs on a normal home page visit.
  matcher: ["/((?!_next/|favicon\\.ico|.*\\.[a-zA-Z0-9]+$).+)"],
};
