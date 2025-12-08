"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePageContent } from "@/hooks/usePageContent";

const defaultContent = {
    hero: {
        title: "Our Staff",
        subtitle: "The Pillars of Our Institution"
    },
    description: "Our faculty members are the cornerstone of our educational excellence. With years of experience, advanced qualifications, and a passion for teaching, they create an inspiring learning environment that nurtures every student's potential.",
    categories: [
        { title: "Senior Faculty", count: "25+", description: "Experienced educators with advanced degrees" },
        { title: "Subject Specialists", count: "40+", description: "Experts in their respective fields" },
        { title: "Support Staff", count: "30+", description: "Dedicated administrative and support team" },
        { title: "Counselors", count: "5+", description: "Student guidance and career counseling" }
    ],
    highlights: [
        {
            title: "Qualified & Experienced",
            description: "All our teachers hold advanced degrees in their subjects and undergo regular professional development to stay updated with the latest teaching methodologies.",
            icon: "🎓"
        },
        {
            title: "Student-Centered Approach",
            description: "Our faculty focuses on individual attention, understanding each student's learning style and providing personalized guidance for academic success.",
            icon: "👨‍🏫"
        },
        {
            title: "Innovative Teaching Methods",
            description: "We employ modern teaching techniques including interactive sessions, project-based learning, and technology-integrated classrooms to make learning engaging and effective.",
            icon: "💡"
        }
    ]
};

export default function StaffPage() {
    const { content, loading } = usePageContent('staff');
    
    const heroContent = content.hero || defaultContent.hero;
    const description = content.description || defaultContent.description;
    const categories = content.categories || defaultContent.categories;
    const highlights = content.highlights || defaultContent.highlights;

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
                            Our Team
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

            {/* Staff Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Faculty Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {categories.map((category: any, index: number) => (
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
                                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">{category.count}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{category.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Faculty Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((highlight: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{highlight.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{highlight.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
