"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const images = [
    "/images/WhatsApp Image 2025-12-08 at 20.58.38.jpeg",
    "/images/WhatsApp Image 2025-12-08 at 20.58.39 (1).jpeg",
    "/images/WhatsApp Image 2025-12-08 at 20.58.39.jpeg",
    "/images/WhatsApp Image 2025-12-08 at 20.58.40 (1).jpeg",
    "/images/WhatsApp Image 2025-12-08 at 20.58.40.jpeg",
    "/images/WhatsApp Image 2025-12-08 at 20.58.42 (1).jpeg",
    "/images/WhatsApp Image 2025-12-08 at 20.58.42 (2).jpeg",
    "/images/WhatsApp Image 2025-12-08 at 20.58.42.jpeg",
];

export default function GalleryMarquee() {
    return (
        <section id="gallery" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full text-yellow-700 text-sm font-semibold mb-6">
                        <Camera size={16} />
                        <span>Gallery</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                        Campus{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
                            Life
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Moments that define the Nissing Public School experience.
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient fade edges - transparent to match background */}
                <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent z-20 pointer-events-none" />

                {/* Marquee Animation */}
                <motion.div
                    className="flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...images, ...images].map((src, index) => (
                        <motion.div
                            key={`gallery-${index}`}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="relative w-[280px] sm:w-[320px] md:w-[450px] h-[200px] sm:h-[240px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl shrink-0 group cursor-pointer"
                        >
                            <Image
                                src={src}
                                alt={`Campus Life ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                sizes="(max-width: 768px) 320px, 450px"
                            />
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
