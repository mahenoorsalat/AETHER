
"use client";

import { cn } from "@/lib/utils";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function BentoGrid() {
    return (
        <section className="bg-black py-32 px-4 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-24 text-center">
                    <h2 className="text-4xl font-serif font-bold text-white md:text-6xl">Engineering Mastery</h2>
                    <p className="mt-4 text-gray-400">Forged for the few who lead.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[800px]">
                    {/* Large Card: Titanium */}
                    <div className="col-span-1 md:col-span-2 row-span-2">
                        <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full">
                            <CardBody className="bg-neutral-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/10 w-full h-full rounded-3xl p-6 border">
                                <CardItem translateZ="50" className="text-3xl font-bold text-white text-center w-full mt-4">
                                    Grade 5 Titanium
                                </CardItem>
                                <CardItem as="p" translateZ="60" className="text-neutral-400 text-sm max-w-sm mt-2 text-center w-full">
                                    Aerospace-grade durability meets featherlight comfort.
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-8 flex justify-center items-center">
                                    <Image
                                        src="/images/titanium.png"
                                        height={400}
                                        width={400}
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="Titanium Case"
                                    />
                                </CardItem>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                            </CardBody>
                        </CardContainer>
                    </div>

                    {/* Small Card: Sapphire */}
                    <div className="col-span-1 row-span-1">
                        <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full">
                            <CardBody className="bg-neutral-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/10 w-full h-full rounded-3xl p-6 border">
                                <CardItem translateZ="50" className="text-xl font-bold text-white">
                                    Sapphire Crystal
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
                                    <Image
                                        src="/images/sapphire.png"
                                        height={200}
                                        width={200}
                                        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="Sapphire Crystal"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>

                    {/* Small Card: Sensors */}
                    <div className="col-span-1 row-span-1">
                        <CardContainer className="inter-var w-full h-full" containerClassName="w-full h-full">
                            <CardBody className="bg-neutral-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/10 w-full h-full rounded-3xl p-6 border">
                                <CardItem translateZ="50" className="text-xl font-bold text-white">
                                    Bio-Sensors
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
                                    <Image
                                        src="/images/sensors.png"
                                        height={200}
                                        width={200}
                                        className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="Bio Sensors"
                                    />
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                    </div>
                </div>
            </div>
        </section>
    );
}

