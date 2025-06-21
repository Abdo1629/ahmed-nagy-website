"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Video() {
    return (
    <>
    <div className="video-container">
        <motion.video
            className="video"
            src="https://res.cloudinary.com/dbgdvnkev/video/upload/v1749971672/promo_k7x731.webm"
            autoPlay
            loop
            muted
            preload="none"
            loading="lazy"
            kind="nocaptions"
            initial={{ opacity: 0 , y: 50}}
            animate={{ opacity: 1 , y: 0}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        />
        <div className="video-overlay">
            <motion.h1
                className="video-title"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
                Transforming HR for the Future
            </motion.h1>
            <motion.p
                className="video-subtitle"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            >
                Discover how we can help your organization thrive through strategic HR solutions.
            </motion.p>
            <motion.button
                className="video-button"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
            >
                <Link href="/hrinsegypt">
                Get Started
                </Link>
            </motion.button>
        </div>
    </div>
    </>
    )
}