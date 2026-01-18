"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

export function FeaturesSectionWithBentoGrid() {
    const features = [
        {
            title: "Aerospace Titanium",
            description:
                "Forged from Grade 5 Titanium for the ultimate strength-to-weight ratio.",
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 md:col-span-4 lg:col-span-4 border-b md:border-r border-white/10",
        },
        {
            title: "Sapphire Clarity",
            description:
                "Virtually unscratchable sapphire crystal display.",
            skeleton: <SkeletonTwo />,
            className: "col-span-1 md:col-span-2 lg:col-span-2 border-b border-white/10",
        },
        {
            title: "Precision Engineering",
            description:
                "Watch the craftsmanship behind every Aether timepiece.",
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-r border-white/10",
        },
        {
            title: "Global Connectivity",
            description:
                "Dual-frequency GPS ensures you're never lost, anywhere on Earth.",
            skeleton: <SkeletonFour />,
            className: "col-span-1 md:col-span-3 lg:col-span-3 border-b md:border-none border-white/10",
        },
    ];
    return (
        <div className="relative z-20 py-20 lg:py-40 max-w-7xl mx-auto">
            <div className="px-8 text-center mb-20">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto tracking-tight font-serif font-bold text-white">
                    Engineering Mastery
                </h4>

                <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-gray-400 font-normal">
                    From the depths of the ocean to the peaks of the atmosphere. Aether is built to withstand, perform, and inspire.
                </p>
            </div>

            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 mt-12 xl:border rounded-3xl border-white/10 bg-neutral-900/30 backdrop-blur-sm overflow-hidden">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className="h-full w-full mt-4">{feature.skeleton}</div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="max-w-5xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug font-semibold">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base max-w-4xl text-left mx-auto",
                "text-gray-400 font-normal",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

export const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full">
            <div className="w-full p-5 mx-auto bg-neutral-900/50 shadow-2xl group h-full rounded-xl border border-white/5">
                <div className="flex flex-1 w-full h-full flex-col space-y-2">
                    <Image
                        src="/images/titanium.png"
                        alt="header"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-square object-cover object-center rounded-lg"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black via-black to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export const SkeletonThree = () => {
    return (
        <Link
            href="#"
            target="__blank"
            className="relative flex gap-10 h-full group/image"
        >
            <div className="w-full mx-auto bg-transparent group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
                    <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto opacity-80 group-hover/image:opacity-100 transition-opacity" />
                    <Image
                        src="/images/sensors.png"
                        alt="header"
                        width={800}
                        height={800}
                        className="h-full w-full aspect-video object-cover object-center rounded-lg blur-sm group-hover/image:blur-none transition-all duration-200 border border-white/10"
                    />
                </div>
            </div>
        </Link>
    );
};

export const SkeletonTwo = () => {
    // Using watch imagery for the floating list
    const images = [
        "/images/sapphire.png",
        "/images/titanium.png",
        "/images/sensors.png",
        "/images/sapphire.png",
        "/images/titanium.png",
    ];

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };
    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            <div className="flex flex-row -ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="watch part"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0 grayscale hover:grayscale-0 transition-all"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row">
                {images.map((image, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-neutral-800 border-neutral-700 border flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            src={image}
                            alt="watch part"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0 grayscale hover:grayscale-0 transition-all"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black to-transparent h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black to-transparent h-full pointer-events-none" />
        </div>
    );
};

export const SkeletonFour = () => {
    return (
        <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
            <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
        </div>
    );
};

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.1, 0.1],
            markerColor: [0.1, 0.8, 1], // Cyan markers
            glowColor: [0.2, 0.2, 0.2],
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [51.5074, -0.1278], size: 0.05 }, // London
                { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005; // Slower rotation
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    );
};
