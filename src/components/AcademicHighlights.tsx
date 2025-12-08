"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Microscope, Palette, Dumbbell, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const highlights = [
    {
        title: "STEM Excellence",
        icon: Microscope,
        image: "/images/academics-hero.png",
        description: "State-of-the-art labs and robotics programs fostering innovation.",
        category: "Science",
        badge: "Top Rated",
        gradient: "from-blue-500 to-blue-600",
    },
    {
        title: "Creative Arts",
        icon: Palette,
        image: "/images/activities-hero.png",
        description: "Nurturing expression through visual arts, music, and drama.",
        category: "Arts",
        badge: "Featured",
        gradient: "from-purple-500 to-purple-600",
    },
    {
        title: "Athletics Program",
        icon: Dumbbell,
        image: "/images/facilities-hero.png",
        description: "Championing teamwork, discipline, and physical well-being.",
        category: "Sports",
        badge: "Popular",
        gradient: "from-green-500 to-green-600",
    },
    {
        title: "Global Leadership",
        icon: ArrowRight,
        image: "/images/about-hero.png",
        description: "Preparing students for global challenges and leadership.",
        category: "Leadership",
        badge: "New",
        gradient: "from-indigo-500 to-indigo-600",
    }
];

export default function AcademicHighlights() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div>
                        <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-semibold mb-4">
                            Our Programs
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                            Academic{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Highlights
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg">Discover our world-class programs</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                
                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1.5 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold rounded-lg shadow-lg backdrop-blur-sm`}>
                                        {item.badge}
                                    </span>
                                </div>
                                
                                {/* Category */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                                            <item.icon size={20} className="text-white" />
                                        </div>
                                        <span className="text-white/90 text-sm font-semibold">{item.category}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
