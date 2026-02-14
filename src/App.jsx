import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Promotions from './components/Promotions';
import About from './components/About';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Booking from './pages/Booking';
import CartDrawer from './components/CartDrawer';
import WhatsAppWidget from './components/WhatsAppWidget';

const Landing = () => (
    <>
        <Hero />
        <Promotions />
        <Services />
        <Gallery />
        <Products />
        <About />
        <Testimonials />
    </>
);

function App() {
    return (
        <CartProvider>
            <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/book" element={<Booking />} />
                </Routes>
                <Footer />
                <CartDrawer />
                <WhatsAppWidget />
            </div>
        </CartProvider>
    );
}

export default App;

