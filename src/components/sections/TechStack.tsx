"use client";

import { motion } from "framer-motion";
import { Backend_techs, Frontend_techs, Tools } from "@/constants";
import { Marquee } from "../magicui/marquee";
import { fadeInUp } from "@/utils/motion";
import Image from "next/image";

export default function TechStack() {
    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center mt-[calc(100vh)]"
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
            >
                Tech Stack
            </motion.h2>
            <motion.div className="relative flex flex-col items-center justify-center gap-6 w-full overflow-hidden">
                <Marquee pauseOnHover className="[--duration:40s]">
                    {Frontend_techs.map((tech) => (
                        <Tech key={tech.tech_name} {...tech} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {Backend_techs.map((tech) => (
                        <Tech key={tech.tech_name} {...tech} />
                    ))}
                </Marquee>
                <Marquee pauseOnHover className="[--duration:40s]">
                    {Tools.map((tech) => (
                        <Tech key={tech.tech_name} {...tech} />
                    ))}
                </Marquee>
                <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
                <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
            </motion.div>
        </motion.section>
    );
}

type TechProps = {
    tech_name: string;
    image: string;
};

const Tech = ({ tech_name, image }: TechProps) => {
    return (
        <div className="relative cursor-pointer overflow-hidden border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation">
            <Image
                src={image}
                alt={tech_name}
                width={80}
                height={80}
                className="w-20 h-20 object-contain mx-4"
            />
        </div>
    );
};
