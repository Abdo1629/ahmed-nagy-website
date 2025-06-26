"use client";

import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function LinkedInProfilePage() {
  return (
    <>
      <Header />
      <div className="margin-top"></div>
      <section className="px-6 md:px-20 py-16 bg-[#f9f9f9]">
        <h1 className="text-4xl font-bold text-[#0056D2] mb-6">
          LinkedIn Profile Optimization
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl">
          We build and refine your LinkedIn profile to attract recruiters,
          reflect your true value, and elevate your online presence. Our service
          helps professionals stand out in the job market through a strong,
          credible digital identity.
        </p>

        {/* Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="h-48 bg-gray-300 rounded-xl overflow-hidden"
            >
              <Image
                src={`/images/linkedin-${num}.jpg`}
                alt={`LinkedIn Service ${num}`}
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>

        {/* Features */}
        <h2 className="text-2xl font-semibold text-[#0056D2] mb-4">
          What’s Included:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-10">
          <li>Headline & About section rewrite</li>
          <li>Keyword-rich profile optimization</li>
          <li>Visual content & banner recommendations</li>
          <li>Profile scoring with real-time improvement tips</li>
        </ul>

        {/* Testimonials */}
        <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl">
          <p className="italic text-gray-700 mb-4">
            “After this service, I started getting recruiter messages weekly. My
            profile looks 10x more professional.”
          </p>
          <p className="text-right font-semibold text-[#0056D2]">
            — Mostafa R., Business Analyst
          </p>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
}