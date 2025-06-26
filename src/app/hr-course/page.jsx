"use client";

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
      <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl">
        <p className="italic text-gray-700 mb-4">
          “This course gave me real-world knowledge and tools to use in my current HR job. Highly recommended!”
        </p>
        <p className="text-right font-semibold text-[#0056D2]">— Mariam K., HR Specialist</p>
      </div>
    </section>
    <ScrollToTop />
    <Footer/>
    </>
  );
}