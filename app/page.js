
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import BlockPrintDivider from "./components/BlockPrintDivider";
import AnimatedElephant from "./components/AnimatedElephant";
import AnimatedPeacock from "./components/AnimatedPeacock";
import FloatingPatterns from "./components/FloatingPatterns";
import GoldenParticles from "./components/GoldenParticles";

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

          {/* Background Elements */}
          <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-[url('/golden-texture.svg')] bg-[length:200px_200px]"></div>
          <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,245,215,0)_40%,rgba(218,165,32,0.15)_100%)]"></div>

          <FloatingPatterns />
          <GoldenParticles />

          {/* NAVBAR */}
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-[#8B0000]/95 backdrop-blur-md text-[#FFD700] shadow-2xl py-4 sticky top-0 z-50 border-b-4 border-[#FFD700]"
          >
            <div className="absolute inset-0 bg-[url('/golden-texture.svg')] bg-[length:100px_100px] opacity-10 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 relative z-10">
              <div className="flex items-center space-x-4">
                <motion.img
                  src="/logo.png"
                  alt="A-1 Prints Logo"
                  className="h-16 w-auto drop-shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
                <span className="text-3xl font-display font-bold tracking-[0.2em] hidden sm:block text-gradient-gold">A-1 PRINTS</span>
              </div>

              <ul className="flex space-x-10 font-display font-bold text-lg tracking-wider">
                {["Home", "Gallery", "About", "Contact"].map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(255,215,0,0.8)" }}
                    className="cursor-pointer transition-colors relative group text-[#FFD700]"
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full box-shadow-glow"></span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.nav>

          <div className="relative max-w-7xl mx-auto py-24 space-y-32 px-6 z-10">

            {/* HERO / HERITAGE SECTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto relative px-4"
            >
              {/* Decorative Side Elephants for Hero */}
              <div className="hidden lg:block absolute -left-48 top-0 scale-75 opacity-80">
                <AnimatedElephant position="right" delay={1} />
              </div>
              <div className="hidden lg:block absolute -right-48 top-0 scale-75 opacity-80">
                <AnimatedElephant position="left" delay={1.5} />
              </div>

              <motion.h1
                className="text-6xl md:text-8xl font-display font-bold text-[#8B0000] mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                The Legacy of <br /><span className="text-gradient-gold">A-1 Prints</span>
              </motion.h1>

              <p className="text-2xl text-[#5d4037] font-serif leading-loose mb-12 max-w-2xl mx-auto italic">
                "Weaving the royal traditions of Rajasthan into every thread.
                Keep the ancient art of hand block printing alive."
              </p>

              <BlockPrintDivider />
            </motion.div>

            {/* SECTION 1: Hand Block Printing */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative"
            >
              {/* Decorative Peacock */}
              <div className="absolute -top-32 -left-20 z-0 opacity-80 scale-75 hidden md:block">
                <AnimatedPeacock position="right" delay={0.5} />
              </div>

              <motion.div
                variants={imageHover}
                initial="rest"
                whileHover="hover"
                className="relative z-10 group perspective-1000"
              >
                <div className="absolute inset-0 bg-[#8B0000] rounded-2xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative p-3 border-2 border-dashed border-[#DAA520] rounded-2xl bg-white/50 backdrop-blur-sm">
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src="/c1.jpeg"
                      className="w-full h-auto max-h-[500px] object-cover filter sepia-[.15] hover:sepia-0 transition-all duration-700"
                      alt="Traditional Textile"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="glass-panel p-12 rounded-2xl relative z-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(139,0,0,0.15)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent opacity-50"></div>
                <h2 className="text-5xl font-display font-bold mb-8 text-[#8B0000]">Hand Block Printing</h2>
                <p className="text-[#5d4037] leading-loose text-xl font-serif">
                  At <span className="font-bold text-[#8B0000]">A-1 Prints</span>, we specialize in the intricate art of hand block printing.
                  Using natural dyes and wooden blocks carved by hand, we create patterns that
                  tell the story of Rajasthan's rich cultural heritage.
                </p>
                <div className="mt-8 flex justify-end">
                  <img src="/logo.png" className="w-16 h-16 opacity-20 filter grayscale" alt="watermark" />
                </div>
              </div>
            </motion.div>

            {/* SECTION 2 – 3 images side by side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-10"
            >
              {["/c2.jpeg", "/c3.jpeg", "/c4.jpeg"].map((src, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="p-3 bg-white/80 rounded-t-full rounded-b-lg shadow-xl border border-[#eecfa1] relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-b from-[#DAA520] to-transparent opacity-20 rounded-t-full rounded-b-lg blur group-hover:opacity-40 transition-opacity"></div>
                  <div className="overflow-hidden rounded-t-full rounded-b border border-gray-100 relative z-10">
                    <img src={src} className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110" alt={`Gallery ${index + 1} `} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <span className="text-[#FFD700] font-display text-xl tracking-widest">VIEW COLLECTION</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="w-full flex justify-center py-12">
              <div className="w-2/3">
                <BlockPrintDivider />
              </div>
            </div>

            {/* SECTION 3 – Reverse layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative"
            >
              {/* Decorative Peacock */}
              <div className="absolute -bottom-20 -right-20 z-0 opacity-80 scale-75 hidden md:block transform scale-x-[-1]">
                <AnimatedPeacock position="left" delay={0.5} />
              </div>

              <div className="glass-panel p-12 rounded-2xl relative z-10 order-2 md:order-1 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(139,0,0,0.15)]">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent opacity-50"></div>
                <h2 className="text-5xl font-display font-bold mb-8 text-[#8B0000]">Artisan Craftsmanship</h2>
                <p className="text-[#5d4037] leading-loose text-xl font-serif">
                  Every fabric at <span className="font-bold text-[#8B0000]">A-1 Prints</span> is a canvas. From the bustling bazaars
                  of Jaipur to your home, we bring you authentic handcrafted masterpieces
                  that define elegance and tradition.
                </p>
              </div>

              <motion.div
                variants={imageHover}
                initial="rest"
                whileHover="hover"
                className="relative z-10 order-1 md:order-2 group perspective-1000"
              >
                <div className="absolute inset-0 bg-[#8B0000] rounded-2xl transform -rotate-3 scale-105 opacity-20 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="relative p-3 border-2 border-dashed border-[#DAA520] rounded-2xl bg-white/50 backdrop-blur-sm">
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src="/c5.jpg"
                      className="w-full h-auto max-h-[500px] object-cover filter sepia-[.15] hover:sepia-0 transition-all duration-700"
                      alt="Artisan Work"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ELEPHANT PARADE DIVIDER */}
            <div className="relative w-full h-40 overflow-hidden my-12">
              <div className="absolute inset-0 flex items-center justify-around opacity-60">
                <div className="transform scale-50"><AnimatedElephant position="right" delay={0} /></div>
                <div className="transform scale-50"><AnimatedElephant position="right" delay={2} /></div>
                <div className="transform scale-50"><AnimatedElephant position="right" delay={4} /></div>
              </div>
            </div>

            {/* SECTION 4 – 3 image grid */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-display font-bold text-[#8B0000]">Our Royal Collection</h2>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-20"
            >
              {["/c5.jpg", "/c6.jpg", "/c7.jpg"].map((src, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative group overflow-hidden rounded-xl shadow-2xl border-4 border-[#8B0000]"
                >
                  <img src={src} className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110" alt={`Grid ${index + 1} `} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-[#FFD700] font-display text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Traditional Print #{index + 1}</p>
                    <div className="w-12 h-1 bg-[#FFD700] mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Footer Decorative Border */}
          <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B0000] via-[#FFD700] to-[#8B0000] z-50"></div>
        </div>
      )}
    </>
  );
}
