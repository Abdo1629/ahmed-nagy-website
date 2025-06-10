

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
  title: "Ahmed Nagy Eldakhmisi  - HR Consultant & Expert",
  description: "Ahmed Nagy Eldakhmisi is a seasoned HR consultant with over 16 years of experience in human resource development and building professional HR systems. Founder of HRins Egypt, offering innovative and practical HR solutions.",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: [
    "HR consultant",
    "human resources expert",
    "HRins Egypt",
    "leadership development",
    "employee training",
    "HR solutions",
    "career development",
    "personal branding",
    "organizational development",
    "HR systems",
    "Ahmed Nagy Eldakhmisi",
    "professional HR",
    "HR strategy",
    "HR courses",
    "HR training",
    "HR consultancy",
    "human resource management",
    "Personal Branding",
    "اتش ارجية مصر",
    "استشارات الموارد البشرية",
    "أحمد ناجي الدخميسي",
    "أحمد ناجي",
  ],
  authors: [{ name: "Ahmed Nagy Eldakhmisi" }],
  creator: "Ahmed Nagy Eldakhmisi",
  openGraph: {
    title: "Ahmed Nagy Eldakhmisi - HR Consultant & Expert",
    description: "Ahmed Nagy Eldakhmisi is a seasoned HR consultant with over 16 years of experience in human resource development and building professional HR systems. Founder of HRins Egypt, offering innovative and practical HR solutions.",
    url: "https://www.ahmednagyeldakhmisi.com",
    siteName: "Ahmed Nagy Eldakhmisi",
    locale: "en_US",
    type: "website",
  }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
