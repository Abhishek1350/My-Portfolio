"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { WorkExperience } from "@/lib/types";
import Image from "next/image";
import { breakText, formatDate } from "@/lib/utils";

export function Timeline({ data }: { data: WorkExperience[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative max-w-5xl mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <Image
                  src={item.companyLogo}
                  alt={item.companyName}
                  width={300}
                  height={300}
                  className="w-full rounded-full object-cover"
                />
              </div>
              <div className="hidden md:block md:pl-20">
                <h4 className="font-semibold text-2xl text-blue-100">
                  {formatDate(item.startDate)} -{" "}
                  {item.endDate ? formatDate(item.endDate) : "Present"}
                </h4>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="hidden md:block mb-5">
                <h5 className="font-semibold text-2xl  text-blue-100 mb-1">
                  {item.position}
                </h5>
                <h6 className="font-semibold text-base  text-purple">
                  {item.companyName}
                </h6>
              </div>

              <div className="block md:hidden mb-5">
                <h4 className="font-semibold text-2xl text-blue-100 mb-1">
                  {formatDate(item.startDate)} -{" "}
                  {item.endDate ? formatDate(item.endDate) : "Present"}
                </h4>
                <h5 className="font-semibold text-lg  text-blue-100 mb-1">
                  {item.position}
                </h5>
                <h6 className="font-semibold text-base  text-purple">
                  {item.companyName}
                </h6>
              </div>

              {breakText(item.jobDescription).map((sentence, index) => (
                <p key={index} className="text-neutral-300 mb-2">
                  {sentence}
                  {sentence.endsWith(".") ? "" : "."}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
