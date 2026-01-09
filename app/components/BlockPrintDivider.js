import React from "react";
import { motion } from "framer-motion";

export default function BlockPrintDivider() {
    return (
        <div className="w-full flex justify-center items-center py-12 opacity-60">
            <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M10 20C15 10 25 10 30 20C35 30 45 30 50 20"
                    stroke="#8B0000" strokeWidth="2" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                    d="M50 20C55 10 65 10 70 20C75 30 85 30 90 20"
                    stroke="#8B0000" strokeWidth="2" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                />
                <motion.path
                    d="M90 20C95 10 105 10 110 20C115 30 125 30 130 20"
                    stroke="#8B0000" strokeWidth="2" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                />
                <motion.path
                    d="M130 20C135 10 145 10 150 20C155 30 165 30 170 20"
                    stroke="#8B0000" strokeWidth="2" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                />
                <motion.path
                    d="M170 20C175 10 185 10 190 20"
                    stroke="#8B0000" strokeWidth="2" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                />

                <motion.circle cx="30" cy="10" r="3" fill="#DAA520" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <motion.circle cx="70" cy="30" r="3" fill="#DAA520" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, delay: 0.5, repeat: Infinity }} />
                <motion.circle cx="110" cy="10" r="3" fill="#DAA520" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} />
                <motion.circle cx="150" cy="30" r="3" fill="#DAA520" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, delay: 1.5, repeat: Infinity }} />
            </svg>
        </div>
    );
}
