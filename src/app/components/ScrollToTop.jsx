"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollProgress(scrolled);
      setShowButton(scrollTop > 300); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showButton ? (
    <>
    <div className="scroll-to-top-container" onClick={scrollToTop}>
    <span className="scroll-label">To Top</span>
    <div className="scroll-bar">
    <div
        className="scroll-progress-bar"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
    </div>
    </>
  ) : null;
}
