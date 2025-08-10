import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";

export default function HomePage() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-10">
                <Hero />
                <TechStack />
                <Projects />
                {/* <Skills />
        <Encryption /> */}
            </div>
        </main>
    );
}
