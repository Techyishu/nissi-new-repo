"use client";

import { motion } from "framer-motion";
import { Shirt, Snowflake, Sun } from "lucide-react";

export default function UniformSection() {
    const uniforms = [
        {
            season: "Summer",
            icon: Sun,
            color: "from-yellow-500 to-orange-500",
            items: [
                "Light blue shirt with school logo",
                "Navy blue shorts/trousers",
                "White socks with school logo",
                "Black leather shoes",
                "School tie (optional)"
            ]
        },
        {
            season: "Winter",
            icon: Snowflake,
            color: "from-blue-500 to-indigo-600",
            items: [
                "Navy blue blazer with school emblem",
                "White full-sleeve shirt",
                "Navy blue trousers/skirt",
                "Navy blue sweater/cardigan",
                "Black leather shoes",
                "School tie (mandatory)"
            ]
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100/20 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-yellow-50 rounded-full text-yellow-700 text-sm font-semibold mb-4">
                        Dress Code
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                        School{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
                            Uniform
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Our uniform policy ensures a sense of unity, discipline, and pride among our students
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {uniforms.map((uniform, index) => (
                        <motion.div
                            key={uniform.season}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${uniform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                            
                            <div className="relative z-10">
                                <div className={`w-16 h-16 bg-gradient-to-br ${uniform.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                    <uniform.icon size={32} />
                                </div>
                                
                                <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                                    {uniform.season} Uniform
                                </h3>
                                
                                <ul className="space-y-3">
                                    {uniform.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${uniform.color} mt-2 shrink-0`} />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 text-sm">
                        <strong>Note:</strong> All uniforms must be purchased from the authorized school supplier. 
                        For more details, please contact the school administration.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

