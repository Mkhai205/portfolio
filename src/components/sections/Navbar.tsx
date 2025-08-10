"use client";

import { Socials, Sections } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Navbar */}
            <div className="sm:hidden w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4">
                <div className="w-full h-full flex flex-row items-center justify-between">
                    {/* Logo */}
                    <Link href="#" className="h-auto w-auto flex flex-row items-center">
                        <Image
                            src="/icons/icons8-react.svg"
                            alt="logo"
                            width={40}
                            height={40}
                            className="cursor-pointer animate-spin-slow"
                        />
                        <span className="font-bold ml-2 text-gray-300 text-lg">KAKA</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div className="absolute top-[65px] left-0 w-full bg-[#030014] backdrop-blur-md border-t border-[#7042f861]">
                        <div className="flex flex-col px-4 py-6 space-y-4">
                            {/* Navigation Links */}
                            {Sections.map((section) => (
                                <Link
                                    key={section.id}
                                    href={`#${section.id}`}
                                    onClick={closeMobileMenu}
                                    className="text-gray-200 hover:text-purple-400 transition-colors duration-300 py-2 border-b border-gray-700/30 last:border-b-0"
                                >
                                    {section.name}
                                </Link>
                            ))}

                            {/* Social Links */}
                            <div className="flex flex-row gap-4 pt-4">
                                {Socials.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={closeMobileMenu}
                                    >
                                        <Image
                                            src={social.src}
                                            alt={social.name}
                                            width={24}
                                            height={24}
                                            className="cursor-pointer hover:scale-110 transition-transform duration-300"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop and Laptop Navbar */}
            <div className="hidden sm:block w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
                <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                    <Link href="#" className="h-auto w-auto flex flex-row items-center">
                        <Image
                            src="/icons/icons8-react.svg"
                            alt="logo"
                            width={50}
                            height={50}
                            className="cursor-pointer animate-spin-slow"
                        />

                        <span className="hidden md:block font-bold ml-[10px] text-gray-300">
                            KAKA
                        </span>
                    </Link>

                    <div className="flex items-center w-[360px] md:w-[540px] h-full">
                        <div
                            className="flex items-center justify-between w-full border 
                            border-[#7042f861] bg-[#0300145e] px-5 py-3 rounded-full text-gray-200"
                        >
                            {Sections.map((section) => (
                                <Link
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="cursor-pointer hover:-translate-y-0.5 hover:text-purple-400/80 transition-all duration-300"
                                >
                                    {section.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-row gap-5">
                        {Socials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={social.src}
                                    alt={social.name}
                                    key={social.name}
                                    width={24}
                                    height={24}
                                    className="cursor-pointer hover:scale-110 transition-transform duration-300"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
