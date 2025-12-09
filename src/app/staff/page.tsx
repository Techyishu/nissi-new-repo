"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StaffPage() {
    const [staff, setStaff] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await fetch("/api/staff");
                const data = await response.json();
                setStaff(data.staff || []);
            } catch (error) {
                console.error("Error fetching staff:", error);
                setStaff([]);
            } finally {
                setLoading(false);
            }
        };

        fetchStaff();
    }, []);

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
            <section className="pt-24 pb-20 bg-gradient-to-b from-yellow-50 via-white to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="inline-block px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 text-sm font-semibold mb-6">
                            Our Team
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
                                Our Staff
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto rounded-full mb-6" />
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                            The Pillars of Our Institution
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Staff Content */}
            <div className="container mx-auto px-6 py-20">
                {staff.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-600 text-lg">No staff members added yet. Content will be displayed here once added from the admin panel.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {staff.map((member: any, index: number) => (
                            <motion.div
                                key={member.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    {member.image_url && (
                                        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                                            <Image
                                                src={member.image_url}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-yellow-600 transition-colors text-center">{member.name}</h3>
                                    {member.designation && (
                                        <p className="text-blue-600 font-semibold mb-3 text-center">{member.designation}</p>
                                    )}
                                    {member.qualification && (
                                        <p className="text-sm text-gray-600 mb-2 text-center">{member.qualification}</p>
                                    )}
                                    {member.experience && (
                                        <p className="text-sm text-gray-600 mb-4 text-center">Experience: {member.experience}</p>
                                    )}
                                    {member.bio && (
                                        <p className="text-gray-600 leading-relaxed text-center">{member.bio}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
