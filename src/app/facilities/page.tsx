"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Library, Monitor, FlaskConical, Trophy, Bus, Utensils } from "lucide-react";

const facilities = [
    {
        icon: Library,
        title: "Library & Learning Resource Center",
        description: "A well-stocked library with over 15,000 books, journals, periodicals, and digital resources. Our library provides a quiet, conducive environment for research and study, with dedicated reading areas and computer stations for accessing online databases and e-books."
    },
    {
        icon: Monitor,
        title: "Computer Labs",
        description: "State-of-the-art computer laboratories equipped with the latest hardware and software. High-speed internet connectivity, multimedia projectors, and modern workstations ensure students have access to cutting-edge technology for learning programming, digital design, and research."
    },
    {
        icon: FlaskConical,
        title: "Science Laboratories",
        description: "Fully equipped physics, chemistry, and biology laboratories designed to meet international standards. Our labs feature modern equipment, safety protocols, and hands-on learning opportunities that make scientific concepts come alive through practical experimentation."
    },
    {
        icon: Trophy,
        title: "Sports Complex",
        description: "Extensive sports facilities including a large playground for cricket and football, basketball courts, volleyball courts, and indoor games facilities. We also have a well-maintained athletics track and facilities for table tennis, badminton, and other indoor sports."
    },
    {
        icon: Bus,
        title: "Transport Services",
        description: "Safe and reliable transport facility with GPS-enabled buses covering all major routes in the city and surrounding areas. Our fleet is regularly maintained, and all drivers are trained professionals committed to student safety."
    },
    {
        icon: Utensils,
        title: "Cafeteria & Dining",
        description: "A spacious, hygienic cafeteria serving nutritious and balanced meals. Our kitchen follows strict hygiene standards and offers a variety of healthy food options. The dining area provides a comfortable space for students to enjoy their meals and socialize."
    }
];

export default function FacilitiesPage() {
    return (
        <main className="min-h-screen bg-white mt-[120px]">
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
                            Infrastructure
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            Our{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Facilities
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-6" />
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                            Modern Classrooms, Labs, and Vibrant Play Areas
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Facilities Grid */}
            <div className="container mx-auto px-6 py-20 bg-white">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At Nissing Public School, we believe that excellent facilities are fundamental to quality education. Our campus is equipped with modern infrastructure designed to support comprehensive learning and holistic development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                    {facilities.map((facility, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                                    <facility.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {facility.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {facility.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Facilities Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Additional Amenities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Smart Classrooms with Interactive Boards",
                                "Medical Room with First Aid",
                                "Security & CCTV Surveillance",
                                "Wi-Fi Enabled Campus",
                                "Auditorium for Events",
                                "Art & Music Rooms",
                                "Prayer Hall",
                                "Parking Facilities"
                            ].map((amenity, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform" />
                                    <span className="text-gray-200 group-hover:text-yellow-400 transition-colors">{amenity}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
