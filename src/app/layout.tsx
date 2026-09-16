import type { Metadata } from "next";
import Script from "next/script";
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

const CLARITY_PROJECT_ID = "yj7dwwgm56";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white" style={{ color: "#333333" }}>
        {children}
        {/* Microsoft Clarity analytics — renders once for every page via the root layout */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
        </Script>
      </body>
    </html>
  );
}
