import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.name === product.name);
            if (existingItem) {
                return prevCart.map(item =>
                    item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productName) => {
        setCart((prevCart) => prevCart.filter(item => item.name !== productName));
    };

    const updateQuantity = (productName, delta) => {
        setCart((prevCart) => prevCart.map(item => {
            if (item.name === productName) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const clearCart = () => setCart([]);

    const totalPrice = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[^\d]/g, ''));
        return sum + (price * item.quantity);
    }, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalPrice,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};
