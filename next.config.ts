import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old ladlnmulege.org site had separate pages. The new site is a single page,
  // so map the old paths to the matching homepage sections. Links were shared on
  // Facebook and in print, so these must stay permanent (301).
  async redirects() {
    return [
      { source: "/donate", destination: "/#donate", permanent: true },
      { source: "/membership", destination: "/#donate", permanent: true },
      { source: "/volunteer", destination: "/#donate", permanent: true },
      { source: "/students", destination: "/#students", permanent: true },
      { source: "/news", destination: "/#facebook", permanent: true },
    ];
  },
};

export default nextConfig;
