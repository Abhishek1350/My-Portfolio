import { Container } from "../container";
import { MotionUp, MagicButton } from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { IoSendSharp } from "react-icons/io5";

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
                        <div className="w-full md:w-[60%]  bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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

                                <div className="px-6 mt-4">
                                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                        social icons
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-[40%] flex flex-col md:ml-auto mt-8 md:mt-0">
                            <h2 className="text-white text-lg mb-1 font-medium title-font">
                                Let's Talk
                            </h2>
                            <p className="leading-relaxed mb-5">
                                Leave your email and I will get back to you within 24 hours
                            </p>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-gray-400"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>

                            <MagicButton
                                title="Sumit"
                                icon={<IoSendSharp />}
                                position="right"
                                className="!w-full text-lg !bg-red-500"
                            />
                            <p className="text-xs text-center text-gray-400 text-opacity-90 mt-3">
                                Leave your email and I will get back to you within 24 hours
                            </p>
                        </div>
                    </div>
                </MotionUp>
            </Container>
        </SmallGridBackground>
    );
}
