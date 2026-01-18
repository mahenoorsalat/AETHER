"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
    {
        text: "The Aether Titanium fits seamlessly into my life. Ideally balanced between rugged durability and boardroom elegance.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
        name: "Alexander Thorne",
        role: "Architect, NYC",
    },
    {
        text: "I've owned many Swiss automatic watches, but the Aether's health tracking coupled with its finishing is unparalleled.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
        name: "Elena Vostokova",
        role: "Fashion Director",
    },
    {
        text: "Finally, a smartwatch that doesn't look like a gadget. The sapphire screen is truly scratch-resistant as claimed.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
        name: "Marcus Chen",
        role: "Venture Capitalist",
    },
    {
        text: "The haptic feedback is so subtle yet distinct. It feels alive on the wrist. A masterpiece of engineering.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces",
        name: "Sarah Jenkins",
        role: "Product Designer",
    },
    {
        text: "Battery life that actually keeps up with my travel schedule. Design that opens doors.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
        name: "David Alverez",
        role: "Pilot",
    },
    {
        text: "Aether has set a new standard. The integration of materials is simply flawless.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces",
        name: "Olivia Grant",
        role: "Art Curator",
    },
    {
        text: "Minimalist, functional, and undeniably premium. It's the only watch I wear now.",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop&crop=faces",
        name: "James Wilson",
        role: "Software Architect",
    },
    {
        text: "The bio-sensors give me data I didn't know I needed, all without breaking the aesthetic.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces",
        name: "Sophia Lee",
        role: "Professional Athlete",
    },
    {
        text: "Worth every penny. The unboxing experience alone was a journey.",
        image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop&crop=faces",
        name: "Michael Ross",
        role: "Entrepreneur",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
    return (
        <section className="bg-black py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),transparent_70%)] pointer-events-none" />

            <div className="container z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
                >
                    <div className="flex justify-center mb-4">
                        <div className="border border-white/20 py-1 px-4 rounded-full text-xs font-medium uppercase tracking-widest text-primary bg-white/5 backdrop-blur-sm">
                            Voices of Aether
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-white mt-5">
                        Wear the Legacy
                    </h2>
                    <p className="text-center mt-5 text-gray-400 max-w-lg">
                        Join the few who demand perfection. A community of visionaries, creators, and leaders.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
                </div>
            </div>
        </section>
    );
}
