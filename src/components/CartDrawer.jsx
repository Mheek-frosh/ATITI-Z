import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { IoClose, IoTrashOutline, IoAdd, IoRemove } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

const CartDrawer = () => {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

    const handleCheckout = () => {
        const phoneNumber = "2348072222291";
        let message = "New Order from Atiti'z Nails Site:\n\n";
        cart.forEach(item => {
            message += `• ${item.name} (${item.quantity}x) - ${item.price}\n`;
        });
        message += `\nTotal: ₦${totalPrice.toLocaleString()}\n\nThank you!`;

        window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[80] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                            <h2 className="text-2xl font-black text-primary font-serif">Your Cart</h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <IoClose className="text-2xl text-gray-400" />
                            </button>
                        </div>

                        {/* Items Section */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                                    <div className="text-6xl mb-4">🛍️</div>
                                    <p className="text-gray-500 font-light">Your cart is currently empty.</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.name} className="flex gap-4 group">
                                        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                                                <p className="text-secondary font-black">{item.price}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center bg-gray-50 rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.name, -1)}
                                                        className="p-1 hover:bg-white hover:shadow-sm rounded transition-all"
                                                    >
                                                        <IoRemove />
                                                    </button>
                                                    <span className="px-3 font-bold text-sm">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.name, 1)}
                                                        className="p-1 hover:bg-white hover:shadow-sm rounded transition-all"
                                                    >
                                                        <IoAdd />
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.name)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <IoTrashOutline className="text-lg" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cart.length > 0 && (
                            <div className="p-8 bg-gray-50 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-500 font-medium">Subtotal</span>
                                    <span className="text-2xl font-black text-primary">₦{totalPrice.toLocaleString()}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-[#25D366] text-white font-black py-4 rounded-2xl hover:bg-[#1fb355] transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-100"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Order via WhatsApp
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4 font-light">
                                    Prices shown are final. Taxes included.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
