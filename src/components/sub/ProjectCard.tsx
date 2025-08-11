"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/motion";
import Image from "next/image";
import { IProject } from "@/constants";
import { useState } from "react";
import ProjectDetailDialog from "./ProjectDetailDialog";

const ProjectCard = ({ project }: { project: IProject }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <motion.div
                className="group cursor-pointer bg-slate-800/30 rounded-2xl overflow-hidden shadow-lg transition-all 
                duration-300 ease-in-out border border-sky-400/30 relative flex flex-col 
                hover:transform  hover:shadow-2xl hover:shadow-blue-500/10 hover:border-sky-400"
                variants={fadeInUp}
                onClick={() => setDialogOpen(true)}
            >
                <div
                    className="h-60 relative overflow-hidden before:absolute 
                    before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 
                    before:to-transparent before:transform before:-translate-x-full before:transition-transform 
                    before:duration-600 before:ease-in-out group-hover:before:translate-x-full before:z-10"
                >
                    <Image
                        src={project.images[0]}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="flex flex-col gap-4 p-3 md:p-6">
                    <h3 className="mt-2 text-2xl text-white font-medium">{project.name}</h3>
                    <p className="text-gray-400 mt-3">{project.overview}</p>

                    <div className="flex gap-2 flex-wrap">
                        {project.technologies?.slice(0, 3).map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-slate-800/30 rounded-full text-sm text-white border 
                                    border-sky-400/30 group-hover:border-sky-400/80"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span
                                className="px-2 py-1.5 bg-slate-800/30 rounded-full text-sm text-white text-center border 
                                    border-sky-400/30 group-hover:border-sky-400/80"
                            >
                                +{project.technologies.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </motion.div>

            <ProjectDetailDialog project={project} open={dialogOpen} onOpenChange={setDialogOpen} />
        </>
    );
};

export default ProjectCard;
