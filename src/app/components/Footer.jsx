"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#002A7C] mt-10 text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Logo + Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
            <motion.div
            initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row footer-logos"
            >
            <img className="footer-nagy-logo" src="/images/AhmedNagyWhite.png" alt="Ahmed Nagy Logo" width={100} height={50} />
            <div className="footer-line"></div>
            <img className="footer-HRins-logo" src="/images/HRinsEgyptWhite.png" alt="HRins Logo" width={50} height={50} />
            </motion.div>
          <p className="text-sm text-gray-200">
            Empowering individuals and businesses through modern, practical HR solutions in Egypt and beyond.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#courses" className="hover:text-white transition">Training Courses</a></li>
            <li><a href="#services" className="hover:text-white transition">Career Services</a></li>
            <li><a href="#business" className="hover:text-white transition">Business Solutions</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Me</a></li>
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-4"
        >
          <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-center text-gray-400 text-sm mt-12"
      >
        © {new Date().getFullYear()} Ahmed Nagy Eldokhmecy. All rights reserved.
      </motion.div>
    </footer>
  );
}