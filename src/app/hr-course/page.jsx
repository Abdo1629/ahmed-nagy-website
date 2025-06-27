"use client";

import { motion } from "framer-motion"; 
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Image from "next/image";

export default function HRTrainingPage() {
  return (
    <>
    <Header/>
    <div className='margin-top'></div>
    <section className="px-6 md:px-20 py-16 bg-[#f9f9f9]">
      <h1 className="text-4xl font-bold text-[#0056D2] mb-6">20-Hour HR Training Program</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-4xl">
        An intensive, practical course covering core HR functions including recruitment, onboarding, payroll, performance management, and employee relations. Perfect for individuals with 0–5 years of HR experience.
      </p>

      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="h-48 bg-gray-300 rounded-xl overflow-hidden">
            <Image
              src={`/images/hr-course-${num}.jpg`}
              alt={`HR Course ${num}`}
              className="w-full h-full object-cover"
              width= "48"
              height= "48"
            />
          </div>
        ))}
      </div>

      {/* Features */}
      <h2 className="text-2xl font-semibold text-[#0056D2] mb-4">What’s Included:</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2 mb-10">
        <li>6 real-world case studies</li>
        <li>Interview frameworks</li>
        <li>Performance appraisal templates</li>
      </ul>

      {/* Testimonials */}
<div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
    {[
      {
        name: "HR Jeseey",
        text: "والله يادكتور احنا اللى سعداء بحضرتك وبجد كل حاجه في الكورس مميزة وبجد انا عاجزة عن الشكر لحضرتك لان يجد في كل مره بتدينى حافز وثقه فى نفسي حقيقي الكورس ده فرق معايا",
      },
      {
        name: "Samy.",
        text: "السيشن كانت ممتعة جدا والوقت عدي بسرعة واحسن حاجتين كانوا اسلوب وطريقة دكتور احمد ف الشرح والتطبيق العملي كان ممتع جدا وانه بيعرف يقدم المعلومة بطريقة funny",
      },
      {
        name: "HR Mona.",
        text: "حقیقى احنا اللى ممتنين لحضرتك جدا على الأمانة والصدق في تقديم المعلومه وحرص حضرتك على انك توصلنا المعلومات بابسط طريقه وبجد انا مكنتش اعرف ان بكره اخر سيشن بجد ده من افضل الكورسات اللى حضرتها بشكر حضرتك جدا بشكر تيم العمل الرائع",
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
        <p className="text-gray-700 italic mb-4 arabic">“{t.text}”</p>
        <p className="font-semibold text-blue-600 text-left">— {t.name}</p>
      </motion.div>
    ))}
  </div>
    </section>
    <ScrollToTop />
    <Footer/>
    </>
  );
}