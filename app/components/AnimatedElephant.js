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
                height="180"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: isLeft ? "scaleX(1)" : "scaleX(-1)" }}
            >
                <defs>
                    <linearGradient id={`petalGrad1_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B0000" />
                        <stop offset="50%" stopColor="#B22222" />
                        <stop offset="100%" stopColor="#DC143C" />
                    </linearGradient>
                    <linearGradient id={`petalGrad2_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#DAA520" />
                        <stop offset="100%" stopColor="#FFD700" />
                    </linearGradient>
                    <radialGradient id={`centerGrad_${position}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="60%" stopColor="#DAA520" />
                        <stop offset="100%" stopColor="#B8860B" />
                    </radialGradient>
                    <linearGradient id={`stemGrad_${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2E7D32" />
                        <stop offset="100%" stopColor="#1B5E20" />
                    </linearGradient>
                    <linearGradient id={`leafGrad_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4CAF50" />
                        <stop offset="100%" stopColor="#2E7D32" />
                    </linearGradient>
                </defs>

                {/* Stem */}
                <motion.path
                    d="M90 105 Q85 130 88 155 Q89 165 90 175"
                    stroke={`url(#stemGrad_${position})`}
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                        d: [
                            "M90 105 Q85 130 88 155 Q89 165 90 175",
                            "M90 105 Q87 130 89 155 Q90 165 91 175",
                            "M90 105 Q85 130 88 155 Q89 165 90 175"
                        ]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Leaves */}
                <motion.path
                    d="M88 135 Q70 125 60 135 Q65 145 88 140"
                    fill={`url(#leafGrad_${position})`}
                    animate={{ rotate: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "88px 137px" }}
                />
                <motion.path
                    d="M90 150 Q110 140 120 150 Q115 160 90 155"
                    fill={`url(#leafGrad_${position})`}
                    animate={{ rotate: [3, -3, 3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    style={{ transformOrigin: "90px 152px" }}
                />

                {/* Outer petals layer (8 petals) */}
                {Array.from({ length: 8 }, (_, i) => {
                    const angle = i * 45;
                    return (
                        <motion.ellipse
                            key={`outer_${i}`}
                            cx={90}
                            cy={55}
                            rx={12}
                            ry={35}
                            fill={`url(#petalGrad1_${position})`}
                            opacity={0.85}
                            style={{
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: "90px 80px"
                            }}
                            animate={{ scale: [1, 1.04, 1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                        />
                    );
                })}

                {/* Inner petals layer (8 petals, rotated 22.5deg) */}
                {Array.from({ length: 8 }, (_, i) => {
                    const angle = i * 45 + 22.5;
                    return (
                        <motion.ellipse
                            key={`inner_${i}`}
                            cx={90}
                            cy={60}
                            rx={8}
                            ry={25}
                            fill={`url(#petalGrad2_${position})`}
                            opacity={0.9}
                            style={{
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: "90px 80px"
                            }}
                            animate={{ scale: [1, 1.06, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1 + 0.5, ease: "easeInOut" }}
                        />
                    );
                })}

                {/* Center of flower */}
                <motion.circle
                    cx={90}
                    cy={80}
                    r={16}
                    fill={`url(#centerGrad_${position})`}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Center dots pattern */}
                {Array.from({ length: 6 }, (_, i) => {
                    const dotAngle = i * 60;
                    const dotR = 8;
                    return (
                        <motion.circle
                            key={`dot_${i}`}
                            cx={90 + Math.cos(dotAngle * Math.PI / 180) * dotR}
                            cy={80 + Math.sin(dotAngle * Math.PI / 180) * dotR}
                            r={2}
                            fill="#8B0000"
                            opacity={0.6}
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                    );
                })}

                {/* Golden shimmer particles */}
                {Array.from({ length: 5 }, (_, i) => {
                    const px = 70 + Math.random() * 40;
                    const py = 50 + Math.random() * 60;
                    return (
                        <motion.circle
                            key={`sparkle_${i}`}
                            cx={px}
                            cy={py}
                            r={1.5}
                            fill="#FFD700"
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.5, 0.5]
                            }}
                            transition={{
                                duration: 2 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut"
                            }}
                        />
                    );
                })}
            </motion.svg>
        </motion.div>
    );
}
