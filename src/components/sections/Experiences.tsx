"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Education_and_experiences } from "@/constants";
import { fadeInUp } from "@/utils/motion";

export default function Experiences() {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setHeight(rect.height);
            }
        };

        // Initial calculation
        updateHeight();

        // Add resize listener for responsive height
        const resizeObserver = new ResizeObserver(updateHeight);
        if (ref.current) {
            resizeObserver.observe(ref.current);
        }

        // Cleanup
        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 30%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            id="education-and-experiences"
            className="flex flex-col items-center justify-center px-6 md:px-20"
            ref={containerRef}
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                className="header-section"
            >
                Education and Experiences
            </motion.h2>
            <div ref={ref} className="relative pb-20">
                {Education_and_experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex justify-start pt-10 md:pt-20 md:gap-10 group"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                            <div className="absolute -left-2 w-5 h-5 border-2 rounded-full bg-purple-600" />
                            <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-white group-hover:text-purple-100 transition-colors duration-300">
                                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                    {item.date}
                                </h3>
                                <h3 className="text-2xl text-gray-300 group-hover:text-white transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <h3 className="text-2xl text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                                    {item.job}
                                </h3>
                            </div>
                        </div>

                        <div className="relative w-full pl-12 md:pl-4">
                            <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                                <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                    {item.date}
                                </h3>
                                <h3 className="group-hover:text-white transition-colors duration-300">
                                    {item.job}
                                </h3>
                            </div>
                            {item.contents.map((content, contentIndex) => (
                                <motion.p
                                    className="mb-4 font-normal text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300"
                                    key={contentIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.1 + contentIndex * 0.05,
                                    }}
                                >
                                    {content}
                                </motion.p>
                            ))}
                        </div>
                    </motion.div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute left-0 top-0 overflow-hidden w-1 bg-gradient-to-b from-transparent via-neutral-600/30 to-transparent
                    [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-1 bg-gradient-to-b 
                        from-purple-400 via-purple-500 to-cyan-400 rounded-full
                        shadow-lg shadow-purple-500/50"
                    />
                </div>
            </div>
        </div>
    );
}
