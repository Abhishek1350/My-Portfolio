import { Container } from "../container";
import { MotionUp, WorldMap } from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { ContactForm } from "../form";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Heading } from "../";
import { PersonalInfo, SocialLink } from "@/lib/types";
import { sortByPriority } from "@/lib/utils";

interface Props {
    personalInfo: PersonalInfo;
    socialLinks: SocialLink[];
}

const getSocialIcons = (title: string) => {
    switch (title) {
        case "GitHub":
            return <FaGithub size={30} />;
        case "Twitter":
            return <FaTwitter size={30} />;
        case "Instagram":
            return <FaInstagram size={30} />;
        default:
            return <FaLinkedinIn size={30} />;
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

export function Contact({ personalInfo, socialLinks }: Props) {
    return (
        <SmallGridBackground className="py-10" id="contact">
            <Container>
                <MotionUp delay={0.2}>
                    <Heading text="Let's Have a Chat" className="mb-5" />

                    <p className="text-sm md:text-lg relative leading-relaxed text-blue-100 max-w-2xl mx-auto text-center">
                        Redefining creativity and freedom. Collaborate and create from
                        anywhere, whether it's the comfort of your own space or on the go.
                    </p>

                    <div className="my-5">
                        <WorldMap
                            dots={[
                                {
                                    start: {
                                        lat: 64.2008,
                                        lng: -149.4937,
                                    },
                                    end: {
                                        lat: 34.0522,
                                        lng: -118.2437,
                                    },
                                },
                                {
                                    start: { lat: 64.2008, lng: -149.4937 },
                                    end: { lat: -15.7975, lng: -47.8919 },
                                },
                                {
                                    start: { lat: -15.7975, lng: -47.8919 },
                                    end: { lat: 38.7223, lng: -9.1393 },
                                },
                                {
                                    start: { lat: 51.5074, lng: -0.1278 },
                                    end: { lat: 28.6139, lng: 77.209 },
                                },
                                {
                                    start: { lat: 28.6139, lng: 77.209 },
                                    end: { lat: 43.1332, lng: 131.9113 },
                                },
                                {
                                    start: { lat: 28.6139, lng: 77.209 },
                                    end: { lat: -1.2921, lng: 36.8219 },
                                },
                            ]}
                        />
                    </div>
                </MotionUp>

                <MotionUp delay={0.2}>
                    <div className="flex sm:flex-nowrap flex-wrap mt-6 sm:mt-12">
                        <div
                            className="order-2 sm:order-1 w-full md:w-[60%]  rounded-lg overflow-hidden sm:mr-10 p-5 md:p-10 flex items-end justify-start relative"
                            style={{
                                background: `linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.70) 100%), url('${personalInfo.setupImage}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="relative flex flex-wrap justify-center items-center w-full shadow-md">
                                <div className="w-full px-6">
                                    <h6 className="text-blue-100 italic font-bold text-xl uppercase">
                                        believe in <span className="text-purple">Karma</span>
                                    </h6>
                                </div>

                                <div className="w-full lg:w-1/2 px-6 mt-4">
                                    <h6 className="title-font font-semibold text-blue-100  tracking-widest text-xs">
                                        EMAIL
                                    </h6>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-blue-100 leading-relaxed"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>

                                <div className="w-full lg:w-1/2 px-6 mt-4">
                                    <h6 className="title-font font-semibold text-blue-100 tracking-widest text-xs">
                                        WORKING HOURS
                                    </h6>
                                    <p className="text-blue-100 leading-relaxed">
                                        {personalInfo.workingHours}
                                    </p>
                                </div>

                                <div className="w-full lg:w-1/2 px-6 mt-4">
                                    <h6 className="title-font font-semibold text-blue-100  tracking-widest text-xs">
                                        ADDRESS
                                    </h6>
                                    <p className="mt-1 text-blue-100 leading-relaxed">
                                        {personalInfo.address}
                                    </p>
                                </div>

                                <div className="w-full lg:w-1/2 px-6 mt-4 gap-2 sm:mt-8 flex items-center">
                                    {sortByPriority(socialLinks).map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.url}
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
                            <ContactForm currentEmail={personalInfo.email} />
                        </div>
                    </div>
                </MotionUp>
            </Container>
        </SmallGridBackground>
    );
}
