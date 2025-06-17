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
      onClose(); // Close the modal
      router.push("/admin");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-0 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-md bg-white p-6 rounded-xl shadow-lg -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-xl text-black font-bold text-center mb-4">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <label>Email</label>
              <input
                required
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                required
                type="password"
                placeholder="Enter Your Password"
                className="w-full border border-gray-300 px-4 py-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
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