"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedElephant({ position = "left", delay = 0 }) {
    const isLeft = position === "left";

    return (
        <motion.div
            initial={{ x: isLeft ? -200 : 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay, ease: "easeOut" }}
            className={`absolute ${isLeft ? "left-4" : "right-4"} bottom-20 z-10`}
        >
            <motion.svg
                width="180"
                height="140"
                viewBox="0 0 180 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: isLeft ? "scaleX(1)" : "scaleX(-1)" }}
            >
                {/* Elephant Body */}
                <ellipse cx="90" cy="85" rx="55" ry="40" fill="url(#elephantGradient)" />

                {/* Head */}
                <circle cx="145" cy="60" r="30" fill="url(#elephantGradient)" />

                {/* Trunk with animation */}
                <motion.path
                    d="M170 70 Q185 85 180 105 Q175 120 165 125"
                    stroke="url(#elephantGradient)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                        d: [
                            "M170 70 Q185 85 180 105 Q175 120 165 125",
                            "M170 70 Q190 80 185 100 Q180 115 175 120",
                            "M170 70 Q185 85 180 105 Q175 120 165 125"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Ear */}
                <ellipse cx="125" cy="50" rx="20" ry="25" fill="url(#elephantGradient)" opacity="0.9" />
                <ellipse cx="125" cy="50" rx="12" ry="16" fill="#FFD700" opacity="0.3" />

                {/* Eye */}
                <circle cx="155" cy="55" r="4" fill="#1a0000" />
                <circle cx="156" cy="54" r="1.5" fill="white" />

                {/* Tusk */}
                <path d="M160 75 Q170 85 165 95" stroke="#FFFFF0" strokeWidth="4" strokeLinecap="round" fill="none" />

                {/* Legs */}
                <rect x="55" y="110" width="15" height="28" rx="5" fill="url(#elephantGradient)" />
                <rect x="80" y="110" width="15" height="28" rx="5" fill="url(#elephantGradient)" />
                <rect x="105" y="110" width="15" height="28" rx="5" fill="url(#elephantGradient)" />
                <rect x="130" y="100" width="12" height="25" rx="4" fill="url(#elephantGradient)" />

                {/* Decorative Blanket */}
                <rect x="50" y="65" width="80" height="35" rx="5" fill="url(#blanketGradient)" />
                <rect x="55" y="70" width="70" height="25" rx="3" fill="none" stroke="#FFD700" strokeWidth="2" />

                {/* Blanket Patterns */}
                <circle cx="70" cy="82" r="6" fill="#FFD700" opacity="0.8" />
                <circle cx="90" cy="82" r="6" fill="#FFD700" opacity="0.8" />
                <circle cx="110" cy="82" r="6" fill="#FFD700" opacity="0.8" />

                {/* Crown/Headpiece */}
                <motion.path
                    d="M135 35 L145 20 L155 35 L165 25 L160 40"
                    fill="url(#goldGradient)"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Forehead Jewel */}
                <circle cx="145" cy="45" r="5" fill="#FF0000" stroke="#FFD700" strokeWidth="2" />

                {/* Tail */}
                <motion.path
                    d="M35 80 Q20 90 25 105"
                    stroke="url(#elephantGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                        d: [
                            "M35 80 Q20 90 25 105",
                            "M35 80 Q15 95 20 110",
                            "M35 80 Q20 90 25 105"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Tail Tuft */}
                <circle cx="25" cy="108" r="5" fill="#4a0404" />

                {/* Decorative bells on blanket */}
                <motion.circle
                    cx="60" cy="98"
                    r="4"
                    fill="#FFD700"
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                />
                <motion.circle
                    cx="120" cy="98"
                    r="4"
                    fill="#FFD700"
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
                />

                <defs>
                    <linearGradient id="elephantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B4513" />
                        <stop offset="50%" stopColor="#6B3A2E" />
                        <stop offset="100%" stopColor="#4a0404" />
                    </linearGradient>
                    <linearGradient id="blanketGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8B0000" />
                        <stop offset="50%" stopColor="#B22222" />
                        <stop offset="100%" stopColor="#8B0000" />
                    </linearGradient>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FFD700" />
                    </linearGradient>
                </defs>
            </motion.svg>
        </motion.div>
    );
}
