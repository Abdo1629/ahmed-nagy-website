"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function AboutSection() {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-[#F5F7FA] ">
      <div className="mx-auto   flex flex-col min-[769px]:flex-row items-center gap-5">
        
        {/* Left: Image */}
        <motion.div className="about-left" ref={imageRef}
        initial={{ scale: 0.95, opacity: 0 }}
            animate={imageInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="https://res.cloudinary.com/dbgdvnkev/image/upload/v1749753449/about-image_cxf5yj.webp"
            alt="About Ahmed Nagy"
            className="about-image"
            width="200"
            height="200"
          />
        </motion.div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 px-6 lg:px-8 py-1 sm:py-5" ref={textRef}>
          <motion.h2
            className="text-sm font-semibold text-[#0056D2] tracking-wide uppercase"
            initial={{ y: 30, opacity: 0 }}
            animate={textInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            About the Founder
          </motion.h2>

          <motion.h1
            className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl"
            initial={{ y: 30, opacity: 0 }}
            animate={textInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Ahmed Nagy Eldokhmecy
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-700"
            initial={{ y: 30, opacity: 0 }}
            animate={textInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Ahmed is a Human Resources Consultant With over 16 years of experience in HR development and people empowerment, I am the founder of HRins Egypt, a company dedicated to delivering practical and innovative HR solutions to help individuals and organizations reach exceptional and sustainable performance. I currently serve as the HR Director at Odin Investments, one of the leading financial firms in the Egyptian stock exchange.
          </motion.p>

          <motion.p
            className="mt-4 text-base text-gray-600"
            initial={{ y: 30, opacity: 0 }}
            animate={textInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            His vision is to transform HR from a traditional administrative task to a strategic pillar of organizational growth across the Arab world.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={textInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link
              href="/about"
              className="inline-block text-[#0056D2] font-medium hover:underline transition mb-8"
            >
              Read more →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
