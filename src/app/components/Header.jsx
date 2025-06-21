"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    subItems: [
      { label: "About Me", path: "/about" },
      { label: "HRins Egypt", path: "/hrinsegypt" },
    ],
  },
  { label: "Services", path: "/#services" },
  { label: "Testimonials", path: "/hrinsegypt#testimonials" },
  { label: "Contact Me", path: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.header
        className="header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/">
          <Image
          className="logo"
            src="https://res.cloudinary.com/dbgdvnkev/image/upload/v1749739476/Ahmed-Nagy-Blue_aylrtr.webp"
            alt="Logo"
            width="90"
            height="50"
          />
        </Link>
        </motion.div>

        {/* Nav links (Desktop) */}
        <nav className="nav-links">
          {navItems.map((item, index) =>
            item.subItems ? (
              <div className="nav-dropdown relative" key={item.label}>
                <motion.button
                  className="nav-item dropdown-trigger flex items-center gap-1 cursor-pointer focus:outline-none"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {item.label}
                  <motion.span
                    className="triangle"
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      className="dropdown-menu absolute top-full left-0 bg-white p-3 rounded-md shadow-md z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.subItems.map((sub) => (
                        <Link
                          href={`./${sub.path}`}
                          key={sub.label}
                          className={`dropdown-item ${pathname === sub.path ? "active" : ""}`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.path}
                className={`nav-item ${pathname === item.path ? "active" : ""}`}
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
                  {item.label}
                </motion.div>
              </Link>
            )
          )}
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

      {/* Mobile Menu */}
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
{navItems.map((item, index) => (
  <motion.div 
  key={item.label} 
  className="w-full"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}>
    {item.subItems ? (
      <>
        <button
          onClick={() =>
            setDropdownOpen(dropdownOpen === item.label ? null : item.label)
          }
          className={`nav-item w-full text-left h-8 flex items-center justify-between ${
            dropdownOpen === item.label ? "active" : ""
          }`}
        >
          {item.label}
          <motion.span
            animate={{ rotate: dropdownOpen === item.label ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </button>

        <AnimatePresence>
          {dropdownOpen === item.label && (
            <motion.div
              className="pl-4 py-3 bg-gray-100 rounded-md overflow-hidden mt-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.subItems.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.path}
                  className={`block py-2 px-2 nav-item dropdown-item ${
                    pathname === sub.path ? "active" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {sub.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    ) : (
      <Link
        href={item.path}
        className={`nav-item h-8 flex items-center px-2 ${
          pathname === item.path ? "active" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </Link>
    )}
  </motion.div>
))}
              </motion.div>
              <motion.button
              className="portfolio-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}>
                  <a href="/images/portfollio.pdf" download>Download Portfolio</a>
              </motion.button>
              <motion.button
              className="portfolio-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}>
                  <Link href="/booking">
                  Book A Consultation
                  </Link>
              </motion.button>
              <motion.div
                className="social-icons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <a href="https://www.facebook.com/AhmedNagyEldokhmesy/" className="social-link"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/ahmednagyeldokmesy/" className="social-link"><FaLinkedinIn /></a>
                <a href="https://wa.me/201141778555" className="social-link"><FaWhatsapp /></a>
                <a href="https://www.instagram.com/ahmedeldokhmesyoffical" className="social-link"><FaInstagram /></a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
