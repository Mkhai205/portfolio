import Image from "next/image";
import { Socials } from "@/constants";
const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space mt-20 mb-3 px-20">
            <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            <div className="flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                {Socials.map((social, index) => (
                    <a href={social.link} key={index}>
                        <Image
                            src={social.src}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            alt={social.name}
                        />
                    </a>
                ))}
            </div>
            <p>© 2025 Manh Khai. All rights reserved.</p>
        </section>
    );
};

export default Footer;
