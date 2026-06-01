import type { Metadata } from "next";
import { JetBrains_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ramrith Rakpoun (Ram) | UX/UI Designer",
  description: "UX/UI Designer & Creative Engineer focused on high-utility digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${crimsonPro.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-mono">
        <div className="grain" aria-hidden="true" />
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-accent focus:text-background focus:font-bold focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
