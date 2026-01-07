"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
                videoRef.current.muted = false;
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-yellow-50 rounded-full text-yellow-700 text-sm font-semibold mb-4">
                        Campus Life
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                        Experience{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
                            Our School
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
                        Watch our students in action and see what makes Nissing Public School special
                    </p>
                    <Link href="/gallery">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            View Gallery
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl group"
                >
                    {/* Decorative background */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-3xl blur-xl" />
                    
                    {/* Video */}
                    <div className="relative aspect-video bg-slate-900">
                        <video
                            ref={videoRef}
                            src="/images/WhatsApp Video 2025-12-08 at 20.58.39.mp4"
                            className="w-full h-full object-cover"
                            loop
                            playsInline
                            preload="none"
                            onLoadedData={() => {
                                if (videoRef.current) {
                                    videoRef.current.playbackRate = 1.0;
                                }
                            }}
                            onCanPlay={() => {
                                if (videoRef.current && isPlaying) {
                                    videoRef.current.play();
                                }
                            }}
                        />
                        
                        {/* Overlay when paused */}
                        {!isPlaying && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 flex items-center justify-center">
                                <motion.button
                                    onClick={handlePlayPause}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 flex items-center justify-center shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 group"
                                >
                                    <Play size={32} className="ml-1" fill="currentColor" />
                                </motion.button>
                            </div>
                        )}

                        {/* Play/Pause button overlay when playing */}
                        {isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <motion.button
                                    onClick={handlePlayPause}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 transition-all duration-300"
                                >
                                    {isPlaying ? (
                                        <div className="flex items-center gap-1">
                                            <div className="w-2 h-6 bg-white rounded-sm" />
                                            <div className="w-2 h-6 bg-white rounded-sm" />
                                        </div>
                                    ) : (
                                        <Play size={24} className="ml-1" fill="currentColor" />
                                    )}
                                </motion.button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

