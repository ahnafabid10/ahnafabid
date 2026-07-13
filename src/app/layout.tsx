import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Shared/Footer/Footer";
import Providers from "./providers";
import { Navbar } from "@/components/Shared/NavBar/NavBar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahnafabidnirob.vercel.app"),
  title: {
    default: "Ahnaf Abid Nirob — Full Stack Developer",
    template: "%s | Ahnaf Abid Nirob",
  },
  description:
    "Portfolio of Ahnaf Abid Nirob, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Ahnaf Abid Nirob",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "TypeScript",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "MongoDB",
    "PostgreSQL",
  ],
  authors: [{ name: "Ahnaf Abid Nirob" }],
  creator: "Ahnaf Abid Nirob",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ahnaf Abid Nirob",
    title: "Ahnaf Abid Nirob — Full Stack Developer",
    description:
      "Portfolio of Ahnaf Abid Nirob, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: [
      {
        url: "/ogImageAhnafAbidNirob.jpg",
        width: 1200,
        height: 630,
        alt: "Ahnaf Abid Nirob — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahnaf Abid Nirob — Full Stack Developer",
    description:
      "Portfolio of Ahnaf Abid Nirob, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/ogImageAhnafAbidNirob.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
