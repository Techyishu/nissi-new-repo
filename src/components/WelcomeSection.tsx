"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function WelcomeSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-semibold mb-4">
                            <Sparkles size={16} />
                            <span>About Our School</span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight">
                            Welcome To Our{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Campus
                            </span>
                        </h2>
                        
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                At Nissing Public School, we believe in nurturing young minds through a holistic approach to education. Our campus provides a vibrant learning environment where students are encouraged to explore, innovate, and excel in all aspects of their development.
                            </p>
                            <p>
                                With state-of-the-art facilities, experienced faculty, and a curriculum designed to foster critical thinking and creativity, we prepare our students to become confident leaders and responsible global citizens. Our commitment to excellence extends beyond academics, encompassing sports, arts, and character building.
                            </p>
                        </div>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Read More
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] lg:h-[600px] w-full"
                    >
                        {/* Decorative background */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                        
                        {/* Main Image */}
                        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/about-hero.png"
                                alt="Students on campus"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                        
                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
                        >
                            <div className="text-3xl font-bold text-blue-600">25+</div>
                            <div className="text-sm text-gray-600 font-medium">Years of Excellence</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
