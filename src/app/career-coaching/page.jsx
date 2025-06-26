"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ScrollToTop from './components/ScrollToTop';
import { LightBulbIcon, ArrowTrendingUpIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function CareerCoachingPage() {
  return (
    <>
      <Header />
<div className="pt-5"></div>
      <section className="relative px-6 md:px-20 py-24 bg-gradient-to-br from-[#f9f9f9] to-[#e3ecfb] text-gray-800 overflow-hidden z-10">
        {/* Title */}
        <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10"
        >
        <h1 className="text-4xl font-bold text-[#0056D2]">1:1 Career Coaching</h1>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl">
            Feeling stuck? Looking for clarity? Our coaching helps you discover direction, overcome doubts, and take charge of your career journey—with confidence.
        </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid sm:grid-cols-3 gap-10 mb-20">
          {/* Block 1 */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
        >
            <LightBulbIcon className="h-10 w-10 text-[#0056D2] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Why Coaching?</h3>
            <p className="text-gray-600 leading-6">
            You're unsure where you're headed? Trying to grow faster? Stuck in interviews?
            Coaching gives you guidance and clarity you won’t find alone.
            </p>
        </motion.div>

          {/* Block 2 */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <ArrowTrendingUpIcon className="h-10 w-10 text-[#0056D2] mb-4" />
            <h3 className="text-xl font-semibold mb-2">What You’ll Gain</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <p>1. Clear career direction</p>
              <p>2. Boosted confidence & mindset</p>
              <p>3. Recruiter-level insights</p>
              <p>4. Interview readiness</p>
            </ul>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <UserCircleIcon className="h-10 w-10 text-[#0056D2] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Session Format</h3>
            <p className="text-gray-600 leading-6">
              60–90 mins over Zoom or in-person, fully focused on you. Includes pre-session
              form, customized advice, and post-session action summary.
            </p>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
}
