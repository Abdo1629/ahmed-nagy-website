"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Landing() {
    return (
    <>
    <div className="margin-top"></div>
    <motion.div
        className="landing" 
        id="landing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
    >
        <motion.div className="left-section">
        <motion.h1
            className="landing-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
            Trusted HR Leader. Strategic People Partner
        </motion.h1>
        <motion.p
            className="landing-subtitle"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        >
            With over 20 years of experience in Human Resources, ahmed nagy helps organizations unlock their full potential through strategic people management.
        </motion.p>
        <div className="landing-buttons">
<motion.button
            className="landing-button"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        >
            Get In Touch
        </motion.button>
                <motion.button
            className="landing-button-outline"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        >
            Book a Consultation
        </motion.button>
        </div>
        </motion.div>
        <motion.div className="right-section">
            <motion.div className="animated-container"
            initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}>
                <div className="cloud-shape back"></div>
                <div className="cloud-shape front"></div>
                <Image
                src="https://res.cloudinary.com/dbgdvnkev/image/upload/v1749740203/landing-image_stryph.webp"
                alt="Landing Image"
                className="landing-image"
                priority
                width="100"
                height="100"
                />
            </motion.div>
        </motion.div>
        </motion.div>    
    </>
    );
}