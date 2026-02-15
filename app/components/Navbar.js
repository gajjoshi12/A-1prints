"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Services", sectionId: "services" },
    { name: "Process", sectionId: "process" },
    { name: "Quality", sectionId: "quality" },
    { name: "FAQ", sectionId: "faq" },
    { name: "Contact", sectionId: "contact" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full bg-[#8B0000]/95 backdrop-blur-md text-[#FFD700] shadow-2xl py-3 md:py-4 sticky top-0 z-50 border-b-4 border-[#FFD700]"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/golden-texture.svg')] bg-[length:100px_100px] opacity-10 pointer-events-none" />

                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 relative z-10">
                    {/* Logo Section */}
                    <motion.div
                        className="flex items-center space-x-2 md:space-x-4 cursor-pointer"
                        onClick={() => scrollToSection("home")}
                        whileHover={{ scale: 1.02 }}
                    >
                        <motion.img
                            src="/logo.png"
                            alt="A-1 Prints Logo"
                            className="h-10 md:h-14 w-auto object-contain drop-shadow-lg flex-shrink-0"
                            whileHover={{ rotate: 5 }}
                        />
                        <span className="text-lg md:text-2xl lg:text-3xl font-display font-bold tracking-wider md:tracking-[0.15em] text-gradient-gold whitespace-nowrap">
                            A-1 PRINTS
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-6 lg:space-x-10 font-display font-bold text-base lg:text-lg tracking-wider">
                        {navItems.map((item) => (
                            <motion.li
                                key={item.name}
                                whileHover={{ scale: 1.1 }}
                                onClick={() => scrollToSection(item.sectionId)}
                                className="cursor-pointer transition-colors relative group text-[#FFD700]"
                            >
                                {item.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full" />
                            </motion.li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/30"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-[#FFD700] rounded-full mb-1"
                        />
                        <motion.span
                            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-5 h-0.5 bg-[#FFD700] rounded-full mb-1"
                        />
                        <motion.span
                            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-5 h-0.5 bg-[#FFD700] rounded-full"
                        />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[60px] left-0 w-full bg-[#8B0000]/98 backdrop-blur-lg z-40 border-b-4 border-[#FFD700] overflow-hidden md:hidden"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('/golden-texture.svg')] bg-[length:80px_80px] opacity-10 pointer-events-none" />

                        <ul className="flex flex-col py-4 px-6 relative z-10">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(item.sectionId)}
                                    className="py-4 border-b border-[#FFD700]/20 last:border-b-0"
                                >
                                    <motion.span
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-between text-[#FFD700] font-display font-bold text-xl tracking-wider cursor-pointer"
                                    >
                                        {item.name}
                                        <svg className="w-5 h-5 text-[#DAA520]" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </motion.span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Decorative Footer */}
                        <div className="flex justify-center pb-4">
                            <div className="flex items-center gap-2">
                                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#DAA520]" />
                                <div className="w-2 h-2 rotate-45 bg-[#DAA520]" />
                                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#DAA520]" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
