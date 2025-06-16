

import type { Metadata } from "next";
import { Roboto_Slab, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Roboto_Slab({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: "normal",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
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
    url: "https://www.eldokhmesy.com",
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="u8TXc_qeXJRnAwiXUUngV";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`
          }}
        ></script>
       </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
