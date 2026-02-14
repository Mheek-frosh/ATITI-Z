import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCalendarOutline, IoTimeOutline, IoPersonOutline, IoColorPaletteOutline, IoChevronDown } from 'react-icons/io5';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Luxury Manicure',
        date: '',
        time: '',
    });

    const services = [
        'Luxury Manicure',
        'Royal Pedicure',
        'Signature Nail Art',
        'Essential Nail Care',
        'Acrylic Full Set',
        'Gel Extension Refresh'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "2348072222291";
        const message = `Booking Request from Atiti'z Nails Site:\n\n` +
            `👤 Name: ${formData.name}\n` +
            `📞 Phone: ${formData.phone}\n` +
            `💅 Service: ${formData.service}\n` +
            `📅 Date: ${formData.date}\n` +
            `⏰ Time: ${formData.time}\n\n` +
            `Please confirm availability!`;

        window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-[32px] md:rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row border border-gray-100">

                    {/* Info Side */}
                    <div className="md:w-2/5 bg-primary p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <img src="https://images.unsplash.com/photo-1629194168233-030990499e1d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
                        </div>

                        <div className="relative z-10">
                            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Reserved for You</span>
                            <h1 className="text-4xl font-black font-serif leading-tight mb-8">Elevate Your <span className="text-secondary">Signature</span> Style</h1>
                            <p className="text-primary-foreground/70 font-light leading-relaxed mb-8">
                                Secure your moment of luxury. Our expert technicians are ready to transform your hands and feet into masterpieces.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-3 rounded-2xl"><IoTimeOutline className="text-xl text-secondary" /></div>
                                    <p className="text-sm font-medium">9:00 AM — 7:00 PM</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/10 p-3 rounded-2xl"><IoCalendarOutline className="text-xl text-secondary" /></div>
                                    <p className="text-sm font-medium">Mon — Sat (By Appointment)</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-12 pt-12 border-t border-white/10">
                            <p className="text-xs text-white/50 font-light uppercase tracking-widest leading-relaxed">
                                Satisfaction guaranteed through meticulous artistry and premium care.
                            </p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="md:w-3/5 p-8 md:p-16">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Full Name</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                                        <IoPersonOutline className="text-xl" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl py-4 pl-12 pr-6 transition-all duration-300 font-medium text-gray-800"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">WhatsApp Number</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                                        <span className="font-bold text-sm">#</span>
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        placeholder="080 0000 0000"
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl py-4 pl-12 pr-6 transition-all duration-300 font-medium text-gray-800"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Desired Service</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                                        <IoColorPaletteOutline className="text-xl" />
                                    </div>
                                    <select
                                        name="service"
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl py-4 pl-12 pr-10 transition-all duration-300 font-medium text-gray-800 appearance-none"
                                    >
                                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                                        <IoChevronDown />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Preferred Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl py-4 px-6 transition-all duration-300 font-medium text-gray-800"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">Preferred Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        required
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl py-4 px-6 transition-all duration-300 font-medium text-gray-800"
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-primary text-white font-black py-5 rounded-3xl shadow-xl shadow-primary/20 hover:bg-secondary hover:text-primary transition-all duration-500 mt-4 flex items-center justify-center gap-3 text-lg"
                            >
                                Confirm My Request
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
