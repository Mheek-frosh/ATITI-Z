import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaRobot, FaUser, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const WhatsAppWidget = () => {
    const { cart } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([]);
    const scrollRef = useRef(null);
    const phoneNumber = "2348072222291";

    // Initial Greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => {
                const greeting = {
                    id: 1,
                    text: "Hi there! ✨ I'm Atiti's Virtual Assistant. How can I help you today? Are you looking to book an appointment or check out your cart?",
                    sender: 'ai'
                };
                setMessages([greeting]);
            }, 500);
        }
    }, [isOpen]);

    // Cart Detection Logic
    useEffect(() => {
        if (isOpen && cart.length > 0 && !messages.find(m => m.tag === 'cart-notice')) {
            setTimeout(() => {
                const itemNames = cart.map(item => item.name).join(', ');
                const cartMessage = {
                    id: Date.now(),
                    text: `I see you have ${itemNames} in your cart! 🛍️ Would you like to proceed with ordering these?`,
                    sender: 'ai',
                    tag: 'cart-notice'
                };
                setMessages(prev => [...prev, cartMessage]);
            }, 1000);
        }
    }, [isOpen, cart]);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (text = inputValue) => {
        if (!text.trim()) return;

        const userMsg = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue("");

        // Package everything and go to WhatsApp after a very short delay for visual feedback
        setTimeout(() => {
            packageAndGo(text);
        }, 800);
    };

    const packageAndGo = (msgText) => {
        let finalMessage = "Hello Atiti'z Nails! 👋\n\n";

        // Include Cart Items if any
        if (cart.length > 0) {
            finalMessage += "*🛍️ MY CURRENT CART:*\n";
            cart.forEach(item => {
                finalMessage += `• ${item.name} (${item.quantity}x)\n`;
            });
            finalMessage += "\n";
        }

        // Include Full Chat History (User messages only)
        const userMessages = messages
            .filter(m => m.sender === 'user')
            .map(m => m.text);

        if (userMessages.length > 0 || msgText) {
            finalMessage += "*💬 MY CONVERSATION HISTORY:*\n";
            userMessages.forEach((msg, index) => {
                finalMessage += `${index + 1}. ${msg}\n`;
            });
            // Add the very last message if it wasn't already in the state (though it usually is by now)
            if (msgText && !userMessages.includes(msgText)) {
                finalMessage += `${userMessages.length + 1}. ${msgText}\n`;
            }
            finalMessage += "\n";
        }

        finalMessage += "I am ready to finalize my order/appointment. Please let me know how to proceed! ✨";

        const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(finalMessage)}`;
        window.location.href = whatsappUrl;
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        className="mb-6 w-[320px] md:w-[380px] bg-white rounded-[32px] shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-primary p-6 text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center border border-white/10 relative">
                                    <FaRobot className="text-secondary" />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Atiti'z Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                        <p className="text-[10px] text-white/60 uppercase tracking-widest font-black">Online</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                                <FaTimes />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div
                            ref={scrollRef}
                            className="h-[350px] overflow-y-auto p-6 space-y-4 bg-gray-50/50"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'ai' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${msg.sender === 'ai'
                                        ? 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                                        : 'bg-primary text-white rounded-tr-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type message and send to WhatsApp..."
                                    className="flex-1 bg-gray-50 border-transparent focus:border-primary focus:ring-0 rounded-xl px-4 py-3 text-sm font-medium"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    className="bg-primary text-white p-3 rounded-xl hover:bg-secondary hover:text-primary transition-all shadow-md group"
                                >
                                    <div className="flex items-center gap-2">
                                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </button>
                            </div>
                            <p className="text-[10px] text-center text-gray-400 mt-3 font-medium">Messages are sent directly to our official WhatsApp line.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-[101]"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                            <FaTimes className="text-2xl" />
                        </motion.div>
                    ) : (
                        <motion.div key="whatsapp" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
                            <FaWhatsapp className="text-3xl" />
                        </motion.div>
                    )}
                </AnimatePresence>
                {!isOpen && (
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
                )}
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
