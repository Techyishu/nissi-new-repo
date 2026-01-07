"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
    {
        icon: GraduationCap,
        title: "Scholarship Facility",
        description: "Financial aid for deserving students",
        gradient: "from-yellow-500 to-yellow-600",
    },
    {
        icon: Users,
        title: "Skilled Lecturers",
        description: "Learn from the best educators",
        gradient: "from-blue-500 to-blue-600",
    },
    {
        icon: BookOpen,
        title: "Book Library & Store",
        description: "Vast collection of resources",
        gradient: "from-red-600 to-red-700",
    },
];

export default function Hero() {
    return (
        <section className="relative mt-[120px]">
            {/* Main Hero Content */}
            <div className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[750px] flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/WhatsApp Image 2025-12-08 at 20.58.39.jpeg"
                        alt="Campus Background"
                        fill
                        className="object-cover scale-105"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-slate-900/85" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-red-600/20" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="max-w-3xl space-y-4 sm:space-y-6 md:space-y-8"
                    >
                        <div className="inline-block px-4 py-2 bg-yellow-400/20 backdrop-blur-sm rounded-full text-yellow-300 text-sm font-semibold mb-4 border border-yellow-400/30">
                            Activity Based Digital School
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-serif">
                            Empowering the{" "}
                            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                                Next Generation
                            </span>
                        </h1>
                        
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light">
                            Cultivating excellence, creativity, and character in a world-class learning environment designed for the leaders of tomorrow.
                        </p>
                        
                        <div className="pt-2 sm:pt-4 flex flex-wrap gap-3 sm:gap-4">
                            <Link href="/admissions">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center gap-2 sm:gap-3"
                                >
                                    Apply for Admission
                                    <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Overlapping Features Bar */}
            <div className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20 container mx-auto px-4 sm:px-6 lg:px-6 mb-12 sm:mb-16 md:mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`relative bg-gradient-to-br ${feature.gradient} rounded-2xl p-6 sm:p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group`}
                        >
                            {/* Decorative background pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                            </div>
                            
                            <div className="relative z-10 flex items-start gap-4 sm:gap-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0">
                                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">{feature.description}</p>
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
