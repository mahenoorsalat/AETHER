"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-white hover:opacity-[0.9]"
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-black/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    layout
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-neutral-200 hover:text-white "
        >
            {children}
        </Link>
    );
};

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
            onMouseLeave={() => setActive(null)}
        >
            <div className="relative rounded-full border border-white/[0.2] bg-black/50 backdrop-blur-md shadow-input flex justify-center space-x-8 px-8 py-4">
                <MenuItem setActive={setActive} active={active} item="Collection">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#">Pro Series</HoveredLink>
                        <HoveredLink href="#">Air Series</HoveredLink>
                        <HoveredLink href="#">Limited Edition</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Technology">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#">Sensors</HoveredLink>
                        <HoveredLink href="#">Materials</HoveredLink>
                        <HoveredLink href="#">OS</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Story">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#">Heritage</HoveredLink>
                        <HoveredLink href="#">Craftsmanship</HoveredLink>
                    </div>
                </MenuItem>
                <div className="border-l border-white/20 pl-8">
                    <Link href="#" className="font-bold text-white tracking-widest">AETHER</Link>
                </div>
            </div>
        </div>
    );
}
