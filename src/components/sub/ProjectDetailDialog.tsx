import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";
import {
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Code2,
    Cpu,
    ExternalLink,
    Sparkles,
    Target,
    Users,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { IProject } from "@/constants";
import Link from "next/link";

type ProjectDetailDialogProps = {
    project: IProject;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export default function ProjectDetailDialog({
    project,
    open,
    onOpenChange,
}: ProjectDetailDialogProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="w-full max-w-[90vw] sm:max-w-xl lg:max-w-3xl h-[80vh] sm:h-[85vh] lg:h-[92vh] overflow-hidden 
                bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50 text-white p-0"
            >
                <DialogHeader className="flex items-center justify-center pt-3">
                    <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {project.name}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 overflow-y-auto rounded-lg px-4 sm:px-6 pb-6">
                    {/* Image Carousel Section */}
                    <div className="space-y-3 sm:space-y-4">
                        <div className="relative group rounded-t-lg overflow-hidden shadow-2xl">
                            <div className="aspect-video relative">
                                <Image
                                    src={project.images[currentImageIndex] || "/placeholder.svg"}
                                    alt={`${project.name} preview ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover transition-all duration-500"
                                />

                                {/* Navigation Arrows */}
                                {project.images.length > 1 && (
                                    <>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white 
                                            border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"
                                            onClick={prevImage}
                                        >
                                            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white 
                                            border-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"
                                            onClick={nextImage}
                                        >
                                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </Button>
                                    </>
                                )}
                            </div>

                            {/* Image Indicators */}
                            {project.images.length > 1 && (
                                <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
                                    {project.images.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                                                index === currentImageIndex
                                                    ? "bg-white scale-125"
                                                    : "bg-white/50 hover:bg-white/75"
                                            }`}
                                            onClick={() => goToImage(index)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-3">
                            {/* Project Type */}
                            <div className="flex items-center justify-center gap-2 text-purple-400">
                                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                                <h3 className="text-base sm:text-lg font-semibold">Project</h3>
                                <Badge
                                    variant="secondary"
                                    className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                                    text-purple-300 border-purple-500/30 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium"
                                >
                                    {project.type}
                                </Badge>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-center gap-3">
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 
                                    rounded-xl h-9 sm:h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Link
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Code2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                        View Code
                                    </Link>
                                </Button>
                                {project.deployUrl && (
                                    <Button
                                        asChild
                                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 
                                        rounded-xl h-10 sm:h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <Link
                                            href={project.deployUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                            Deploy
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Project Information Section */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Technologies */}
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 text-cyan-400">
                                <Cpu className="h-4 w-4 sm:h-5 sm:w-5" />
                                <h3 className="text-base sm:text-lg font-semibold">Technologies</h3>
                            </div>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {project.technologies.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        variant="outline"
                                        className="bg-slate-800/50 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/10 transition-colors duration-200 text-xs sm:text-sm px-2 py-1"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Goal/Description */}
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 text-blue-400">
                                <Target className="h-4 w-4 sm:h-5 sm:w-5" />
                                <h3 className="text-base sm:text-lg font-semibold">Description</h3>
                            </div>
                            <p className="text-slate-300 leading-relaxed bg-slate-800/50 p-3 sm:p-4 rounded-xl border border-slate-700/50 text-sm sm:text-base">
                                {project.description}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 text-emerald-400">
                                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                                <h3 className="text-base sm:text-lg font-semibold">Key Features</h3>
                            </div>
                            <div className="space-y-1.5 sm:space-y-2">
                                {project.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2 sm:gap-3 text-slate-300"
                                    >
                                        <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-xs sm:text-sm leading-relaxed">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
