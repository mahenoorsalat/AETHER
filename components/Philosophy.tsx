"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Philosophy() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    return (
        <section ref={container} className="min-h-[50vh] flex items-center justify-center bg-black px-6 py-24">
            <motion.p
                style={{ opacity }}
                className="max-w-4xl text-center font-serif text-3xl font-medium leading-tight text-white md:text-5xl lg:text-6xl"
            >
                "Time is not measured by seconds, but by moments that leave us breathless. Aether is built for those moments."
            </motion.p>
        </section>
    );
}
