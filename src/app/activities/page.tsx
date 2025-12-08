"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const defaultActivities = [
    {
        title: "Sports & Athletics",
        description: "From cricket and football to basketball and athletics, our sports programs promote physical fitness, teamwork, and sportsmanship. Regular inter-school competitions and annual sports meets keep the competitive spirit alive.",
        icon: "🏆"
    },
    {
        title: "Cultural Events",
        description: "Annual day celebrations, cultural festivals, and talent shows provide platforms for students to showcase their artistic abilities in music, dance, drama, and fine arts.",
        icon: "🎭"
    },
    {
        title: "Educational Tours",
        description: "Field trips to historical sites, science centers, and industries enhance learning beyond the classroom, providing real-world context to academic concepts.",
        icon: "🚌"
    },
    {
        title: "Clubs & Societies",
        description: "Debate club, science club, literary society, and environmental club offer students opportunities to pursue their interests and develop leadership skills.",
        icon: "👥"
    },
    {
        title: "Community Service",
        description: "Regular community outreach programs and social service initiatives instill values of empathy, responsibility, and civic engagement in our students.",
        icon: "❤️"
    },
    {
        title: "Competitions",
        description: "We encourage participation in various inter-school competitions including Olympiads, quizzes, debates, and creative writing contests to challenge and inspire excellence.",
        icon: "🏅"
    }
];

const defaultGalleryImages = [
    "/images/mov_7181-YbNvjR4LjLsaMPjN.jpg",
    "/images/whatsapp-image-2024-12-11-at-09.39.58_cfab3f28-AoPvjXEbpZuapNXx.jpg",
    "/images/whatsapp-image-2024-12-09-at-17.54.00_9cb5ef76-ALpnK42Wvns3O2lK.jpg"
];

export default function ActivitiesPage() {
    const [activities, setActivities] = useState<any[]>([]);
    const [galleryImages, setGalleryImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [activitiesRes, galleryRes] = await Promise.all([
                    fetch("/api/activities"),
                    fetch("/api/gallery")
                ]);
                
                const activitiesData = await activitiesRes.json();
                const galleryData = await galleryRes.json();
                
                if (activitiesData.activities && activitiesData.activities.length > 0) {
                    setActivities(activitiesData.activities);
                } else {
                    setActivities(defaultActivities);
                }
                
                if (galleryData.images && galleryData.images.length > 0) {
                    setGalleryImages(galleryData.images.slice(0, 3).map((img: any) => img.image_url));
                } else {
                    setGalleryImages(defaultGalleryImages);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setActivities(defaultActivities);
                setGalleryImages(defaultGalleryImages);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
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
                            Student Life
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Activities
                            </span>
                        </h1>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full mb-6" />
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                            Beyond the Classroom
                        </p>
                    </motion.div>
                </div>
            </section>

            {loading ? (
                <div className="container mx-auto px-6 py-20 text-center">
                    <div className="text-xl">Loading...</div>
                </div>
            ) : (
                <>
                    {/* Activities Grid */}
                    <div className="container mx-auto px-6 py-20 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {activities.map((activity: any, index: number) => (
                                <motion.div
                                    key={activity.id || index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10">
                                        <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{activity.icon || "📋"}</div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{activity.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Image Gallery Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-20"
                        >
                            <div className="text-center mb-12">
                                <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-4">
                                    Gallery
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Activity Highlights</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {galleryImages.map((src: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -8 }}
                                className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group"
                            >
                                <Image
                                    src={src}
                                    alt={`Activity ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </main>
    );
}
