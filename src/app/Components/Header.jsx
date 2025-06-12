"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Services", "Blog", "Contact Me"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <motion.header
        className="header"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.img
          src="/images/Ahmed-nagy-Blue.png"
          alt="Logo"
          className="logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        {/* Nav links (Desktop) */}
        <nav className="nav-links">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              className={`nav-item ${item === "Home" ? "active" : ""}`}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5 + index * 0.15,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              {item}
            </motion.a>
          ))}
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
      <button
        className="button-close"
        onClick={() => setIsOpen(false)}
      >   
                <span className="bar1"></span>
                <span className="bar2"></span>
      </button>

      {navItems.map((item, index) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
          className= {`nav-item ${item === "Home" ? "active" : ""}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          onClick={() => setIsOpen(false)}
        >
          {item}
        </motion.a>
      ))}   
    </motion.div>
    </>
  )}
</AnimatePresence>

    </>
  );
}
