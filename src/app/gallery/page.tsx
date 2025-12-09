"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GalleryPage() {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("/api/gallery");
                const data = await response.json();
                setImages(data.images || []);
            } catch (error) {
                console.error("Error fetching images:", error);
                setImages([]);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-xl">Loading...</div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white mt-[120px]">
            {/* Typographic Hero Section */}
            <section className="pt-24 pb-20 bg-gradient-to-b from-yellow-50 via-white to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 text-sm font-semibold mb-6">
                            Gallery
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
                                Gallery
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto rounded-full mb-6" />
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                            Capturing Moments of Excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <div className="container mx-auto px-6 py-20 bg-white">
                {images.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">No gallery images added yet. Images will be displayed here once added from the admin panel.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((image: any, index: number) => (
                        <motion.div
                            key={image.id || index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -8 }}
                            className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group cursor-pointer"
                        >
                            <Image
                                src={image.image_url}
                                alt={image.alt_text || `Gallery Image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
