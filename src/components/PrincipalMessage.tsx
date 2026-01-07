"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function PrincipalMessage() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-block px-4 py-2 bg-yellow-50 rounded-full text-yellow-700 text-sm font-semibold mb-4">
                        Leadership
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                        Principal's{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
                            Message
                        </span>
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            {/* Principal Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="md:col-span-1 relative h-[400px] md:h-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-500/20" />
                                <Image
                                    src="/images/WhatsApp Image 2026-01-06 at 15.55.54.jpeg"
                                    alt="Principal"
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                    quality={90}
                                />
                            </motion.div>

                            {/* Message Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center"
                            >
                                <Quote className="w-12 h-12 text-yellow-500 mb-6" />
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    Welcome to Nissing Public School, where we are committed to nurturing young minds and shaping future leaders. Our institution stands as a beacon of excellence, providing a holistic education that combines academic rigor with character development.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                    At Nissing Public School, we believe in fostering an environment where every student can discover their unique potential. Through our activity-based digital learning approach, we ensure that education is not just about memorizing facts, but about understanding, applying, and innovating.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    We are proud of our dedicated faculty, state-of-the-art facilities, and our commitment to creating well-rounded individuals who are prepared to face the challenges of tomorrow with confidence and integrity.
                                </p>
                                <div className="border-t border-gray-200 pt-6">
                                    <p className="font-bold text-slate-900 text-xl">Principal</p>
                                    <p className="text-gray-600">Nissing Public School</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

