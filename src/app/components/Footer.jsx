"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AdminLoginModal from "./AdminLogin";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="bg-[#002A7C] text-white py-12 px-6 md:px-20">
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
            <Image className="footer-nagy-logo" src="/images/AhmedNagyWhite.png" alt="Ahmed Nagy Logo" width={100} height={50} />
            <div className="footer-line"></div>
            <Image className="footer-HRins-logo" src="/images/HRinsEgyptWhite.png" alt="HRins Logo" width={50} height={50} />
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
            <li onClick={() => setModalOpen(true)} className="hover:text-white transition">Are you an admin?</li>
            <li><Link href="/hrinsegypt#testimonials" className="hover:text-white transition">Testimonials</Link></li>
            <li><Link href="/#services" className="hover:text-white transition">Career Services</Link></li>
            <li><Link href="/hrinsegypt" className="hover:text-white transition">HRins Egypt</Link></li>
            <li><Link href="/#contact" className="hover:text-white transition">Contact Me</Link></li>
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
            <a href="https://www.facebook.com/AhmedNagyEldokhmesy/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition" aria-label="Ahmed Nagy Facebook Link">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/ahmedeldokhmesyoffical" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition" aria-label="Ahmed Nagy Instagram Link">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ahmednagyeldokmesy/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="Ahmed Nagy Linkedin Link">
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

      <AdminLoginModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
}