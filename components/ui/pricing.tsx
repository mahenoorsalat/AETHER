"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingPlans = [
    {
        name: "Core",
        price: "1,299",
        description: "The essential luxury experience.",
        features: ["Titanium Body", "Sapphire Glass", "Standard Sensors", "2-Year Warranty"],
        cta: "Order Now",
        featured: false,
    },
    {
        name: "Pro",
        price: "1,899",
        description: "Advanced metrics for the athlete.",
        features: ["Carbon Fiber Bezel", "Dual-Band GPS", "Advanced Health+", "Lifetime Support"],
        cta: "Pre-Order Pro",
        featured: true,
    },
    {
        name: "Elite",
        price: "2,499",
        description: "The pinnacle of engineering.",
        features: ["Gold Accents", "Personalized Engraving", "Concierge Service", "Collector's Box"],
        cta: "Contact Concierge",
        featured: false,
    },
];

export function Pricing() {
    const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Ownership</h2>
                    <p className="text-gray-400">Select your timepiece configuration.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={cn(
                                "relative p-8 rounded-3xl border flex flex-col h-full bg-neutral-900/40 backdrop-blur-sm",
                                plan.featured
                                    ? "border-primary/50 shadow-[0_0_50px_-12px_rgba(255,215,0,0.3)] bg-neutral-900/80"
                                    : "border-white/10 hover:border-white/20"
                            )}
                        >
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-yellow-600 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Best Seller
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-medium text-white">{plan.name}</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-sm text-gray-300">
                                        <Check className="w-4 h-4 mr-3 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={cn(
                                    "w-full py-3 rounded-full font-medium transition-all duration-300",
                                    plan.featured
                                        ? "bg-white text-black hover:bg-gray-200"
                                        : "border border-white/20 text-white hover:bg-white/10"
                                )}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
