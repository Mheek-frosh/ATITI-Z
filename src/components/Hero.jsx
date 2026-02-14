import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="bg-primary pt-24 pb-12 md:pt-32 md:pb-20 text-white relative overflow-hidden min-h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    transition={{ duration: 1.5 }}
                    src="https://images.unsplash.com/photo-1632345033839-21c73b2f3d39?q=80&w=1920&auto=format&fit=crop"
                    alt="Salon Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1 px-4 rounded-full bg-secondary/20 text-secondary border border-secondary/30 mb-6 text-sm font-semibold tracking-widest uppercase"
                    >
                        PREMIUM NAIL CARE
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black mb-6 leading-tight font-serif"
                    >
                        Elevate Your <br />
                        <span className="text-secondary drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)]">Elegance</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-light"
                    >
                        Step into a world of luxury at Atiti'z Nails. Where artistry meets relaxation, and every detail is designed for your perfection.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                    >
                        <button className="bg-secondary text-primary font-bold py-4 px-10 rounded-full hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 shadow-[0_10px_30px_rgba(255,215,0,0.3)]">
                            Book Appointment
                        </button>
                        <button className="bg-transparent border-2 border-white/30 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-primary transition-all duration-300 hover:border-white">
                            View Lookbook
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
                    className="md:w-1/2 flex justify-center relative"
                >
                    {/* Hero Image Composition */}
                    <div className="relative w-80 h-96 md:w-[450px] md:h-[550px]">
                        <div className="absolute -top-6 -right-6 w-full h-full border-2 border-secondary/30 rounded-[40px] transform translate-x-4 -translate-y-4"></div>
                        <img
                            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop"
                            alt="Luxury Manicure"
                            className="w-full h-full object-cover rounded-[40px] shadow-2xl relative z-10 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-white/20"
                        >
                            <div className="bg-secondary/20 p-3 rounded-xl text-secondary">
                                <span className="text-3xl">⭐</span>
                            </div>
                            <div>
                                <div className="font-bold text-primary text-lg">4.9 Rating</div>
                                <div className="text-xs text-gray-500 font-medium">From 1k+ Happy Clients</div>
                            </div>
                        </motion.div>

                        {/* Aesthetic Circles */}
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

