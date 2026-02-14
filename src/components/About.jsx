import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1629194168233-030990499e1d?q=80&w=800&auto=format&fit=crop"
                                    alt="Atiti'z Nails Salon"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-secondary rounded-full opacity-30"
                            ></motion.div>

                            {/* Floating Secondary Image/Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, delay: 0.5 }}
                                className="absolute -bottom-10 -right-10 w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1610992015762-3ca129302bf0?q=80&w=400&auto=format&fit=crop"
                                    alt="Detail Work"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 font-serif leading-tight">
                            More Than Just a <br />
                            <span className="text-secondary">Nail Appointment</span>
                        </h2>

                        <div className="space-y-6 text-gray-500 font-light text-lg leading-relaxed">
                            <p>
                                At Atiti'z Nails, a subsidiary of Ideas Nigeria Ltd., we believe that beauty is an art form.
                                Our sanctuary was created for those who value precision, luxury, and meticulous care.
                            </p>
                            <p>
                                Our mission is to provide top-tier nail care services that not only enhance your appearance but also boost your confidence.
                                We specialize in bespoke manicures, therapeutic pedicures, and custom nail art, using only the world's finest premium products.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 hover:border-secondary transition-colors group">
                                <span className="block text-4xl font-black text-primary mb-2 group-hover:text-secondary transition-colors">5+</span>
                                <span className="text-sm text-gray-400 font-medium uppercase tracking-widest">Years of Artistry</span>
                            </div>
                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 hover:border-secondary transition-colors group">
                                <span className="block text-4xl font-black text-primary mb-2 group-hover:text-secondary transition-colors">1k+</span>
                                <span className="text-sm text-gray-400 font-medium uppercase tracking-widest">Happy Clients</span>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 bg-primary text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-primary/20 hover:bg-secondary hover:text-primary transition-all duration-300"
                        >
                            Discover More
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

