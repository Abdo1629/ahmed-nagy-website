"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_CREDENTIALS } from "../utils/adminCreds";
import { motion, AnimatePresence } from "framer-motion";


export default function AdminLoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email.trim() === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      onClose();
      localStorage.setItem("isAdmin", "true");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black  z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 bg-white z-50 w-[90%] max-w-md p-6 rounded-xl shadow-lg -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl text-black font-bold text-center mb-4">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <label className="text-black">Email</label>
              <input
                required
                type="email"
                placeholder="Enter Your Email"
                className="w-full border text-black border-gray-300 px-4 py-2 rounded placeholder-grey-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="text-black">Password</label>
              <input
                required
                type="password"
                placeholder="Enter Your Password"
                className="w-full text-black border border-gray-300 px-4 py-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded cursor-pointer"
              >
                Login
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}