"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, ArrowRight, FileText, UserCheck, GraduationCap } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Submit Application",
        description: "Fill out the online application form with student details and academic records.",
        icon: FileText
    },
    {
        id: 2,
        title: "Interaction / Test",
        description: "Schedule an interaction session or entrance test depending on the grade level.",
        icon: UserCheck
    },
    {
        id: 3,
        title: "Enrollment & Fee",
        description: "Complete the admission formalities and submit the fee to secure the seat.",
        icon: GraduationCap
    }
];

const faqs = [
    {
        question: "What is the age criteria for admission?",
        answer: "For Nursery, the child should be 3+ years as of 31st March of the academic year. For Grade 1, the age should be 6+ years."
    },
    {
        question: "Do you offer transport facilities?",
        answer: "Yes, we have a fleet of GPS-enabled buses covering all major routes in the city and nearby areas."
    },
    {
        question: "Is there an entrance exam?",
        answer: "For Grade 1 and above, there is a basic proficiency test in English and Mathematics to understand the child's learning level."
    },
    {
        question: "What is the student-teacher ratio?",
        answer: "We maintain a healthy student-teacher ratio of 25:1 to ensure personalized attention for every child."
    }
];

export default function AdmissionsPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                            Apply Now
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Admissions
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-6" />
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                            Join the Nissing Public School Family
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Admission Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A simple and transparent journey to becoming part of the Nissing Public School family.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Progress Bar */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Icon Marker */}
                                <div className="absolute left-8 md:left-1/2 top-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full border-4 border-white z-10 transform -translate-x-1/2 flex items-center justify-center text-white shadow-xl">
                                    <step.icon size={28} />
                                </div>

                                {/* Content */}
                                <div className="ml-20 md:ml-0 md:w-1/2 pt-2 md:pt-0 md:px-12 text-left md:text-right">
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}
                                    >
                                        <span className="text-blue-600 font-bold text-lg mb-2 block">Step 0{step.id}</span>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </motion.div>
                                </div>
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-gray-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                                >
                                    <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                                    <ChevronDown
                                        className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="bg-white"
                                        >
                                            <div className="p-6 text-gray-600 leading-relaxed border-t border-gray-100">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky Apply Button */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="fixed bottom-8 right-8 z-40"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center gap-3 group"
                >
                    Apply Now
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </motion.div>
        </main>
    );
}
