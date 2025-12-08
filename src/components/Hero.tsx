"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: GraduationCap,
        title: "Scholarship Facility",
        description: "Financial aid for deserving students",
        gradient: "from-blue-600 to-blue-700",
    },
    {
        icon: Users,
        title: "Skilled Lecturers",
        description: "Learn from the best educators",
        gradient: "from-teal-600 to-teal-700",
    },
    {
        icon: BookOpen,
        title: "Book Library & Store",
        description: "Vast collection of resources",
        gradient: "from-indigo-600 to-indigo-700",
    },
];

export default function Hero() {
    return (
        <section className="relative mt-[120px]">
            {/* Main Hero Content */}
            <div className="relative w-full h-[600px] lg:h-[750px] flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/home-hero.png"
                        alt="Campus Background"
                        fill
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-teal-600/20 animate-pulse" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="inline-block"
                        >
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold text-yellow-400 border border-yellow-400/30">
                                Excellence in Education Since 1995
                            </span>
                        </motion.div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-serif">
                            Empowering the{" "}
                            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                                Next Generation
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light">
                            Cultivating excellence, creativity, and character in a world-class learning environment designed for the leaders of tomorrow.
                        </p>
                        
                        <div className="pt-4 flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-3"
                            >
                                Start A Course
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base border border-white/30 hover:border-white/50 transition-all duration-300"
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Overlapping Features Bar */}
            <div className="relative z-20 -mt-20 container mx-auto px-4 lg:px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`relative bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group`}
                        >
                            {/* Decorative background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                            </div>
                            
                            <div className="relative z-10 flex items-start gap-6">
                                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-white/90 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                            
                            {/* Hover effect border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
