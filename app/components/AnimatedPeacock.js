"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedPeacock({ position = "right", delay = 0 }) {
    const isRight = position === "right";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
            className={`absolute ${isRight ? "right-8" : "left-8"} top-32 z-10`}
            style={{ transform: isRight ? "scaleX(-1)" : "scaleX(1)" }}
        >
            <svg
                width="200"
                height="240"
                viewBox="0 0 200 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={`vineGrad_${position}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4CAF50" />
                        <stop offset="100%" stopColor="#1B5E20" />
                    </linearGradient>
                    <linearGradient id={`rosePetal_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B0000" />
                        <stop offset="50%" stopColor="#DC143C" />
                        <stop offset="100%" stopColor="#B22222" />
                    </linearGradient>
                    <linearGradient id={`marigoldPetal_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="50%" stopColor="#FFA500" />
                        <stop offset="100%" stopColor="#FF8C00" />
                    </linearGradient>
                    <radialGradient id={`flowerCenter_${position}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="#DAA520" />
                    </radialGradient>
                    <linearGradient id={`leafAccent_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#66BB6A" />
                        <stop offset="100%" stopColor="#2E7D32" />
                    </linearGradient>
                </defs>

                {/* Main curving vine */}
                <motion.path
                    d="M30 230 Q40 200 50 170 Q60 140 55 110 Q50 80 65 55 Q80 30 100 20"
                    stroke={`url(#vineGrad_${position})`}
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                        d: [
                            "M30 230 Q40 200 50 170 Q60 140 55 110 Q50 80 65 55 Q80 30 100 20",
                            "M30 230 Q42 200 52 170 Q62 140 57 110 Q52 80 67 55 Q82 30 102 20",
                            "M30 230 Q40 200 50 170 Q60 140 55 110 Q50 80 65 55 Q80 30 100 20"
                        ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Branch vine */}
                <motion.path
                    d="M55 110 Q80 100 110 105 Q140 110 155 95"
                    stroke={`url(#vineGrad_${position})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                        d: [
                            "M55 110 Q80 100 110 105 Q140 110 155 95",
                            "M55 110 Q82 98 112 103 Q142 108 157 93",
                            "M55 110 Q80 100 110 105 Q140 110 155 95"
                        ]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Second branch */}
                <motion.path
                    d="M50 170 Q30 155 25 130 Q22 115 30 100"
                    stroke={`url(#vineGrad_${position})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Leaves along the vine */}
                {[
                    { x: 45, y: 190, r: -30, s: 0.8 },
                    { x: 60, y: 135, r: 25, s: 1 },
                    { x: 40, y: 90, r: -20, s: 0.9 },
                    { x: 80, y: 45, r: 15, s: 0.7 },
                    { x: 120, y: 100, r: -10, s: 0.85 },
                    { x: 35, y: 120, r: -40, s: 0.75 },
                ].map((leaf, i) => (
                    <motion.path
                        key={`leaf_${i}`}
                        d={`M${leaf.x} ${leaf.y} Q${leaf.x + 15} ${leaf.y - 20} ${leaf.x + 25} ${leaf.y - 5} Q${leaf.x + 15} ${leaf.y + 10} ${leaf.x} ${leaf.y}`}
                        fill={`url(#leafAccent_${position})`}
                        opacity={0.8}
                        style={{
                            transform: `rotate(${leaf.r}deg) scale(${leaf.s})`,
                            transformOrigin: `${leaf.x}px ${leaf.y}px`
                        }}
                        animate={{ rotate: [leaf.r - 3, leaf.r + 3, leaf.r - 3] }}
                        transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    />
                ))}

                {/* Top rose flower */}
                {Array.from({ length: 6 }, (_, i) => {
                    const angle = i * 60;
                    return (
                        <motion.ellipse
                            key={`rose_${i}`}
                            cx={100}
                            cy={10}
                            rx={6}
                            ry={14}
                            fill={`url(#rosePetal_${position})`}
                            opacity={0.9}
                            style={{
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: "100px 20px"
                            }}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                        />
                    );
                })}
                <motion.circle
                    cx={100} cy={20} r={7}
                    fill={`url(#flowerCenter_${position})`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Side marigold flower */}
                {Array.from({ length: 8 }, (_, i) => {
                    const angle = i * 45;
                    return (
                        <motion.ellipse
                            key={`marigold_${i}`}
                            cx={155}
                            cy={82}
                            rx={5}
                            ry={12}
                            fill={`url(#marigoldPetal_${position})`}
                            opacity={0.9}
                            style={{
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: "155px 90px"
                            }}
                            animate={{ scale: [1, 1.06, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.12 }}
                        />
                    );
                })}
                <motion.circle
                    cx={155} cy={90} r={6}
                    fill={`url(#flowerCenter_${position})`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />

                {/* Bottom small flower */}
                {Array.from({ length: 5 }, (_, i) => {
                    const angle = i * 72;
                    return (
                        <motion.ellipse
                            key={`small_${i}`}
                            cx={30}
                            cy={95}
                            rx={4}
                            ry={10}
                            fill={`url(#rosePetal_${position})`}
                            opacity={0.85}
                            style={{
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: "30px 102px"
                            }}
                            animate={{ scale: [1, 1.04, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        />
                    );
                })}
                <circle cx={30} cy={102} r={5} fill={`url(#flowerCenter_${position})`} />

                {/* Decorative curling tendrils */}
                <motion.path
                    d="M70 50 Q75 40 85 38 Q90 37 92 40"
                    stroke={`url(#vineGrad_${position})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity={0.6}
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.path
                    d="M140 105 Q150 100 160 102 Q165 105 162 110"
                    stroke={`url(#vineGrad_${position})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity={0.6}
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                />

                {/* Golden sparkle dots */}
                {[
                    { x: 95, y: 15 }, { x: 160, y: 85 }, { x: 75, y: 60 },
                    { x: 110, y: 30 }, { x: 145, y: 100 }, { x: 35, y: 105 },
                ].map((pt, i) => (
                    <motion.circle
                        key={`sparkle_${i}`}
                        cx={pt.x}
                        cy={pt.y}
                        r={1.5}
                        fill="#FFD700"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 0.5]
                        }}
                        transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </svg>
        </motion.div>
    );
}
