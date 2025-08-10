import React from "react";
import HeroContent from "../sub/HeroContent";

export default function Hero() {
    return (
        <div className="relative flex flex-col w-full" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="hidden md:block rotate-180 absolute -top-[calc(100vw*0.23)] left-0 w-full z-[-10] object-cover"
            >
                <source src="/videos/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
        </div>
    );
}
