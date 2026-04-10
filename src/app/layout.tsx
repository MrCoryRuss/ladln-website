import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased bg-white text-stone-800`}>
        {children}
      </body>
    </html>
  );
}
