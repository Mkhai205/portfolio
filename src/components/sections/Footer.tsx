import Image from "next/image";
import { Socials } from "@/constants";
import Link from "next/link";
import { MapPinned } from "lucide-react";

export default function Footer() {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-gray-300 mt-20 mb-3 px-20 z-1">
            <div className="mb-4 bg-gradient-to-r from-transparent via-gray-600 to-transparent h-[1px] w-full" />
            <div className="flex items-center gap-2">
                <span>
                    <MapPinned />
                </span>
                <p>Address Ha Noi, Viet Nam</p>
            </div>
            <div className="flex gap-3">
                {Socials.map((social) => (
                    <Link
                        target="_blank"
                        href={social.link}
                        key={social.name}
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:scale-110 transition-transform duration-300"
                    >
                        <Image src={social.src} alt={social.name} width={24} height={24} />
                    </Link>
                ))}
            </div>
            <p>© 2025 Manh Khai. All rights reserved.</p>
        </section>
    );
}
