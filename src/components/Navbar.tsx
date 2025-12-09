"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Menu, X, Phone, Mail, MapPin,
    Facebook, Twitter, Instagram, Linkedin
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Facilities", href: "/facilities" },
        { name: "Activities", href: "/activities" },
        { name: "Gallery", href: "/gallery" },
        { name: "Toppers", href: "/toppers" },
        { name: "Staff", href: "/staff" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="w-full font-sans fixed top-0 left-0 right-0 z-50">
            {/* Top Bar */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-2.5 text-xs md:text-sm hidden lg:block border-b border-white/5"
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <MapPin size={13} className="text-yellow-400 shrink-0" />
                            <span className="text-gray-300">Nissing Public School, Buta colony, Nissing, karnal, Haryana</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={13} className="text-yellow-400 shrink-0" />
                            <span className="text-gray-300">npsnissing@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={13} className="text-yellow-400 shrink-0" />
                            <span className="text-gray-300">+91 9729173399</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                                    aria-label={`Social media link ${i + 1}`}
                                >
                                    <Icon size={12} className="group-hover:scale-110 transition-transform" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Main Navbar */}
            <motion.div
                initial={{ y: 0 }}
                animate={{
                    backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 1)",
                    backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
                    boxShadow: isScrolled ? "0 4px 24px rgba(0, 0, 0, 0.08)" : "0 1px 3px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ duration: 0.3 }}
                className="relative z-50"
            >
                <div className="w-full px-2 md:px-3 lg:px-4 xl:px-6 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
                            <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-transform duration-300 group-hover:scale-105 shrink-0">
                                <Image
                                    src="/images/WhatsApp Image 2025-12-06 at 16.27.15.jpeg"
                                    alt="Nissing Public School"
                                    fill
                                    className="object-contain rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-slate-800 group-hover:text-yellow-600 transition-colors duration-300 whitespace-nowrap leading-tight">
                                    Nissing Public School
                                </span>
                                <span className="text-[10px] md:text-xs lg:text-sm text-slate-600 font-medium whitespace-nowrap leading-tight">
                                    Empowering the Next Generation
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-semibold text-slate-800 hover:text-yellow-600 transition-colors duration-300 group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-red-600 group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 text-slate-900 flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-[101] overflow-y-auto lg:hidden shadow-2xl"
                        >
                            <div className="p-8 space-y-2">
                                <div className="flex items-center justify-end mb-8">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X size={22} />
                                    </button>
                                </div>
                                
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 text-lg font-semibold text-white rounded-xl hover:bg-white/10 hover:text-yellow-400 transition-all duration-300 border-b border-white/5"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
