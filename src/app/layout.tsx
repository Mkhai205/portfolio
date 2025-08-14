import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/Navbar";
import StarsCanvas from "@/components/sub/StarBackground";
import Footer from "@/components/sections/Footer";
import { Toaster } from "sonner";
import SplashCursor from "@/components/blocks/Animations/SplashCursor/SplashCursor";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio | Kaka",
    description: "This is my portfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden antialiased`}
            >
                <StarsCanvas />
                {/* <SplashCursor /> */}
                <Navbar />
                {children}
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
