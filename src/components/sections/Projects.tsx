"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motion";
import { PROJECTS } from "@/constants";
import ProjectCard from "../sub/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center">
            <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                className="header-section"
            >
                My Projects
            </motion.h2>
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-20 w-full"
            >
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>
        </section>
    );
}
