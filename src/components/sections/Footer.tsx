import Image from "next/image";
import { Socials } from "@/constants";
import Link from "next/link";

export default function Footer() {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space mt-20 mb-3 px-20 z-1">
            <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            <div className="flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
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
