"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Image from "next/image";

export default function SoftSkillsPage() {
  return (
    <>
      <Header />
      <div className='margin-top'></div>
      <section className="px-6 md:px-20 py-16 bg-[#f9f9f9]">
        <h1 className="text-4xl font-bold text-[#0056D2] mb-6">Soft Skills Course</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          A dynamic workshop that enhances emotional intelligence, communication, leadership, conflict resolution, and workplace adaptability.
        </p>

        {/* Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="h-48 bg-gray-300 rounded-xl overflow-hidden">
              <Image
                src={`/images/soft-skills-${num}.jpg`}
                alt={`Soft Skills ${num}`}
                className="w-full h-full object-cover"
                width="48"
                height="48"
              />
            </div>
          ))}
        </div>

        {/* Features */}
        <h2 className="text-2xl font-semibold text-[#0056D2] mb-4">What’s Included:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-10">
          <li>Practical exercises</li>
          <li>Team simulations</li>
          <li>Communication models used in Fortune 500 companies</li>
        </ul>

        {/* Testimonials */}
        <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl">
          <p className="italic text-gray-700 mb-4">
            “This course helped me become a better communicator and team player. It really changed how I handle stress at work.”
          </p>
          <p className="text-right font-semibold text-[#0056D2]">— Karim E., Team Leader</p>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
}