
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import BlockPrintDivider from "./components/BlockPrintDivider";
import AnimatedElephant from "./components/AnimatedElephant";
import AnimatedPeacock from "./components/AnimatedPeacock";
import FloatingPatterns from "./components/FloatingPatterns";
import GoldenParticles from "./components/GoldenParticles";
import ServiceCarousel from "./components/ServiceCarousel";
import Navbar from "./components/Navbar";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSplashComplete = () => {
    setLoading(false);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageHover = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.03,
      rotate: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
    <>
      {loading && <SplashScreen onComplete={handleSplashComplete} />}

      {!loading && (
        <div className="min-h-screen bg-[#fff5d7] text-[#4a0404] overflow-x-hidden font-sans relative">

          {/* Background Elements */}
          <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-[url('/golden-texture.svg')] bg-[length:200px_200px]"></div>
          <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,245,215,0)_40%,rgba(218,165,32,0.15)_100%)]"></div>

          <FloatingPatterns />
          <GoldenParticles />

          {/* NAVBAR */}
          <Navbar />

          <div className="relative max-w-7xl mx-auto py-24 space-y-32 px-6 z-10">

            {/* HERO / HERITAGE SECTION */}
            <motion.div
              id="home"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto relative px-4 scroll-mt-20"
            >
              {/* Decorative Side Elephants for Hero */}
              <div className="hidden lg:block absolute -left-48 top-0 scale-75 opacity-80">
                <AnimatedElephant position="right" delay={1} />
              </div>
              <div className="hidden lg:block absolute -right-48 top-0 scale-75 opacity-80">
                <AnimatedElephant position="left" delay={1.5} />
              </div>

              <motion.h1
                className="text-6xl md:text-8xl font-display font-bold text-[#8B0000] mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                The Legacy of <br /><span className="text-gradient-gold">A-1 Prints</span>
              </motion.h1>

              <p className="text-2xl text-[#5d4037] font-serif leading-loose mb-12 max-w-2xl mx-auto italic">
                "Quality Screen Printers of Textiles — Trusted Since 1975.
                Delivering excellence in dyeing and pigment printing across India."
              </p>

              <BlockPrintDivider />
            </motion.div>

            {/* SECTION 1: Hand Block Printing - ABOUT */}
            <motion.div
              id="about"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative"
            >
              {/* Decorative Peacock */}
              <div className="absolute -top-32 -left-20 z-0 opacity-80 scale-75 hidden md:block">
                <AnimatedPeacock position="right" delay={0.5} />
              </div>

              <motion.div
                variants={imageHover}
                initial="rest"
                whileHover="hover"
                className="relative z-10 group perspective-1000"
              >
                <div className="absolute inset-0 bg-[#8B0000] rounded-2xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative p-3 border-2 border-dashed border-[#DAA520] rounded-2xl bg-white/50 backdrop-blur-sm">
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src="/c1.jpeg"
                      className="w-full h-auto max-h-[500px] object-cover filter sepia-[.15] hover:sepia-0 transition-all duration-700"
                      alt="Traditional Textile"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="glass-panel p-12 rounded-2xl relative z-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(139,0,0,0.15)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent opacity-50"></div>
                <h2 className="text-5xl font-display font-bold mb-8 text-[#8B0000]">About A-1 Prints</h2>
                <p className="text-[#5d4037] leading-loose text-xl font-serif">
                  Founded in 1975 by <span className="font-bold text-[#8B0000]">Mr. Abbas Jamal Kadiwal</span>, A-1 Prints is a trusted textile screen printing company with over 50 years of experience. Based in Mumbai, Maharashtra, we specialize in high-quality dyeing and pigment printing on cotton sarees — known for transparency, affordability, and design excellence.
                </p>
                <div className="mt-8 flex justify-end">
                  <img src="/logo.png" className="w-16 h-16 opacity-20 filter grayscale" alt="watermark" />
                </div>
              </div>
            </motion.div>

            {/* SECTION 2 – 3 images side by side - GALLERY */}
            <motion.div
              id="gallery"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-10 scroll-mt-20"
            >
              {["/c2.jpeg", "/c3.jpeg", "/c4.jpeg"].map((src, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="p-3 bg-white/80 rounded-t-full rounded-b-lg shadow-xl border border-[#eecfa1] relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-b from-[#DAA520] to-transparent opacity-20 rounded-t-full rounded-b-lg blur group-hover:opacity-40 transition-opacity"></div>
                  <div className="overflow-hidden rounded-t-full rounded-b border border-gray-100 relative z-10">
                    <img src={src} className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110" alt={`Gallery ${index + 1} `} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <span className="text-[#FFD700] font-display text-xl tracking-widest">VIEW PRINTS</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="w-full flex justify-center py-12">
              <div className="w-2/3">
                <BlockPrintDivider />
              </div>
            </div>

            {/* SECTION 3 – Reverse layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative"
            >
              {/* Decorative Peacock */}
              <div className="absolute -bottom-20 -right-20 z-0 opacity-80 scale-75 hidden md:block transform scale-x-[-1]">
                <AnimatedPeacock position="left" delay={0.5} />
              </div>

              <div className="glass-panel p-12 rounded-2xl relative z-10 order-2 md:order-1 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(139,0,0,0.15)]">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B0000] to-transparent opacity-50"></div>
                <h2 className="text-5xl font-display font-bold mb-8 text-[#8B0000]">Our Expertise</h2>
                <p className="text-[#5d4037] leading-loose text-xl font-serif">
                  At <span className="font-bold text-[#8B0000]">A-1 Prints</span>, we provide expert screen printing labour work — customers can bring their own fabric. We handle cotton, nylon, munga, supernet, and polyester with a production capacity of 25,000 pieces and a minimum order of 5,000 pieces. Customization is available as per your design and color requirements.
                </p>
              </div>

              <motion.div
                variants={imageHover}
                initial="rest"
                whileHover="hover"
                className="relative z-10 order-1 md:order-2 group perspective-1000"
              >
                <div className="absolute inset-0 bg-[#8B0000] rounded-2xl transform -rotate-3 scale-105 opacity-20 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="relative p-3 border-2 border-dashed border-[#DAA520] rounded-2xl bg-white/50 backdrop-blur-sm">
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src="/c5.jpg"
                      className="w-full h-auto max-h-[500px] object-cover filter sepia-[.15] hover:sepia-0 transition-all duration-700"
                      alt="Artisan Work"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* FLORAL DIVIDER */}
            <div className="relative w-full h-40 overflow-hidden my-12">
              <div className="absolute inset-0 flex items-center justify-around opacity-60">
                <div className="transform scale-50"><AnimatedElephant position="right" delay={0} /></div>
                <div className="transform scale-50"><AnimatedElephant position="left" delay={2} /></div>
                <div className="transform scale-50"><AnimatedElephant position="right" delay={4} /></div>
              </div>
            </div>

            {/* OUR SERVICES CAROUSEL */}
            <div id="services" className="scroll-mt-20">
              <ServiceCarousel />
            </div>

            {/* SECTION 4 – 3 image grid */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-display font-bold text-[#8B0000]">Our Printed Textiles</h2>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-20"
            >
              {["/c5.jpg", "/c6.jpg", "/c7.jpg"].map((src, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative group overflow-hidden rounded-xl shadow-2xl border-4 border-[#8B0000]"
                >
                  <img src={src} className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110" alt={`Grid ${index + 1} `} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-[#FFD700] font-display text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Screen Print #{index + 1}</p>
                    <div className="w-12 h-1 bg-[#FFD700] mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* PRINTING PROCESS SECTION */}
            <motion.div
              id="process"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="scroll-mt-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-5xl font-display font-bold text-[#8B0000] mb-4">Our Printing <span className="text-gradient-gold">Process</span></h2>
                <p className="text-xl text-[#5d4037] font-serif italic">"From design to dispatch — precision at every step"</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Design Submission", desc: "Submit your design via WhatsApp, email, or hardcopy for review and assessment." },
                  { step: "02", title: "Sampling", desc: "We create a sample print for your approval before proceeding to bulk production." },
                  { step: "03", title: "Color Matching & Approval", desc: "Precise color matching to ensure your design is reproduced with accuracy and consistency." },
                  { step: "04", title: "Bulk Screen Printing", desc: "Full-scale production using our advanced screen printing techniques on your chosen fabric." },
                  { step: "05", title: "Quality Inspection", desc: "Rigorous quality checks to ensure every piece meets our high standards of color fastness and finish." },
                  { step: "06", title: "Final Checking", desc: "A thorough final inspection before packaging to guarantee defect-free delivery." },
                  { step: "07", title: "Packaging & Dispatch", desc: "Secure packaging in plastic bags, bundles, or bales with Pan India delivery available." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="glass-panel p-8 rounded-2xl relative transition-all duration-500 hover:shadow-[0_20px_50px_rgba(139,0,0,0.15)]"
                  >
                    <div className="absolute top-4 right-4 text-6xl font-display font-bold text-[#8B0000]/10">{item.step}</div>
                    <h3 className="text-2xl font-display font-bold text-[#8B0000] mb-3">{item.title}</h3>
                    <p className="text-[#5d4037] font-serif leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="w-full flex justify-center py-12">
              <div className="w-2/3">
                <BlockPrintDivider />
              </div>
            </div>

            {/* QUALITY ASSURANCE SECTION */}
            <motion.div
              id="quality"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="scroll-mt-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-5xl font-display font-bold text-[#8B0000] mb-4">Quality <span className="text-gradient-gold">Assurance</span></h2>
                <p className="text-xl text-[#5d4037] font-serif italic">"Excellence is not an act, but a habit — practised for 50 years"</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: "✅", title: "Strict Quality Checks", desc: "Every piece undergoes thorough inspection at each stage of the printing process." },
                  { icon: "🎨", title: "High Color Fastness", desc: "Our prints are designed to last — colors remain vibrant even after multiple washes." },
                  { icon: "⭐", title: "Top-Notch Dyeing", desc: "Premium-grade dyeing and pigmentation techniques ensure consistent, superior results." },
                  { icon: "🔄", title: "Reprint & Replacement", desc: "In the rare case of defects, we offer reprint or replacement to maintain your trust." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="glass-panel p-8 rounded-2xl flex items-start gap-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(139,0,0,0.15)]"
                  >
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-[#8B0000] mb-2">{item.title}</h3>
                      <p className="text-[#5d4037] font-serif leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="w-full flex justify-center py-12">
              <div className="w-2/3">
                <BlockPrintDivider />
              </div>
            </div>

            {/* FAQ SECTION */}
            <motion.div
              id="faq"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="scroll-mt-20 max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-5xl font-display font-bold text-[#8B0000] mb-4">Frequently Asked <span className="text-gradient-gold">Questions</span></h2>
              </div>
              <div className="space-y-4">
                {[
                  { q: "What is the minimum order quantity (MOQ)?", a: "Our minimum order quantity is 5,000 pieces. However, we may accept smaller orders on a case-by-case basis — please contact us to discuss." },
                  { q: "How long does the printing process take?", a: "Typical turnaround time is around 1 month, depending on the complexity of the design and the printing process involved." },
                  { q: "Do the colors fade after washing?", a: "No. We use high-quality pigments and dyeing techniques that ensure excellent color fastness — your prints will remain vibrant wash after wash." },
                  { q: "Can I bring my own fabric for printing?", a: "Absolutely. We provide printing labour work only — you are welcome to supply your own fabric for printing." },
                  { q: "Do you provide samples before bulk production?", a: "Yes, we offer sampling services before proceeding to bulk production. Sampling charges may apply." },
                  { q: "Is urgent or express delivery available?", a: "Yes, urgent delivery can be arranged depending on our current production schedule. Please contact us in advance to discuss timelines." },
                  { q: "Is custom design chargeable?", a: "Yes, custom design work is chargeable. Our in-house design team can assist you with creating bespoke patterns tailored to your requirements." },
                  { q: "Do you offer international export?", a: "At present, we deliver across India only. International shipping is not yet available, but we are working towards expanding our reach." },
                  { q: "What fabric types do you print on?", a: "We print on cotton, nylon, munga, supernet, and polyester fabrics. Cotton sarees are our primary specialization." },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="glass-panel rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <h3 className="text-lg font-display font-bold text-[#8B0000] pr-4">{item.q}</h3>
                      <motion.span
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#DAA520] text-2xl flex-shrink-0"
                      >
                        ▼
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-[#5d4037] font-serif leading-relaxed">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* CONTACT SECTION */}
          <div id="contact" className="scroll-mt-20 bg-[#8B0000] py-16 mt-20">
            <div className="absolute inset-0 bg-[url('/golden-texture.svg')] bg-[length:100px_100px] opacity-10 pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#FFD700] mb-4">Get In Touch</h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#DAA520]" />
                  <div className="w-2 h-2 rotate-45 bg-[#DAA520]" />
                  <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#DAA520]" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-xl font-display font-bold text-[#FFD700] mb-2">Visit Us</h3>
                  <p className="text-[#ffeeba] font-serif">Mumbai, Maharashtra, India</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">📞</div>
                  <h3 className="text-xl font-display font-bold text-[#FFD700] mb-2">Call Us</h3>
                  <p className="text-[#ffeeba] font-serif">+91 8369132630</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-display font-bold text-[#FFD700] mb-2">WhatsApp</h3>
                  <p className="text-[#ffeeba] font-serif">+91 9967831180</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">✉️</div>
                  <h3 className="text-xl font-display font-bold text-[#FFD700] mb-2">Email Us</h3>
                  <p className="text-[#ffeeba] font-serif">a1.prints@rediffmail.com</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">🕤</div>
                  <h3 className="text-xl font-display font-bold text-[#FFD700] mb-2">Business Hours</h3>
                  <p className="text-[#ffeeba] font-serif">9:30 AM – 6:30 PM</p>
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">🇮🇳</div>
                  <h3 className="text-xl font-display font-bold text-[#FFD700] mb-2">Service Area</h3>
                  <p className="text-[#ffeeba] font-serif">Pan India Delivery</p>
                </div>
              </div>

              <div className="text-center mt-8 pt-8 border-t border-[#FFD700]/20">
                <p className="text-[#DAA520] font-serif">© 2025 A-1 Prints. All Rights Reserved.</p>
              </div>
            </div>
          </div>

          {/* Footer Decorative Border */}
          <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B0000] via-[#FFD700] to-[#8B0000] z-50"></div>
        </div>
      )}
    </>
  );
}
