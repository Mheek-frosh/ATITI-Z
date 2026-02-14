import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Chidinma O.",
            role: "Regular Client",
            text: "Atiti'z Nails is simply the best! The attention to detail is unmatched, and my nails always last for weeks without chipping. The gold foil design was stunning!",
            avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Sarah J.",
            role: "Model",
            text: "I needed perfect nails for a photoshoot, and they delivered beyond my expectations. Professional staff and excellent service every time.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
        },
        {
            name: "Amina K.",
            role: "Business Owner",
            text: "The ambiance is so relaxing. I love coming here to unwind after a long week. It's truly a luxury experience that I look forward to.",
            avatar: "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=200&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 font-serif">Voices of Beauty</h2>
                    <p className="text-gray-500 font-light tracking-wide">Hear from our lovely clients about their Atiti'z experience</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border-b-8 border-secondary hover:shadow-[0_25px_60px_rgba(75,0,130,0.08)] transition-all duration-500 group"
                        >
                            <div className="flex items-center mb-8">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-secondary rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                                    <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full object-cover relative z-10 border-2 border-white shadow-md" />
                                </div>
                                <div className="ml-5">
                                    <h4 className="font-bold text-xl text-gray-900 font-serif">{item.name}</h4>
                                    <p className="text-secondary font-medium text-sm tracking-widest">{item.role}</p>
                                </div>
                            </div>
                            <div className="relative">
                                <span className="absolute -top-4 -left-2 text-6xl text-primary/5 font-serif">“</span>
                                <p className="text-gray-600 italic leading-relaxed relative z-10 text-lg">"{item.text}"</p>
                            </div>
                            <div className="flex gap-1 mt-8">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-secondary text-xl">★</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

