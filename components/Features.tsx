"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
// import Image from "next/image"

const features = [
    {
        title: "Titanium Grade 5",
        description: "Forged from the same alloy used in aerospace engineering. Lightweight, yet stronger than steel.",
        align: "left",
    },
    {
        title: "Sapphire Crystal",
        description: "Diamond-like hardness ensures distinct clarity and absolute scratch resistance under any condition.",
        align: "right",
    },
    {
        title: "Perpetual Power",
        description: "Advanced solar harvesting concealed within the watch face provides up to 30 days of autonomy.",
        align: "left",
    },
]

export function Features() {
    return (
        <section className="relative w-full bg-background py-32">
            <div className="container mx-auto px-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex min-h-[50vh] flex-col items-center justify-center gap-12 md:flex-row",
                            feature.align === "right" && "md:flex-row-reverse"
                        )}
                    >
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: feature.align === "left" ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-20%" }}
                            className="flex-1 space-y-6 text-center md:text-left"
                        >
                            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
                                {feature.title}
                            </h2>
                            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                                {feature.description}
                            </p>
                        </motion.div>

                        {/* Visual/Image Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true, margin: "-20%" }}
                            className="flex-1"
                        >
                            <div className="glass-card aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl p-1 md:aspect-[4/3]">
                                <div className="h-full w-full rounded-xl bg-gradient-to-br from-secondary/50 to-background" />
                                {/* Real implementation would have <Image /> here */}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}
