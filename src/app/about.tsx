"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <section className="about-preview">
        <div className="about-left" ref={imageRef}>
          <motion.img
            src="https://res.cloudinary.com/dbgdvnkev/image/upload/v1749753449/about-image_cxf5yj.webp"
            alt="About Me Image"
            className="about-image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={imageInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </div>

        <div className="about-right" ref={textRef}>
          <motion.h2
            className="about-title"
            initial={{ y: 50, opacity: 0 }}
            animate={textInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={textInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="about-subtitle"
          >
          Ahmed Nagy Eldokhmecy is a Human Resources Consultant with over 16
          years of experience in people development and building strategic HR
          systems. He is the founder of HRins Egypt, offering innovative HR
          solutions tailored for the Arab business landscape. He currently serves
          as the HR Director at Odin Investments, one of the leading firms in
          the Egyptian stock exchange.
          </motion.h1>
          <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={textInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="about-subtitle">
          Ahmed’s vision is to transform HR from an administrative function to...
          </motion.p>

          <motion.a
            href="/about.tsx"
            className="read-more"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Read more →
          </motion.a>
        </div>
    </section>
  );
}
