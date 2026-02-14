import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import w1 from '../assets/w1.png';
import w2 from '../assets/w2.png';
import w3 from '../assets/w3.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        "https://images.unsplash.com/photo-1632345033839-21c73b2f3d39?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba496?q=80&w=1920&auto=format&fit=crop"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-primary pt-28 pb-12 md:pt-44 md:pb-24 text-white relative overflow-hidden min-h-screen flex items-center">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentSlide}
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.45 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        src={slides[currentSlide]}
                        alt="Salon Experience"
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-70">Luxury Experience</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl xl:text-9xl font-black mb-6 md:mb-8 leading-[0.9] font-serif tracking-tight"
                    >
                        Pure <span className="text-secondary italic">Artistry</span> <br />
                        For Your <br />
                        <span className="relative inline-block">
                            Hands
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base md:text-xl text-white/60 mb-10 md:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
                    >
                        Where precision meets passion. We don't just paint nails; we curate your personal signature. Experience the Atiti'z difference.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6"
                    >
                        <Link to="/book">
                            <button className="w-full sm:w-auto bg-secondary text-primary font-black py-4 md:py-5 px-10 md:px-12 rounded-2xl hover:bg-white transition-all duration-500 shadow-2xl shadow-secondary/20 flex items-center justify-center gap-3 group">
                                Reserve Your Spot
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </Link>
                        <a href="#services">
                            <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-bold py-5 px-12 rounded-2xl hover:bg-white/10 transition-all duration-500 backdrop-blur-md">
                                Explore Services
                            </button>
                        </a>
                    </motion.div>
                </div>

                <div className="lg:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative z-10"
                    >
                        {/* Main Floating Image (w1) */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-20 w-64 h-80 md:w-[450px] md:h-[600px] rounded-[40px] md:rounded-[60px] overflow-hidden border-8 border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] bg-primary mx-auto"
                        >
                            <img src={w1} alt="Nail Masterpiece" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" />
                        </motion.div>

                        {/* Floating Asset w2 */}
                        <motion.div
                            animate={{ x: [0, 15, 0], y: [0, 10, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 md:-top-20 md:-right-20 w-28 h-28 md:w-64 md:h-64 rounded-[30px] md:rounded-[40px] overflow-hidden border-4 border-white/10 shadow-2xl z-30"
                        >
                            <img src={w2} alt="Client Delight" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Floating Asset w3 */}
                        <motion.div
                            animate={{ x: [0, -10, 0], y: [0, -15, 0], rotate: [0, -5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 md:-bottom-16 md:-left-16 w-24 h-24 md:w-56 md:h-56 rounded-[24px] md:rounded-[30px] overflow-hidden border-4 border-white/10 shadow-2xl z-30 bg-primary"
                        >
                            <img src={w3} alt="Intricate Art" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Stats Badge */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="absolute bottom-12 -right-12 bg-white p-6 rounded-3xl shadow-2xl z-40 hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-secondary/10 rounded-2xl">
                                    <span className="text-3xl">✨</span>
                                </div>
                                <div className="text-primary">
                                    <p className="font-black text-2xl leading-none">5k+</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Happy Nails</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Decorative Blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;


