"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Users } from "lucide-react";

const houses = [
    {
        name: "Aryabhatta House",
        color: "from-blue-500 to-blue-700",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        logo: "🔵",
        description: "Named after the great mathematician, representing excellence in science and mathematics"
    },
    {
        name: "Tagore House",
        color: "from-green-500 to-green-700",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        logo: "🟢",
        description: "Inspired by the Nobel laureate, symbolizing creativity, arts, and literature"
    },
    {
        name: "Gandhi House",
        color: "from-orange-500 to-orange-700",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        logo: "🟠",
        description: "Dedicated to the Father of the Nation, embodying truth, non-violence, and leadership"
    },
    {
        name: "Nehru House",
        color: "from-purple-500 to-purple-700",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        logo: "🟣",
        description: "Named after the first Prime Minister, representing progress, innovation, and vision"
    }
];

export default function SchoolHouses() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-2 bg-yellow-50 rounded-full text-yellow-700 text-sm font-semibold mb-4">
                        House System
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                        Our School{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
                            Houses
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Fostering healthy competition, teamwork, and school spirit through our house system
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {houses.map((house, index) => (
                        <motion.div
                            key={house.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`${house.bgColor} p-8 rounded-2xl shadow-lg border-2 ${house.borderColor} hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${house.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                            
                            <div className="relative z-10">
                                {/* House Logo/Color Indicator */}
                                <div className={`w-20 h-20 bg-gradient-to-br ${house.color} rounded-2xl flex items-center justify-center text-white text-4xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                                    {house.logo}
                                </div>
                                
                                <h3 className={`text-2xl font-bold bg-gradient-to-r ${house.color} bg-clip-text text-transparent mb-4`}>
                                    {house.name}
                                </h3>
                                
                                <p className="text-gray-700 leading-relaxed text-sm mb-6">
                                    {house.description}
                                </p>
                                
                                {/* House Color Bar */}
                                <div className={`h-2 bg-gradient-to-r ${house.color} rounded-full`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
                        <Trophy className="w-8 h-8 text-yellow-500" />
                        <div>
                            <p className="font-bold text-slate-900">Inter-House Competitions</p>
                            <p className="text-sm text-gray-600">Sports, Academics, Arts, and Cultural Events</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

