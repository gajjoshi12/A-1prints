"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedElephant from "./AnimatedElephant";
import AnimatedPeacock from "./AnimatedPeacock";

export default function SplashScreen({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1200);
        }, 4000); // Extended time for animations to play

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#4a0404] overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[url('/golden-texture.svg')] bg-[length:200px_200px]"></div>

                    {/* Radiant Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15)_0%,transparent_70%)]"></div>

                    {/* Left Elephant */}
                    <motion.div
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: -180, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute left-0 bottom-10 transform scale-75 md:scale-100"
                    >
                        <AnimatedElephant position="left" />
                    </motion.div>

                    {/* Right Elephant */}
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 180, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute right-0 bottom-10 transform scale-75 md:scale-100"
                    >
                        <AnimatedElephant position="right" />
                    </motion.div>

                    {/* Rotating Mandala Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[600px] h-[600px] border-[1px] border-[#FFD700] rounded-full opacity-20 border-dashed"
                    />

                    {/* Counter-Rotating Mandala Ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[500px] h-[500px] border-[1px] border-[#DAA520] rounded-full opacity-20 border-dotted"
                    />

                    {/* Center Logo Container */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative p-10 border-4 border-double border-[#FFD700] rounded-full bg-[#4a0404] shadow-[0_0_80px_rgba(255,215,0,0.4)] z-20"
                    >
                        <motion.img
                            src="/logo.png"
                            alt="Logo"
                            className="w-56 h-auto object-contain drop-shadow-2xl"
                            animate={{
                                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />

                        {/* Decorative Flourishes */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute bottom-6 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"
                        />
                    </motion.div>

                    {/* Peacock Feathers Animation (Symbolic) */}
                    <motion.div
                        className="absolute top-10 left-10 md:top-20 md:left-20 opacity-40"
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    >
                        <AnimatedPeacock position="left" />
                    </motion.div>

                    <motion.div
                        className="absolute top-10 right-10 md:top-20 md:right-20 opacity-40"
                        initial={{ scale: 0, rotate: 45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    >
                        <AnimatedPeacock position="right" />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
