"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1000); // Wait for exit animation to finish before unmounting/enabling scroll
        }, 2000); // Show splash for 2 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#4a0404]"
                >
                    <div className="absolute inset-0 opacity-30 bg-[url('/golden-texture.svg')] bg-[length:100px_100px]"></div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative p-6 border-4 border-[#FFD700] rounded-full bg-[#4a0404] shadow-[0_0_50px_rgba(255,215,0,0.3)]"
                    >
                        <motion.img
                            src="/logo.png"
                            alt="Logo"
                            className="w-48 h-auto object-contain drop-shadow-lg"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
