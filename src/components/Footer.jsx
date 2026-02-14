import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold text-secondary mb-4">ATITI'Z</h3>
                        <p className="text-gray-400">
                            Your premier destination for nail care and beauty. Experience the best in manicures, pedicures, and nail art.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Ideas Nigeria Ltd.</li>
                            <li>123 Beauty Lane, Lagos, Nigeria</li>
                            <li>Phone: +234 800 123 4567</li>
                            <li>Email: info@atitiznails.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Atiti'z Nails. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
