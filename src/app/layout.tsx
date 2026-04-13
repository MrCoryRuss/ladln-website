import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Los Amigos de Los Niños — Supporting Students in Mulegé Since 1976",
  description:
    "Los Amigos de Los Niños (LADLN) is a 501(c)(3) nonprofit providing scholarships, learning support, and encouragement to students in Mulegé, Baja California Sur, Mexico.",
  keywords: ["scholarship", "Mulegé", "Baja California", "nonprofit", "education", "Mexico", "donate"],
  openGraph: {
    title: "Los Amigos de Los Niños",
    description: "Supporting students in Mulegé, Baja California Sur since 1976.",
    url: "https://losamigosmulege.org",
    siteName: "Los Amigos de Los Niños",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white" style={{ color: "#333333" }}>
        {children}
      </body>
    </html>
  );
}
