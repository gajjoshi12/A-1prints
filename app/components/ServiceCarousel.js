"use client";

import React, { useState, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const services = [
    {
        id: 1,
        title: "Hand Block Printing",
        description: "Traditional wooden block printing using centuries-old techniques passed down through generations of master artisans.",
        icon: "🎨",
        color: "#8B0000",
    },
    {
        id: 2,
        title: "Natural Dyeing",
        description: "Eco-friendly natural dyes extracted from plants, minerals, and organic sources for vibrant, lasting colors.",
        icon: "🌿",
        color: "#2E7D32",
    },
    {
        id: 3,
        title: "Custom Designs",
        description: "Bespoke patterns crafted to your specifications, bringing your unique vision to life on premium fabrics.",
        icon: "✨",
        color: "#7B1FA2",
    },
    {
        id: 4,
        title: "Wholesale Orders",
        description: "Large-scale production maintaining the same attention to detail and quality for businesses worldwide.",
        icon: "📦",
        color: "#1565C0",
    },
    {
        id: 5,
        title: "Export Services",
        description: "International shipping and export documentation handled seamlessly for global clientele.",
        icon: "🌍",
        color: "#00695C",
    },
    {
        id: 6,
        title: "Heritage Tours",
        description: "Experience our craft firsthand with guided tours of our traditional printing workshops in Jaipur.",
        icon: "🏰",
        color: "#D84315",
    },
];

export default function ServiceCarousel() {
    const [isDragging, setIsDragging] = useState(false);
    const carouselRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 400;
            const newPosition = direction === "left"
                ? scrollPosition - scrollAmount
                : scrollPosition + scrollAmount;

            carouselRef.current.scrollTo({
                left: newPosition,
                behavior: "smooth",
            });
            setScrollPosition(newPosition);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative py-20 overflow-hidden"
        >
            {/* Royal Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/5 via-[#DAA520]/10 to-[#8B0000]/5" />

            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent" />

            {/* Section Header */}
            <div className="text-center mb-16 relative">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="inline-block mb-6"
                >

                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-6xl font-display font-bold text-[#8B0000] mb-4"
                >
                    Our Royal <span className="text-gradient-gold">Services</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl text-[#5d4037] font-serif max-w-2xl mx-auto italic"
                >
                    "Craftsmanship fit for royalty, delivered with devotion"
                </motion.p>

                {/* Decorative Lines */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-[#DAA520]" />
                    <div className="w-3 h-3 rotate-45 bg-[#DAA520]" />
                    <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-[#DAA520]" />
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-4 top-1/2 translate-y-8 z-20 hidden md:block">
                <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll("left")}
                    className="w-14 h-14 rounded-full bg-[#8B0000] text-[#FFD700] flex items-center justify-center shadow-xl border-2 border-[#DAA520] hover:bg-[#a00000] transition-colors"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </motion.button>
            </div>

            <div className="absolute right-4 top-1/2 translate-y-8 z-20 hidden md:block">
                <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll("right")}
                    className="w-14 h-14 rounded-full bg-[#8B0000] text-[#FFD700] flex items-center justify-center shadow-xl border-2 border-[#DAA520] hover:bg-[#a00000] transition-colors"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </motion.button>
            </div>

            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="flex gap-8 overflow-x-auto px-8 md:px-20 pb-8 scrollbar-hide cursor-grab active:cursor-grabbing scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="flex-shrink-0 w-[320px] md:w-[380px] group"
                    >
                        {/* Card */}
                        <div className="relative h-full bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-[#DAA520]/30 shadow-xl transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(139,0,0,0.2)] group-hover:border-[#DAA520]">

                            {/* Top Decorative Pattern */}
                            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#8B0000] to-[#6B0000] overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[url('/golden-texture.svg')] bg-[length:80px_80px]" />

                                {/* Decorative Arches */}
                                <svg className="absolute bottom-0 left-0 w-full h-8" viewBox="0 0 400 30" preserveAspectRatio="none">
                                    <path d="M0,30 Q50,0 100,30 Q150,0 200,30 Q250,0 300,30 Q350,0 400,30 L400,30 L0,30 Z" fill="#fff5d7" />
                                </svg>
                            </div>

                            {/* Icon Circle */}
                            <div className="relative z-10 flex justify-center -mt-2">
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-20 h-20 rounded-full bg-[#fff5d7] border-4 border-[#DAA520] flex items-center justify-center text-4xl shadow-lg"
                                    style={{ boxShadow: `0 0 30px ${service.color}40` }}
                                >
                                    {service.icon}
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-8 pt-6 text-center">
                                <h3 className="text-2xl font-display font-bold text-[#8B0000] mb-4 group-hover:text-gradient-gold transition-all">
                                    {service.title}
                                </h3>

                                <p className="text-[#5d4037] font-serif leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Royal Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative inline-flex items-center gap-2 px-6 py-3 bg-[#8B0000] text-[#FFD700] font-display font-bold rounded-full overflow-hidden group/btn"
                                >
                                    <span className="relative z-10">Learn More</span>
                                    <svg className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#a00000] to-[#8B0000] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                </motion.button>
                            </div>

                            {/* Bottom Decorative Element */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent opacity-60" />

                            {/* Corner Flourishes */}
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#DAA520]/40 rounded-bl-lg" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#DAA520]/40 rounded-br-lg" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {services.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-2 h-2 rounded-full bg-[#DAA520]/40"
                        whileHover={{ scale: 1.5, backgroundColor: "#DAA520" }}
                    />
                ))}
            </div>

            {/* Decorative Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DAA520] to-transparent" />
        </motion.section>
    );
}
