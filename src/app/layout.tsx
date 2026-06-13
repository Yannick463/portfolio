import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yannick Martins — Software Engineer",
  description:
    "I build web applications, AI automations, database-driven systems and secure solutions for real-world problems.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "AI Automation",
    "Cybersecurity",
    "Cabo Verde",
    "Remote Developer",
  ],
  openGraph: {
    title: "Yannick Martins — Software Engineer",
    description:
      "I build web applications, AI automations, database-driven systems and secure solutions for real-world problems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yannick Martins — Software Engineer",
    description:
      "I build web applications, AI automations, database-driven systems and secure solutions for real-world problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-bg-primary font-sans text-text-primary">
        <LanguageProvider>
          <AppShell>{children}</AppShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
