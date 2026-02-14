import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppWidget = () => {
    const phoneNumber = "09034448700";
    const message = encodeURIComponent("Hello Atiti'z Nails! I'd like to place an order or book an appointment.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            className="fixed bottom-8 right-8 z-[60]"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center"
            >
                {/* Ping Animation */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                    <p className="text-gray-800 font-bold text-sm">Order on WhatsApp ✨</p>
                </div>

                {/* Main Button */}
                <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
                    <FaWhatsapp className="text-3xl" />
                </div>
            </a>
        </motion.div>
    );
};

export default WhatsAppWidget;
