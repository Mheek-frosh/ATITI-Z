import React from 'react';

const Gallery = () => {
    const images = [
        "https://placehold.co/400x400/4B0082/FFD700?text=Artistic+Nail+Design",
        "https://placehold.co/400x500/333/FFF?text=Modern+Geometric",
        "https://placehold.co/400x400/555/FFF?text=Classic+French",
        "https://placehold.co/400x500/4B0082/FFF?text=Glamorous+Acrylics",
        "https://placehold.co/400x500/222/FFD700?text=Detailed+Art",
        "https://placehold.co/400x400/666/FFF?text=Simple+Elegance"
    ];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Masterpieces</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Browse through our portfolio of exquisite nail designs. Follow us on Instagram for daily inspiration.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
                            <img src={src} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold text-lg">View on Instagram</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="border-2 border-primary text-primary font-bold py-3 px-8 rounded-full hover:bg-primary hover:text-white transition">
                        View More on Instagram
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
