"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import TextType from "../blocks/TextAnimations/TextType/TextType";
import StarBorder from "../blocks/Animations/StarBorder/StarBorder";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="absolute top-36 flex flex-row items-center justify-center px-3 md:px-20 w-full z-[10]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="mt-4 text-2xl lg:text-4xl font-bold text-white max-w-[600px] w-full"
                >
                    <span>
                        Crafting
                        <span className="text-transparent bg-clip-text bg-gradient-primary">
                            {" "}
                            Scalable{" "}
                        </span>
                        Software &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-primary">
                            {" "}
                            Immersive Digital{" "}
                        </span>{" "}
                        Experiences
                    </span>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    <TextType
                        text={[
                            `I’m Manh Khai — a software engineer specializing in building high-performance web applications and intuitive user interfaces, blending robust backend architecture with elegant front-end design.`,
                            "Happy coding!",
                        ]}
                        typingSpeed={100}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="_"
                        cursorClassName="font-bold"
                        className="text-sm sm:text-lg"
                    />
                </motion.div>
                <motion.div variants={slideInFromLeft(1)} className="w-36 md:w-54 mx-auto md:mx-0">
                    <StarBorder
                        as="a"
                        href="#contact"
                        className="button-primary w-full text-center text-white cursor-pointer"
                        color="cyan"
                        speed="5s"
                        thickness={2}
                    >
                        Hire Me!
                    </StarBorder>
                </motion.div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="hidden md:flex w-full h-full justify-center items-center"
            >
                <Image
                    src="/images/mainIconsdark.svg"
                    alt="tech stack icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
