"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "../components/Header";
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';

export default function BookingForm() {
  const [bookingType, setBookingType] = useState("Consultation");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(null);

  const PRICES = [
    { label: "30-Min Consultation", value: "30m – 500 EGP" },
    { label: "60-Min Consultation", value: "60m – 900 EGP" },
    { label: "Career Plan", value: "Plan – 2000 EGP" },
  ];

  const COURSES = [
    "20‑Hour HR Course",
    "Soft Skills Bootcamp",
    "CV Writing",
    "Career Coaching",
    "Other - Custmize Your Course"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // include bookingType and selection
    formData.append('bookingType', bookingType);
    formData.append('selectedOption', price || formData.get('course'));

    const res = await fetch("https://script.google.com/macros/s/AKfycbxUncwue2CX1IXgf3cyQ0iUmK0fx6ch3vkViiabJIjleQXi9ijWrbWVJHFiPtOkATYzJw/exec", {
  method: 'POST',
  body: formData
});

    const json = await res.json();

    setStatus(json.status === "success" ? "success" : "error");
    if (json.status === "success") form.reset();
  };

  return (
    <>
      <Header />
      <div className="margin-top"></div>
      <section className="min-h-screen bg-gradient-to-br from-[#0056D2] to-[#72C6FF] py-20 px-6 md:px-20 text-white flex flex-col items-center justify-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold mb-4">
          Book a Consultation or Training
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-center mb-10 text-white/90">
          Fill out the form and we will get in touch with you shortly.
        </motion.p>

        <motion.form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white text-gray-800 p-8 rounded-xl shadow-xl space-y-6">
          
          <div>
            <label className="block font-medium mb-2">Full Name</label>
            <input name="name" type="text" required placeholder="Your Name" className="w-full p-3 rounded-md border focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block font-medium mb-2">Email Address</label>
            <input name="email" type="email" required placeholder="you@example.com" className="w-full p-3 rounded-md border focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block font-medium mb-2">Phone Number</label>
            <input name="phone" type="text" required placeholder="Your Contact Number" className="w-full p-3 rounded-md border focus:ring-2 focus:ring-blue-500"/>
          </div>

          <div>
            <label className="block font-medium mb-2">Booking Type</label>
            <select value={bookingType} onChange={(e) => { setBookingType(e.target.value); setPrice(""); }} className="w-full p-3 rounded-md border focus:ring-2 focus:ring-blue-500">
              <option value="Consultation">Consultation</option>
              <option value="Course">Training Course</option>
            </select>
          </div>

          {bookingType === "Consultation" ? (
            <div>
              <p className="block font-medium mb-2">Choose Plan</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PRICES.map((opt) => (
                  <button key={opt.value} type="button" onClick={() => setPrice(opt.value)} className={`consultation-label p-4 rounded-lg border ${price === opt.value ? "border-blue-600 bg-blue-100" : "border-gray-300"} transition`}>
                    {opt.label}<br/><span className="text-sm text-gray-600 pricing-button">{opt.value}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {bookingType === "Course" && (
  <div>
    <label className="block font-medium mb-2">Select Course</label>
    <select
      name="course"
      required
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="w-full p-3 rounded-md border focus:ring-2 focus:ring-blue-500"
    >
      {COURSES.map(c => <option key={c}>{c}</option>)}
    </select>
  </div>
)}

{bookingType === "Course" && price === "Other - Custmize Your Course" && (
  <div>
    <label className="block font-medium mb-2 mt-5">Tell us what you need</label>
    <textarea
      name="customCourseDetails"
      rows={4}
      required
      placeholder="Describe the training or course you need..."
      className="w-full p-3 rounded-md border focus:ring-2 focus:ring-blue-500"
    />
  </div>
)}
            </div>
          )}
          

          <div>
            <label className="block font-medium mb-2">Additional Notes</label>
            <textarea name="notes" rows={4} placeholder="Tell us more..." className="w-full p-3 rounded-md border focus:ring-2 focus:ring-blue-500"/>
          </div>

          <button type="submit" className="bg-[#0056D2] text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition-all">
            Submit
          </button>

          <AnimatePresence>
            {status === "success" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-center mt-4">
                 Your request was submitted successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-center mt-4">
                 Something went wrong. Please try again.
              </motion.p>
            )}
          </AnimatePresence>

        </motion.form>
      </section>

      <ScrollToTop />
      <Footer/>
    </>
  );
}
