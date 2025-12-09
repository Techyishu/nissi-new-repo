"use client";

import { motion } from "framer-motion";
import { Users, Trophy, BookOpen, Globe } from "lucide-react";
import Image from "next/image";

const stats = [
    {
        label: "Trusted by Parents",
        value: "150+",
        icon: Users,
        gradient: "from-blue-500 to-blue-600",
        description: "Families who have entrusted us with their children's education.",
    },
    {
        label: "Proven Success",
        value: "15",
        icon: Trophy,
        gradient: "from-yellow-500 to-yellow-600",
        description: "Personalized attention for every student's growth.",
    },
    {
        label: "Academic Programs",
        value: "25+",
        icon: BookOpen,
        gradient: "from-teal-500 to-teal-600",
        description: "Comprehensive curriculum designed for holistic development.",
    },
    {
        label: "Nationalities",
        value: "40+",
        icon: Globe,
        gradient: "from-indigo-500 to-indigo-600",
        description: "A diverse community fostering global perspectives.",
    },
];

export default function Stats() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[650px]">
                    {/* Large Image Tile */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group h-[400px] md:h-full shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent z-10" />
                        <Image
                            src="/images/WhatsApp Image 2025-12-08 at 20.58.40.jpeg"
                            alt="Student Life"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute bottom-8 left-8 right-8 z-20 text-white">
                            <div className="inline-block px-3 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-full text-yellow-300 text-xs font-semibold mb-4 border border-yellow-400/30">
                                Campus Life
                            </div>
                            <h3 className="text-3xl font-bold mb-3 leading-tight">
                                Life at Nissing Public School
                            </h3>
                            <p className="text-gray-200 leading-relaxed">
                                Experience a vibrant community dedicated to holistic growth.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                                
                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                        <stat.icon size={28} className="text-white" />
                                    </div>
                                    <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-3">
                                        {stat.value}
                                    </h4>
                                    <p className="text-lg font-semibold text-gray-800 mb-3">
                                        {stat.label}
                                    </p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
