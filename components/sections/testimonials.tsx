import { Container } from "../container";
import { MovingBorder, MotionUp } from "../animations";
import Image from "next/image";
import Link from "next/link";
import { GridBackground } from "../bg-patterns";
import { Heading } from "../";
import { Testimonial } from "@/lib/types";
import { sortByPriority } from "@/lib/utils";

interface Props {
    data: Testimonial[];
}

export function Testimonials({ data }: Props) {
    return (
        <GridBackground className="py-10 md:py-20">
            <Container>
                <MotionUp delay={0.2}>
                    <Heading text="Few Nice Words" />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-12">
                        {sortByPriority(data).map((item) => (
                            <MovingBorder
                                key={item.authorName}
                                borderRadius="1rem"
                                style={{
                                    borderRadius: `calc(1rem* 0.96)`,
                                }}
                                showBeam={false}
                                className="text-black dark:text-blue-100 border-neutral-200 dark:border-slate-800"
                            >
                                <div className="h-full w-full  bg-opacity-80 p-5 sm:p-8 rounded">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="block w-5 h-5 text-gray-500 mb-4 rotate-180"
                                        viewBox="0 0 975.036 975.036"
                                    >
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                    <p className="leading-relaxed mb-6">{item.content}</p>
                                    <div className="inline-flex items-center">
                                        {item.socialLink ? (
                                            <Link
                                                target="_blank"
                                                href={item.socialLink}
                                                className="hover:underline text-slate-400 text-sm"
                                            >
                                                <Image
                                                    alt={item.authorName}
                                                    src={item.authorImage}
                                                    className="w-24 h-24 rounded-full flex-shrink-0 object-cover object-center"
                                                    height={100}
                                                    width={100}
                                                />
                                            </Link>
                                        ) : (
                                            <Image
                                                alt={item.authorName}
                                                src={item.authorImage}
                                                className="w-24 h-24 rounded-full flex-shrink-0 object-cover object-center"
                                                height={100}
                                                width={100}
                                            />
                                        )}

                                        <p className="flex-grow flex flex-col pl-4">
                                            {item.socialLink ? (
                                                <>
                                                    <Link
                                                        target="_blank"
                                                        href={item.socialLink}
                                                        className="hover:underline text-slate-400 text-sm mb-1"
                                                    >
                                                        <span className="title-font font-medium text-white mb-1">
                                                            {item.authorName}
                                                        </span>
                                                    </Link>
                                                    <span className="text-slate-400 text-sm">
                                                        {item.position}
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="title-font font-medium text-white mb-1">
                                                        {item.authorName}
                                                    </span>
                                                    <span className="text-slate-400 text-sm">
                                                        {item.position}
                                                    </span>
                                                </>
                                            )}
                                            <Link
                                                target="_blank"
                                                href={item.companyUrl}
                                                className="hover:underline text-slate-400 text-sm"
                                            >
                                                {item.companyName}
                                            </Link>{" "}
                                        </p>
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="block w-5 h-5 text-gray-500 mb-4 relative left-[95%]"
                                        viewBox="0 0 975.036 975.036"
                                    >
                                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                    </svg>
                                </div>
                            </MovingBorder>
                        ))}
                    </div>
                </MotionUp>
            </Container>
        </GridBackground>
    );
}
