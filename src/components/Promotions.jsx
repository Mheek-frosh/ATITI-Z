import React from 'react';
import { motion } from 'framer-motion';

const Promotions = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=1920&auto=format&fit=crop"
                    alt="Abstract Luxury"
                    className="w-full h-full object-cover opacity-10 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Limited Time</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-12 text-white font-serif tracking-tight">Special Offers</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="bg-white/5 backdrop-blur-xl p-10 rounded-[32px] border border-white/10 hover:border-secondary/50 transition-all duration-500 shadow-2xl group"
                    >
                        <div className="bg-secondary/20 text-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-3xl">✨</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-serif">Summer Glow Package</h3>
                        <p className="mb-8 text-gray-300 font-light leading-relaxed">Experience our signature gold-leaf acrylic set paired with a therapeutic deluxe pedicure.</p>
                        <div className="text-4xl font-black text-secondary mb-8">₦15,000 <span className="text-xl text-gray-500 line-through font-light ml-2">₦20,000</span></div>
                        <button className="w-full bg-secondary text-primary font-black py-4 rounded-2xl hover:bg-white transition-all duration-300 shadow-lg shadow-secondary/10">Claim Offer</button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="bg-white/5 backdrop-blur-xl p-10 rounded-[32px] border border-white/10 hover:border-secondary/50 transition-all duration-500 shadow-2xl group border-l-secondary/20 border-l-4"
                    >
                        <div className="bg-secondary/20 text-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <span className="text-3xl">🎓</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 font-serif">Student Refresh</h3>
                        <p className="mb-8 text-gray-300 font-light leading-relaxed">Keep your style sharp without breaking the bank. Exclusive discount for valid student IDs.</p>
                        <div className="text-4xl font-black text-secondary mb-8">20% OFF</div>
                        <button className="w-full bg-transparent border-2 border-secondary text-secondary font-black py-4 rounded-2xl hover:bg-secondary hover:text-primary transition-all duration-300">Learn More</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Promotions;

