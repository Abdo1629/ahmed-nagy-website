"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

  const logos = [
  { src: "/images/logo-1.png", link: "https://example.com/logo1", width: 100, height: 60},
  { src: "/images/logo-2.png", link: "https://example.com/logo2", width: 100, height: 60 },
  { src: "/images/logo-3.png", link: "https://example.com/logo3", width: 100, height: 60 },
  { src: "/images/logo-4.png", link: "https://example.com/logo4", width: 100, height: 60 },
  { src: "/images/logo-5.png", link: "https://example.com/logo5", width: 100, height: 60 },
  { src: "/images/logo-6.png", link: "https://example.com/logo6", width: 100, height: 60 },
  { src: "/images/logo-1.png", link: "https://example.com/logo1", width: 100, height: 60 },
  { src: "/images/logo-2.png", link: "https://example.com/logo2", width: 100, height: 60 },
  { src: "/images/logo-3.png", link: "https://example.com/logo3", width: 100, height: 60 },
  { src: "/images/logo-4.png", link: "https://example.com/logo4", width: 100, height: 60 },
  { src: "/images/logo-5.png", link: "https://example.com/logo5", width: 100, height: 60 },
  { src: "/images/logo-6.png", link: "https://example.com/logo6", width: 100, height: 60 },  
];

export default function ScrollingLogos() {
  const scrollRef = useRef(null);

  return (
    <motion.div
      className="scroll-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="scrolling-logos" ref={scrollRef}>
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-item" key={index}>
            <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <Image src={logo} alt={`logo-${index}`} width={logo.width} height={logo.height}/>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
