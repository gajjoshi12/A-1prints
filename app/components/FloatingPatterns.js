"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Traditional Rajasthani block print motifs
const patterns = [
    // Paisley
    ({ size, color }) => (
        <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
            <path
                d="M25 5 Q40 15 35 30 Q30 45 15 40 Q5 35 10 20 Q15 10 25 5Z"
                fill={color}
                opacity="0.6"
            />
            <circle cx="20" cy="25" r="5" fill="white" opacity="0.3" />
        </svg>
    ),
    // Lotus
    ({ size, color }) => (
        <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
            <ellipse cx="25" cy="35" rx="8" ry="4" fill={color} opacity="0.5" />
            <ellipse cx="25" cy="30" rx="6" ry="12" fill={color} opacity="0.6" />
            <ellipse cx="18" cy="32" rx="5" ry="10" fill={color} opacity="0.5" transform="rotate(-20 18 32)" />
            <ellipse cx="32" cy="32" rx="5" ry="10" fill={color} opacity="0.5" transform="rotate(20 32 32)" />
            <ellipse cx="12" cy="35" rx="4" ry="8" fill={color} opacity="0.4" transform="rotate(-40 12 35)" />
            <ellipse cx="38" cy="35" rx="4" ry="8" fill={color} opacity="0.4" transform="rotate(40 38 35)" />
        </svg>
    ),
    // Diamond/Geometric
    ({ size, color }) => (
        <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
            <polygon points="25,5 45,25 25,45 5,25" fill={color} opacity="0.5" />
            <polygon points="25,12 38,25 25,38 12,25" fill="white" opacity="0.2" />
            <circle cx="25" cy="25" r="5" fill={color} opacity="0.7" />
        </svg>
    ),
    // Elephant mini
    ({ size, color }) => (
        <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
            <ellipse cx="25" cy="28" rx="15" ry="10" fill={color} opacity="0.6" />
            <circle cx="38" cy="22" r="8" fill={color} opacity="0.6" />
            <path d="M44 25 Q50 30 48 38" stroke={color} strokeWidth="3" fill="none" opacity="0.6" />
            <rect x="12" y="35" width="5" height="10" rx="2" fill={color} opacity="0.5" />
            <rect x="22" y="35" width="5" height="10" rx="2" fill={color} opacity="0.5" />
            <rect x="32" y="35" width="4" height="8" rx="2" fill={color} opacity="0.5" />
        </svg>
    ),
    // Sun/Mandala
    ({ size, color }) => (
        <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="10" fill={color} opacity="0.6" />
            {[...Array(8)].map((_, i) => (
                <line
                    key={i}
                    x1="25" y1="25"
                    x2={25 + 18 * Math.cos(i * Math.PI / 4)}
                    y2={25 + 18 * Math.sin(i * Math.PI / 4)}
                    stroke={color}
                    strokeWidth="3"
                    opacity="0.5"
                />
            ))}
            <circle cx="25" cy="25" r="5" fill="white" opacity="0.3" />
        </svg>
    ),
];

export default function FloatingPatterns() {
    // Generate random floating elements
    const floatingElements = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            pattern: i % patterns.length,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: 30 + Math.random() * 40,
            depth: 0.3 + Math.random() * 0.7, // For parallax effect
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 5,
            color: i % 3 === 0 ? "#8B0000" : i % 3 === 1 ? "#DAA520" : "#4a0404",
            rotationSpeed: 20 + Math.random() * 40,
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {floatingElements.map((el) => {
                const Pattern = patterns[el.pattern];
                return (
                    <motion.div
                        key={el.id}
                        className="absolute"
                        style={{
                            left: `${el.x}%`,
                            top: `${el.y}%`,
                            opacity: el.depth * 0.4,
                            filter: `blur(${(1 - el.depth) * 2}px)`,
                        }}
                        animate={{
                            y: [0, -30 * el.depth, 0],
                            x: [0, 20 * el.depth, 0],
                            rotate: [0, el.rotationSpeed, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: el.duration,
                            delay: el.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Pattern size={el.size} color={el.color} />
                    </motion.div>
                );
            })}
        </div>
    );
}
