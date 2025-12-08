"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Admissions", href: "/admissions" },
        { name: "Academics", href: "/academics" },
        { name: "Facilities", href: "/facilities" },
        { name: "Activities", href: "/activities" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/WhatsApp Image 2025-12-06 at 16.27.15.jpeg"
                                    alt="Nissing Public School Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-serif font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                                Nissing Public School
                            </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Empowering students to become global leaders through excellence in education and character development.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500 hover:scale-110 transition-all duration-300 group"
                                    aria-label={`Social media link ${i + 1}`}
                                >
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-4 transition-all duration-300" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300 group">
                                <MapPin size={18} className="text-yellow-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm leading-relaxed">
                                    Nissing Public School,<br />
                                    Buta colony, Nissing, karnal, Haryana
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300 group">
                                <Phone size={18} className="text-yellow-400 shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="tel:+919729173399" className="hover:text-yellow-400 transition-colors">
                                    +91 9729173399
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300 group">
                                <Mail size={18} className="text-yellow-400 shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="mailto:npsnissing@gmail.com" className="hover:text-yellow-400 transition-colors text-sm">
                                    npsnissing@gmail.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h4 className="text-lg font-bold mb-6 text-white">Stay Updated</h4>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            Subscribe to our newsletter for the latest updates and news.
                        </p>
                        <form className="flex flex-col gap-3">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Nissing Public School. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
