"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from "lucide-react";

function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("/api/contact/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("Failed to send message. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
                    Message sent successfully! We'll get back to you soon.
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white shadow-sm focus:shadow-md"
                        placeholder="Your Name"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all bg-white shadow-sm focus:shadow-md"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700 ml-1">Subject</label>
                <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/50 backdrop-blur-sm focus:bg-white"
                    placeholder="Inquiry about..."
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">Message</label>
                <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none bg-white/50 backdrop-blur-sm focus:bg-white"
                    placeholder="Your message here..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={submitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50"
            >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    );
}

export default function ContactPage() {
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
                            Get in Touch
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            Contact{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Us
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-6" />
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                            We're Here to Help
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Split Screen Content */}
            <div className="container mx-auto px-6 py-24 bg-white">
                <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">

                    {/* Left Side: Info & Map */}
                    <div className="lg:w-1/2 p-12 bg-gradient-to-br from-gray-50 to-white flex flex-col justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-10">Get in Touch</h2>
                            <div className="space-y-8">
                                {[
                                    { icon: MapPin, title: "Address", content: ["Nissing Public School,", "Buta colony, Nissing, karnal, Haryana"], gradient: "from-blue-500 to-blue-600" },
                                    { icon: Phone, title: "Phone", content: ["+91 9729173399"], gradient: "from-teal-500 to-teal-600" },
                                    { icon: Mail, title: "Email", content: ["npsnissing@gmail.com"], gradient: "from-indigo-500 to-indigo-600" },
                                    { icon: Clock, title: "Office Hours", content: ["Monday - Saturday: 8:00 AM - 4:00 PM", "Sunday: Closed"], gradient: "from-purple-500 to-purple-600" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-6 group cursor-pointer"
                                    >
                                        <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
                                            {item.content.map((line, i) => (
                                                <p key={i} className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12 flex gap-3">
                                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 hover:text-white hover:scale-110 transition-all duration-300"
                                        aria-label={`Social media link ${i + 1}`}
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="mt-12 h-64 rounded-2xl overflow-hidden shadow-inner border border-gray-200"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.688636734674!2d77.3478953150824!3d28.61189598242596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50000000001%3A0x1234567890abcdef!2sSR%20INTERNATIONAL!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(100%)" }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:w-1/2 p-12 relative overflow-hidden bg-white">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50" />
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative z-10"
                        >
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">Send us a Message</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">We'd love to hear from you. Fill out the form below.</p>

                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
