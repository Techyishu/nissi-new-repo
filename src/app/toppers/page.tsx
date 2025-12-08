"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePageContent } from "@/hooks/usePageContent";

const defaultContent = {
    hero: {
        title: "Toppers",
        subtitle: "Celebrating Academic Excellence"
    },
    description: "We take immense pride in celebrating the academic excellence of our students. Our toppers exemplify dedication, hard work, and the pursuit of knowledge. They inspire their peers and set benchmarks for future generations.",
    achievements: [
        {
            title: "Board Examinations",
            description: "Outstanding performers in CBSE board examinations across all streams - Science, Commerce, and Arts.",
            icon: "📚"
        },
        {
            title: "Competitive Exams",
            description: "Students who have excelled in national-level competitive examinations and Olympiads.",
            icon: "🏆"
        },
        {
            title: "Scholarship Recipients",
            description: "Meritorious students who have earned scholarships and recognition for their academic achievements.",
            icon: "🎓"
        }
    ],
    cta: {
        title: "Be Our Next Success Story",
        description: "Join Nissing Public School and become part of a legacy of academic excellence. With dedicated faculty, comprehensive support, and a nurturing environment, your success is our mission.",
        buttonText: "Apply for Admission"
    }
};

export default function ToppersPage() {
    const { content, loading } = usePageContent('toppers');
    
    const heroContent = content.hero || defaultContent.hero;
    const description = content.description || defaultContent.description;
    const achievements = content.achievements || defaultContent.achievements;
    const cta = content.cta || defaultContent.cta;

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
                            Excellence
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                {heroContent.title}
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-6" />
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                            {heroContent.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Toppers Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Achievement Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {achievements.map((category: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{category.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
                        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {cta.description}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-yellow-500/50"
                        >
                            {cta.buttonText}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
