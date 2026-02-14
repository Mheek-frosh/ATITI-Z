import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { IoCartOutline, IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { setIsCartOpen, cart } = useCart();
    const location = useLocation();

    const isHome = location.pathname === '/';

    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 top-0 start-0 border-b border-gray-100">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-6 md:px-10">
                <Link to="/" className="flex items-center space-x-3">
                    <span className="self-center text-2xl font-black whitespace-nowrap text-primary font-serif tracking-tighter italic">ATITI'Z</span>
                </Link>

                <div className="flex md:order-2 items-center gap-4">
                    {/* Cart Trigger */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
                    >
                        <IoCartOutline className="text-2xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-secondary text-primary text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <Link to="/book">
                        <button className="hidden md:block bg-primary text-white font-bold py-2.5 px-6 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300 shadow-lg shadow-primary/20">
                            Book Now
                        </button>
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 text-primary rounded-lg md:hidden hover:bg-primary/5"
                    >
                        {isOpen ? <IoClose className="text-2xl" /> : <IoMenu className="text-2xl" />}
                    </button>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 font-bold md:space-x-10 md:flex-row text-gray-600">
                        <li>
                            <Link to="/" className={`block py-2 px-3 rounded md:p-0 hover:text-primary transition-colors ${isHome ? 'text-primary' : ''}`}>Home</Link>
                        </li>
                        <li>
                            <a href={isHome ? "#services" : "/#services"} className="block py-2 px-3 rounded md:p-0 hover:text-primary transition-colors">Services</a>
                        </li>
                        <li>
                            <a href={isHome ? "#about" : "/#about"} className="block py-2 px-3 rounded md:p-0 hover:text-primary transition-colors">Our Story</a>
                        </li>
                        <li className="md:hidden">
                            <Link to="/book" className="block py-2 px-3 text-secondary">Book Appointment</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

