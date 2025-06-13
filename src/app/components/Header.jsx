"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const navItems = ["Home", "About", "Services", "HRins Egypt", "Blog", "Testimonials", "Contact Me"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const normalizePath = (item) =>
    item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "")}`;

  return (
    <>
      <motion.header
        className="header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <Link href="/">
          <motion.img
            src="https://res.cloudinary.com/dbgdvnkev/image/upload/v1749739476/Ahmed-Nagy-Blue_aylrtr.webp"
            alt="Logo"
            className="logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </Link>

        {/* Nav links (Desktop) */}
        <nav className="nav-links">
          {navItems.map((item, index) => {
            const path = normalizePath(item);
            return (
              <Link
                key={item}
                href={path}
                className={`nav-item ${pathname === path ? "active" : ""}`}
              >
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  {item}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Hamburger menu (Mobile) */}
        <motion.div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </motion.div>
      </motion.header>

      {/* Side menu (Mobile) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.button
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="button-close"
                onClick={() => setIsOpen(false)}
              >
                <span className="bar1"></span>
                <span className="bar2"></span>
              </motion.button>
              <motion.div
                className="mobile-links"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {navItems.map((item, index) => {
                  const path = normalizePath(item);
                  return (
                    <Link
                      key={item}
                      href={path}
                      className={`nav-item ${pathname === path ? "active" : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {item}
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
              <motion.div
                className="social-icons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <a href="" className="facebook-icon"><FaFacebookF /></a>
                <a href="" className="social-link"><FaLinkedinIn /></a>
                <a href="" className="social-link"><FaWhatsapp /></a>
                <a href="" className="social-link"><FaInstagram /></a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
