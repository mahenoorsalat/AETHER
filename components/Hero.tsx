"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { ArrowDown, Watch } from "lucide-react"

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50])
    // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]) // Subtle scale for background if needed

    return (
        <div ref={targetRef} className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Shader */}
            <div className="absolute inset-0 z-0">
                <ShaderAnimation />
                <div className="absolute inset-0 bg-black/60 pointer-events-none" /> {/* Overlay for readability */}
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">

                {/* Main Content */}
                <motion.div
                    style={{ opacity, y: textY }}
                    className="flex flex-col items-center text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur-md">
                            2026 Collection
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="mt-8 font-serif text-6xl font-bold tracking-tight text-white md:text-9xl"
                    >
                        AETHER
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-6 max-w-lg text-lg text-gray-300 md:text-xl"
                    >
                        The fusion of aerospace titanium and sapphire crystal.
                        <br className="hidden md:block" />
                        Precision engineering for the modern visionary.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-gray-200">
                            <span className="mr-2">Pre-Order Now</span>
                            <Watch className="size-4 transition-transform group-hover:rotate-12" />
                            <div className="absolute inset-0 -z-10 translate-y-[100%] bg-gradient-to-r from-primary to-accent opacity-0 transition-transform duration-500 group-hover:translate-y-0 group-hover:opacity-10" />
                        </button>
                        <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10">
                            View Specifications
                        </button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 flex flex-col items-center gap-2 text-gray-400"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Reveal</span>
                    <ArrowDown className="size-4" />
                </motion.div>
            </div>
        </div>
    )
}
