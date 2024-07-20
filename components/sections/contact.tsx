import { Container } from "../container";
import { MotionUp } from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { ContactForm } from "../form";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const getSocialIcons = (title: string) => {
    switch (title) {
        case "GitHub":
            return <FaGithub size={25} />;
        case "Twitter":
            return <FaTwitter size={25} />;
        case "Instagram":
            return <FaInstagram size={25} />;
        default:
            return <FaLinkedinIn size={25} />;
    }
};

const getIconColors = (title: string) => {
    switch (title) {
        case "GitHub":
            return "text-gray-200 hover:text-gray-700";
        case "Twitter":
            return "text-blue-500 hover:text-blue-700";
        case "Instagram":
            return "text-pink-500 hover:text-pink-700";
        default:
            return "text-blue-500 hover:text-blue-700";
    }
};

const socialLinks = [
    {
        title: "GitHub",
        link: "https://github.com",
    },
    {
        title: "Twitter",
        link: "https://twitter.com",
    },
    {
        title: "Instagram",
        link: "https://instagram.com",
    },
    {
        title: "LinkedIn",
        link: "https://linkedin.com",
    },
];

export function Contact() {
    return (
        <SmallGridBackground className="py-20" mask={false} id="contact">
            <Container>
                <MotionUp delay={0.2}>
                    <div className="flex justify-center">
                        <div className="flex items-center relative z-30">
                            <span className="w-24 h-[2px] bg-slate-800"></span>
                            <h6 className="bg-slate-900 w-fit font-bold text-3xl text-blue-100 p-2 px-5 rounded-md">
                                Reach out to me
                            </h6>
                            <span className="w-24 h-[2px] bg-slate-800"></span>
                        </div>
                    </div>

                    <div className="flex sm:flex-nowrap flex-wrap mt-12">
                        <div className="order-2 sm:order-1 w-full md:w-[60%]  bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-5 md:p-10 flex items-end justify-start relative">
                            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                                <div className="lg:w-1/2 px-6">
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                        ADDRESS
                                    </h2>
                                    <p className="mt-1">Himachal Pradesh, India</p>
                                </div>

                                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                        EMAIL
                                    </h2>
                                    <a
                                        href="mailto:hello@imabhishek.online"
                                        className="text-indigo-400 leading-relaxed"
                                    >
                                        hello@imabhishek.online
                                    </a>
                                </div>

                                <div className="lg:w-1/2 px-6 mt-4">
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                        WORKING HOURS
                                    </h2>
                                    <a
                                        href="mailto:hello@imabhishek.online"
                                        className="text-indigo-400 leading-relaxed"
                                    >
                                        9:00 AM - 1:00 AM
                                    </a>
                                </div>
                                <div className="lg:w-1/2 px-6 mt-4 flex items-center">
                                    {socialLinks.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.link}
                                            target="_blank"
                                            className={`inline-flex items-center mr-4 ${getIconColors(
                                                item.title
                                            )}`}
                                        >
                                            {getSocialIcons(item.title)}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="order-1 sm:order-2 w-full md:w-[40%] flex flex-col md:ml-auto mt-8 md:mt-0">
                            <ContactForm />
                            <p className="text-sm text-center text-gray-400 text-opacity-90 mb-5">
                                Leave your email and I will get back to you within 24 hours
                            </p>
                        </div>
                    </div>
                </MotionUp>
            </Container>
        </SmallGridBackground>
    );
}
