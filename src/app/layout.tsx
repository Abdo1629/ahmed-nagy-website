

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
  title: "Ahmed Nagy Eldakhmesy  - HR Consultant & Expert",
  description: "Ahmed Nagy Eldakhmesy is a seasoned HR consultant with over 16 years of experience in human resource development and building professional HR systems. Founder of HRins Egypt, offering innovative and practical HR solutions.",
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
    "Ahmed Nagy Eldakhmesy",
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
  authors: [{ name: "Ahmed Nagy Eldakhmesy" }],
  creator: "Ahmed Nagy Eldakhmesy",
  openGraph: {
    title: "Ahmed Nagy Eldakhmesy - HR Consultant & Expert",
    description: "Ahmed Nagy Eldakhmesy is a seasoned HR consultant with over 16 years of experience in human resource development and building professional HR systems. Founder of HRins Egypt, offering innovative and practical HR solutions.",
    url: "https://www.ahmednagyeldakhmesy.com",
    siteName: "Ahmed Nagy Eldakhmesy",
    locale: "en_US",
    type: "website",
  }
  };

  
export const viewport = {
  width: 'device-width',
  initialScale: 1
}

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
