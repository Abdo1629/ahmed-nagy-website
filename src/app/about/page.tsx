"use client";

import Header from "../components/Header";
import ScrollToTop from '../components/ScrollToTop';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from '../components/Footer';

export default function AboutPage() {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
  <>
    <Header/>
    <div className="margin-top"></div>
    <section className="about-page">
        <div className="about-left" ref={imageRef}>
          <motion.img
            src="https://res.cloudinary.com/dbgdvnkev/image/upload/v1749753449/about-image_cxf5yj.webp"
            alt="About Me Image"
            className="about-image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={imageInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.div
            className="about-text"
            initial={{ y: 50, opacity: 0 }}
            animate={imageInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="about-text-title">Ahmed Nagy Eldokhmecy</h2>
        <p className="about-text-subtitle">
          Human Resources Consultant | Founder of HRins Egypt | HR Director at Odin Investments
        </p>
        </motion.div>
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
          Ahmed’s vision is to transform HR from an administrative function to a
          strategic business partner that drives real growth through investment
          in people. His unique approach combines deep academic knowledge with
          hands-on expertise, offering practical, proven solutions instead of
          theoretical advice.
          </motion.p>
          <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={textInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="about-subtitle">
          His work is built on values of credibility, transparency, innovation,
          and building trusted, respectful relationships with clients and trainees.
          He believes that human connection is key to sustainable professional
          success.
          </motion.p>
          <h2>Career Highlights</h2>
           <ul>
          <li>
            Trained thousands of professionals in major industrial and service
            organizations, such as Hawa Pasta Factory, Al Arosa Tea, and Xceed.
          </li>
          <li>
            Developed over 70 leaders across international schools in multiple
            locations (Tagamoa, Mokattam, October).
          </li>
          <li>
            Delivered top-tier programs in collaboration with Alexandria
            University, MUST University, Zewail City, and the 20-Hour HR Course
            that has impacted over 6,000 learners.
          </li>
          <li>
            Led community initiatives with INJAZ Egypt and Tahya Misr Student
            Union to empower youth for the job market.
          </li>
          <li>
            Recognized by several academic institutions and certified with an HR
            Diploma from RITI and Crisis Management training from Nasser Military
            Academy.
          </li>
          <li>
            Provided expert resume and LinkedIn services to over 4,000 clients and
            personal branding to more than 10 individuals.
          </li>
        </ul>
        </div>
    </section>
    <ScrollToTop />
    <Footer />
    
  </>
  );
}
