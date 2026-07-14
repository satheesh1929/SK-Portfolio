import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satheesh Kumar S | Software Developer, AI & IoT Builder",
  description: "Portfolio of Satheesh Kumar S, a final-year Agricultural Engineering student and software developer building web, AI, IoT, and AgriTech solutions.",
  metadataBase: new URL("https://satheesh1929.github.io/SK-Portfolio"),
  alternates: {
    canonical: "/SK-Portfolio",
  },
  openGraph: {
    title: "Satheesh Kumar S | Software Developer, AI & IoT Builder",
    description: "Portfolio of Satheesh Kumar S, a final-year Agricultural Engineering student and software developer building web, AI, IoT, and AgriTech solutions.",
    url: "https://satheesh1929.github.io/SK-Portfolio",
    siteName: "Satheesh Kumar S Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satheesh Kumar S | Software Developer, AI & IoT Builder",
    description: "Portfolio of Satheesh Kumar S, a final-year Agricultural Engineering student and software developer building web, AI, IoT, and AgriTech solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Satheesh Kumar S",
    "alternateName": "SK",
    "url": "https://satheesh1929.github.io/SK-Portfolio",
    "jobTitle": "Software Developer & IoT Builder",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "KIT - Kalaignarkarunanidhi Institute of Technology, Coimbatore"
    },
    "knowsAbout": [
      "Software Development",
      "Frontend Development",
      "Internet of Things",
      "Computer Vision",
      "Agricultural Engineering",
      "AgriTech"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {/* Animated Background blobs */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#070a12] via-background to-[#05070a]"></div>
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        
        <Navbar />
        
        <main className="relative z-10 flex-grow pt-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}

