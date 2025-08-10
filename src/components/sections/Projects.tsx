"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/sub/ProjectCard";
import { fadeInUp, staggerContainer } from "@/utils/motion";
import { ProjectCards } from "@/constants";

export default function Projects() {
    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
        >
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
            >
                My Projects
            </motion.h2>
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-20 w-full"
            >
                {ProjectCards.map((project, index) => (
                    <ProjectCard
                        key={index}
                        src={project.src}
                        title={project.title}
                        description={project.description}
                        techstack={project.techstack}
                    />
                ))}
            </motion.div>
        </motion.section>
    );
}
