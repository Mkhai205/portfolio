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
        <motion.div className="project-card" variants={fadeInUp}>
            <motion.div className="project-image" style={{ backgroundImage: `url(${src})` }} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-tech">
                {techstack?.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
