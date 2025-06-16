// components/HRinsEgyptPage.tsx
"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import { IoBookOutline } from "react-icons/io5";
import Footer from '../components/Footer';
import Link from "next/link";

export default function HRinsEgyptPage() {
  return (
    <>
    <Header/>
     <div className="margin-top"></div>
    <div className="bg-white text-gray-900">
      {/* Landing Section */}
      
    <section className="relative min-h-70 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-[#0056D2] to-[#72C6FF] overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute w-80 h-80 rounded-full bg-blue-200 opacity-30  top-[-100px] left-[-100px] blur-2xl"
      />
      <motion.div
        animate={{ rotate: -360}}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute w-96 h-96 rounded-full bg-blue-200 opacity-30 bottom-[-120px] right-[-120px] blur-2xl"
      />

      <img
        src="/images/HRinsEgyptWhite.png"
        alt="HRins Egypt Logo"
        width={120}
        height={120}
        className="mb-6 mt-5 z-10 hrinsWhiteHero"
      />
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-lg md:text-xl text-white mb-10 max-w-2xl z-10 hrinsTextHero"
      >
        Empowering individuals and businesses through modern, practical HR solutions.
      </motion.p>
    </section>

<section className="py-16 px-6 md:px-20 bg-white aboutHRins">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-3xl font-semibold mb-6 text-center"
  >
    About HRins Egypt
  </motion.h2>
  <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
    HRins Egypt is a human resources consultancy and training initiative focused on helping individuals and businesses thrive. With years of expertise in the MENA region, we blend practical strategies with modern tools to deliver impactful results.
  </p>
</section>


<section id="testimonials" className="py-20 px-6 md:px-20 bg-[#f0f8ff] clients-review">
  <h2 className="text-3xl font-semibold text-center mb-12">What Our Clients Say</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        name: "Nour A.",
        text: "The CV service helped me land 3 interviews in one week! Professional and tailored to my needs.",
      },
      {
        name: "Omar T.",
        text: "They helped us set up a full HR system for our startup. Super practical and efficient!",
      },
      {
        name: "Sarah M.",
        text: "The career coaching was life-changing. I went into interviews confident and clear on my goals.",
      },
    ].map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 review"
      >
        <p className="text-gray-700 italic mb-4">“{t.text}”</p>
        <p className="font-semibold text-blue-600 text-right">— {t.name}</p>
      </motion.div>
    ))}
  </div>
</section>
<section className="bg-blue-600 text-white text-center py-16 px-6">
  <h2 className="text-3xl font-bold mb-4 book-heading">Ready to Elevate Your HR Strategy?</h2>
  <p className="mb-6 text-lg">Book a course or a consultation call with ahmed nagy eldokhmecy today.</p>
  <Link href="/booking">
  <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all booking-hrins booking-hrins">Book Now</button>  
  </Link>
</section>
<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  className="absolute w-60 h-60 rounded-full bg-blue-400 opacity-30 blur-3xl z-0"
/>

      {/* Training Courses */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="courses-heading mb-8">
          <div className="heading-icon"><IoBookOutline/></div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center training-heading"
        >
                 Training Courses
                  </motion.h2>
            </div>


        <div className="grid md:grid-cols-3 gap-10 courses-card">
          {[
            {
              title: "20-Hour HR Course",
              desc: "A comprehensive hands-on course covering core HR practices from hiring to performance review. Ideal for 0–5 years of experience.",
            },
            {
              title: "Soft Skills Bootcamp",
              desc: "Develop essential workplace skills like emotional intelligence, communication, leadership, and problem solving.",
            },
            {
              title: "HR Department Setup (for Companies)",
              desc: "Helping startups and growing companies build HR departments from scratch tailored to the Saudi and Egyptian markets.",
            },
          ].map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#f9fbff] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">{course.title}</h3>
              <p className="text-gray-600">{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};
