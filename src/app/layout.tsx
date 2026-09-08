import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Sharma | Full Stack Developer & SaaS Builder",
  description:
    "Portfolio of Abhishek Sharma (Abhishek Kumar Ranjan) - Full Stack Developer, SaaS Builder, and Founder at Jyoti Info Tech. Specializing in Next.js, React, Node.js, TypeScript, and Scalable Web Systems.",
  keywords: [
    "Abhishek Sharma",
    "Abhishek Kumar Ranjan",
    "Full Stack Developer",
    "Next.js Developer",
    "SaaS Builder",
    "Jyoti Info Tech",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Abhishek Sharma" }],
  openGraph: {
    title: "Abhishek Sharma | Full Stack Developer & SaaS Builder",
    description:
      "Passionate Full Stack Developer specializing in Next.js, Node.js, TypeScript, and SaaS Platform Architecture.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
