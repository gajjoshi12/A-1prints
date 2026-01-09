"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedPeacock({ position = "right", delay = 0 }) {
    const isRight = position === "right";

    // Generate feather positions in a fan pattern
    const feathers = Array.from({ length: 9 }, (_, i) => {
        const angle = -60 + (i * 15); // -60 to 60 degrees
        return { angle, index: i };
    });

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
                    <linearGradient id="peacockBody" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0066CC" />
                        <stop offset="50%" stopColor="#004499" />
                        <stop offset="100%" stopColor="#002266" />
                    </linearGradient>
                    <linearGradient id="featherGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00FF88" />
                        <stop offset="30%" stopColor="#0099FF" />
                        <stop offset="60%" stopColor="#0066CC" />
                        <stop offset="100%" stopColor="#003366" />
                    </linearGradient>
                    <radialGradient id="eyeSpot" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFD700" />
                        <stop offset="40%" stopColor="#0066FF" />
                        <stop offset="70%" stopColor="#004488" />
                        <stop offset="100%" stopColor="#002244" />
                    </radialGradient>
                    <linearGradient id="goldShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFD700">
                            <animate attributeName="stop-color" values="#FFD700;#FFA500;#FFD700" dur="2s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#FFA500">
                            <animate attributeName="stop-color" values="#FFA500;#FFD700;#FFA500" dur="2s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>
                </defs>

                {/* Feathers - Fan Pattern */}
                <g>
                    {feathers.map(({ angle, index }) => (
                        <motion.g
                            key={index}
                            style={{ transformOrigin: "100px 180px" }}
                            animate={{
                                rotate: [angle, angle + 3, angle - 3, angle],
                            }}
                            transition={{
                                duration: 4 + index * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.1
                            }}
                        >
                            {/* Feather shaft */}
                            <motion.ellipse
                                cx={100}
                                cy={80}
                                rx={8}
                                ry={60}
                                fill="url(#featherGradient)"
                                style={{
                                    transform: `rotate(${angle}deg)`,
                                    transformOrigin: "100px 180px"
                                }}
                            />
                            {/* Eye spot on feather */}
                            <motion.circle
                                cx={100 + Math.sin(angle * Math.PI / 180) * 85}
                                cy={80 - Math.cos(angle * Math.PI / 180) * 85 + 20}
                                r={12}
                                fill="url(#eyeSpot)"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                            />
                            {/* Inner gold circle */}
                            <circle
                                cx={100 + Math.sin(angle * Math.PI / 180) * 85}
                                cy={80 - Math.cos(angle * Math.PI / 180) * 85 + 20}
                                r={4}
                                fill="url(#goldShimmer)"
                            />
                        </motion.g>
                    ))}
                </g>

                {/* Body */}
                <ellipse cx="100" cy="185" rx="25" ry="35" fill="url(#peacockBody)" />

                {/* Neck */}
                <motion.path
                    d="M100 155 Q95 140 100 120 Q105 100 100 90"
                    stroke="url(#peacockBody)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    fill="none"
                    animate={{
                        d: [
                            "M100 155 Q95 140 100 120 Q105 100 100 90",
                            "M100 155 Q98 140 102 120 Q106 100 102 90",
                            "M100 155 Q95 140 100 120 Q105 100 100 90"
                        ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Head */}
                <circle cx="100" cy="82" r="15" fill="url(#peacockBody)" />

                {/* Beak */}
                <path d="M112 82 L125 80 L112 85 Z" fill="#FFD700" />

                {/* Eye */}
                <circle cx="108" cy="79" r="4" fill="white" />
                <circle cx="109" cy="79" r="2" fill="#000" />

                {/* Crown feathers */}
                <motion.g
                    animate={{ rotate: [-5, 5, -5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ transformOrigin: "100px 70px" }}
                >
                    <line x1="95" y1="70" x2="90" y2="55" stroke="#0066CC" strokeWidth="2" />
                    <circle cx="90" cy="52" r="4" fill="url(#goldShimmer)" />
                    <line x1="100" y1="68" x2="100" y2="50" stroke="#0066CC" strokeWidth="2" />
                    <circle cx="100" cy="47" r="4" fill="url(#goldShimmer)" />
                    <line x1="105" y1="70" x2="110" y2="55" stroke="#0066CC" strokeWidth="2" />
                    <circle cx="110" cy="52" r="4" fill="url(#goldShimmer)" />
                </motion.g>

                {/* Legs */}
                <line x1="90" y1="215" x2="85" y2="235" stroke="#CC6600" strokeWidth="3" />
                <line x1="110" y1="215" x2="115" y2="235" stroke="#CC6600" strokeWidth="3" />

                {/* Feet */}
                <path d="M75 235 L85 235 L90 232 L85 235 L90 238" stroke="#CC6600" strokeWidth="2" fill="none" />
                <path d="M105 235 L115 235 L120 232 L115 235 L120 238" stroke="#CC6600" strokeWidth="2" fill="none" />
            </svg>
        </motion.div>
    );
}
