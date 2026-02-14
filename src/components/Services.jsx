import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'Luxury Manicure',
            description: 'Experience elegance with our premium gel and classic manicures.',
            image: "https://images.unsplash.com/photo-1610992015732-2449b0deec24?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: 'Royal Pedicure',
            description: 'Ultimate relaxation for your feet with therapeutic treatments.',
            image: "https://images.unsplash.com/photo-1519415510236-82092cc88462?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: 'Signature Nail Art',
            description: 'Express your unique style with custom-designed masterpieces.',
            image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: 'Essential Nail Care',
            description: 'Professional treatments to maintain strong and healthy nails.',
            image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-primary mb-6 font-serif"
                    >
                        Our Exquisite Services
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-secondary mx-auto rounded-full"
                    ></motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -15 }}
                            className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(75,0,130,0.1)] transition-all duration-500 overflow-hidden group border border-gray-100"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            <div className="p-8 text-center relative">
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-secondary text-primary w-14 h-14 flex items-center justify-center rounded-2xl font-black shadow-xl text-xl border-4 border-white rotate-3 group-hover:rotate-12 transition-transform duration-300">
                                    {index + 1}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-6 font-serif">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light">{service.description}</p>

                                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
                                    <span className="text-secondary font-bold text-sm tracking-widest uppercase cursor-pointer hover:text-primary transition-colors">Learn More →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;

