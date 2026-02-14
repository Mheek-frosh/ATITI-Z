import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Products = () => {
    const { addToCart } = useCart();

    const products = [
        {
            name: "Luxury Gel Polish Set",
            price: "₦12,000",
            image: "https://images.unsplash.com/photo-1632345033839-21c73b2f3d39?q=80&w=400&auto=format&fit=crop"
        },
        {
            name: "Custom Press-on Nails",
            price: "₦8,000",
            image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=400&auto=format&fit=crop"
        },
        {
            name: "Cuticle Oil & Care Kit",
            price: "₦5,000",
            image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=400&auto=format&fit=crop"
        },
        {
            name: "Nail Art Brushes",
            price: "₦4,500",
            image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba496?q=80&w=400&auto=format&fit=crop"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="products" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-primary mb-4 font-serif"
                    >
                        Shop Our Collection
                    </motion.h2>
                    <p className="text-gray-500 font-light tracking-widest uppercase text-xs">Professional Grade Essentials</p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-[32px] mb-6 shadow-xl aspect-square border-4 border-gray-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="bg-white text-primary font-black py-3 px-8 rounded-full hover:bg-secondary transition-all transform hover:scale-110 shadow-xl"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors font-serif mb-2">{product.name}</h3>
                            <p className="text-secondary font-black text-lg">{product.price}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
