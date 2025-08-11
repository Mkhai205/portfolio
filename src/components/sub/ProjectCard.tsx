"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/motion";

interface Props {
    src: string;
    title: string;
    description: string;
    techstack: string[];
}

const ProjectCard = ({ src, title, description, techstack }: Props) => {
    return (
        <motion.div
            className="bg-white/5 rounded-2xl overflow-hidden shadow-lg transition-all 
            duration-300 ease-in-out border border-sky-400/30 relative flex flex-col 
            group hover:transform hover:-translate-y-2.5 hover:scale-105 hover:shadow-2xl hover:border-sky-400"
            variants={fadeInUp}
        >
            {/* Project image with shimmer effect */}
            <motion.div
                className="h-60 bg-cover bg-center relative overflow-hidden before:absolute 
                before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 
                before:to-transparent before:transform before:-translate-x-full before:transition-transform 
                before:duration-600 before:ease-in-out group-hover:before:translate-x-full"
                style={{ backgroundImage: `url(${src})` }}
            />

            <div className="flex flex-col gap-3 p-4 md:p-6">
                <h3 className="mt-2 text-2xl text-white font-medium">{title}</h3>

                <p className="text-gray-400 flex-grow">{description}</p>

                <div className="flex gap-2 flex-wrap">
                    {techstack?.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-gray-800 rounded-full text-sm text-white border border-sky-400/50"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
