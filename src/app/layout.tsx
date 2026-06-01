import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ramrith-rak.github.io/ramrith-portfolio"),
  title: {
    default: "Ramrith Rakpoun (Ram) | UX/UI Designer",
    template: "%s | Ramrith Rakpoun",
  },
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
