
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import BlockPrintDivider from "./components/BlockPrintDivider";

export default function Page() {
  const [loading, setLoading] = useState(true);

  const handleSplashComplete = () => {
    setLoading(false);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageHover = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.03,
      rotate: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
    <>
      {loading && <SplashScreen onComplete={handleSplashComplete} />}

      {!loading && (
        <div className="min-h-screen bg-[#fff5d7] text-[#4a0404] overflow-x-hidden font-sans relative">
          {/* Decorative Background Pattern */}
          <div className="fixed inset-0 pointer-events-none opacity-60 z-0 bg-[url('/golden-texture.svg')] bg-[length:200px_200px]"></div>

          {/* Vignette/Gradient Overlay for Depth */}
          <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,245,215,0)_50%,rgba(218,165,32,0.1)_100%)]"></div>

          {/* NAVBAR */}
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-[#8B0000] text-[#FFD700] shadow-xl py-4 sticky top-0 z-40 border-b-4 border-[#FFD700]"
          >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="A-1 Prints Logo" className="h-14 w-auto drop-shadow-md" />
                <span className="text-2xl font-display font-bold tracking-widest hidden sm:block">A-1 PRINTS</span>
              </div>

              <ul className="flex space-x-8 font-display font-bold text-lg tracking-wider">
                {["Home", "Gallery", "About", "Contact"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.1, color: "#fff" }}
                    className="cursor-pointer transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] transition-all group-hover:w-full"></span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>

          <div className="max-w-6xl mx-auto py-20 space-y-24 px-6">

            {/* HERITAGE SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-[#8B0000] mb-6">The Legacy of A-1 Prints</h1>
              <p className="text-xl text-[#5d4037] font-serif leading-relaxed">
                Keeping the ancient art of Rajasthani hand block printing alive.
                Each piece is a testament to the skill of our master artisans.
              </p>
              <BlockPrintDivider />
            </motion.div>

            {/* SECTION 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                variants={imageHover}
                initial="rest"
                whileHover="hover"
                className="relative p-2 border-2 border-dashed border-[#8B0000] rounded-xl"
              >
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/c1.jpeg"
                    className="w-full h-auto max-h-[400px] object-cover sepia-[.2]"
                    alt="Traditional Textile"
                  />
                </div>
              </motion.div>

              <div className="bg-[#fffdf5] p-10 rounded-xl shadow-xl border border-[#eecfa1] relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#8B0000] rounded-t-xl"></div>
                <h2 className="text-4xl font-display font-bold mb-6 text-[#8B0000]">Hand Block Printing</h2>
                <p className="text-[#5d4037] leading-relaxed text-lg font-serif">
                  At **A-1 Prints**, we specialize in the intricate art of hand block printing.
                  Using natural dyes and wooden blocks carved by hand, we create patterns that
                  tell the story of Rajasthan's rich cultural heritage.
                </p>
              </div>
            </motion.div>

            {/* SECTION 2 – 3 images side by side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {["/c2.jpeg", "/c3.jpeg", "/c4.jpeg"].map((src, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="p-2 bg-white shadow-lg rounded-lg border border-[#eecfa1]"
                >
                  <div className="overflow-hidden rounded border border-gray-200">
                    <img src={src} className="w-full h-[280px] object-cover hover:scale-110 transition-transform duration-700" alt={`Gallery ${index + 1} `} />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* SECTION 3 – Reverse layout */}
            <div className="w-full flex justify-center py-8">
              <BlockPrintDivider />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="bg-[#fffdf5] p-10 rounded-xl shadow-xl border border-[#eecfa1] relative order-2 md:order-1">
                <div className="absolute bottom-0 left-0 w-full h-2 bg-[#8B0000] rounded-b-xl"></div>
                <h2 className="text-4xl font-display font-bold mb-6 text-[#8B0000]">Artisan Craftsmanship</h2>
                <p className="text-[#5d4037] leading-relaxed text-lg font-serif">
                  Every fabric at **A-1 Prints** is a canvas. From the bustling bazaars
                  of Jaipur to your home, we bring you authentic handcrafted masterpieces
                  that define elegance and tradition.
                </p>
              </div>

              <motion.div
                variants={imageHover}
                initial="rest"
                whileHover="hover"
                className="relative p-2 border-2 border-dashed border-[#8B0000] rounded-xl order-1 md:order-2"
              >
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src="/c5.jpg"
                    className="w-full h-auto max-h-[400px] object-cover sepia-[.2]"
                    alt="Artisan Work"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* SECTION 4 – 3 image grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8"
            >
              {["/c5.jpg", "/c6.jpg", "/c7.jpg"].map((src, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden rounded-xl shadow-lg border-4 border-[#8B0000]"
                >
                  <img src={src} className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110" alt={`Grid ${index + 1} `} />
                  <div className="absolute inset-0 bg-[#8B0000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}
