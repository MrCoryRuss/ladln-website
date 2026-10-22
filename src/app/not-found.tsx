import { redirect } from "next/navigation";

// The site is a single page. Any unknown path (old ladlnmulege.org links,
// typos, stale bookmarks) goes to the home page instead of a 404.
export default function NotFound() {
  redirect("/");
}
