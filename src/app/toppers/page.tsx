"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ToppersPage() {
    const [toppers, setToppers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchToppers = async () => {
            try {
                const response = await fetch("/api/toppers");
                const data = await response.json();
                setToppers(data.toppers || []);
            } catch (error) {
                console.error("Error fetching toppers:", error);
                setToppers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchToppers();
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
                            Excellence
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
                                Toppers
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto rounded-full mb-6" />
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                            Celebrating Academic Excellence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Toppers Content */}
            <div className="container mx-auto px-6 py-20">
                {toppers.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">No toppers added yet. Content will be displayed here once added from the admin panel.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {toppers.map((topper: any, index: number) => (
                            <motion.div
                                key={topper.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    {topper.image_url && (
                                        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                                            <Image
                                                src={topper.image_url}
                                                alt={topper.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{topper.name}</h3>
                                    {topper.class && (
                                        <p className="text-yellow-600 font-semibold mb-2">Class: {topper.class}</p>
                                    )}
                                    {topper.percentage && (
                                        <p className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent mb-2">{topper.percentage}</p>
                                    )}
                                    {topper.year && (
                                        <p className="text-gray-600 mb-2">Year: {topper.year}</p>
                                    )}
                                    {topper.achievement && (
                                        <p className="text-gray-600 leading-relaxed">{topper.achievement}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Our Next Success Story</h2>
                        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join Nissing Public School and become part of a legacy of academic excellence. With dedicated faculty, comprehensive support, and a nurturing environment, your success is our mission.
                        </p>
                        <Link href="/admissions">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-yellow-500/50 flex items-center gap-2 mx-auto"
                            >
                                Apply for Admission
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
