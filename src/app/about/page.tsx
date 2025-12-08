"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { History, Target, Eye, Award, Users, BookOpen } from "lucide-react";

const timelineEvents = [
    { year: "1995", title: "Foundation", description: "Established with a vision to provide quality education to the community." },
    { year: "2005", title: "Expansion", description: "Added new wings for Science and Arts, expanding our capacity to 1000 students." },
    { year: "2015", title: "International Tie-ups", description: "Partnered with global institutions to offer exchange programs and international curriculum." },
    { year: "2023", title: "Digital Transformation", description: "Implemented smart classrooms and a fully digital learning management system." },
];

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <main className="min-h-screen bg-white overflow-hidden mt-[120px]" ref={containerRef}>
            {/* Typographic Hero Section */}
            <section className="pt-24 pb-20 bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-6">
                            Our Story
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            About{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Us
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-6" />
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                            Nurturing Minds, Building Character, Shaping Futures
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Zig-Zag History Section */}
            <section className="py-24 bg-white container mx-auto px-6">
                <div className="space-y-32">
                    {/* Block 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 space-y-6"
                        >
                            <div className="flex items-center gap-4 text-blue-600 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <History size={24} />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest">Our Legacy</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">A Tradition of Excellence</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Founded with a vision to provide world-class education, Nissing Public School has been a beacon of learning and excellence. Our journey began with a humble commitment to nurture young minds and has grown into a premier institution known for its holistic approach to education.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-3xl blur-xl" />
                            <Image src="/images/about-hero.png" alt="History" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                    </div>

                    {/* Block 2 (Swapped) */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 space-y-6"
                        >
                            <div className="flex items-center gap-4 text-teal-600 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center">
                                    <Target size={24} />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-widest">Our Mission</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Empowering Future Leaders</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To nurture well-rounded individuals prepared for future challenges. We strive to create a nurturing atmosphere that emphasizes learning and exploration, complemented by comprehensive facilities. We believe in fostering curiosity, creativity, and critical thinking in every student.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                            <Image src="/images/academics-hero.png" alt="Mission" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        </motion.div>
                    </div>
                </div>
            </section>

        </main>
    );
}
