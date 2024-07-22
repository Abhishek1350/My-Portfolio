"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ModalTrigger } from "./animated-modal";
import { useModal } from "@/context";
import { Project } from "@/lib/types";

interface Props {
  data: Project
}

export function ProjectCard({ data }: Props) {
  const { setModalData } = useModal();

  const handleSetModalContent = () => {
    setModalData(data);
  };

  return (
    <PinContainer
      title="Read More"
      onClick={handleSetModalContent}
      className="!w-full flex justify-center h-[360px]"
    >
      <div className="tracking-tight text-blue-100">
        <Image
          src={data.images[0]}
          alt={data.title}
          height={300}
          width={500}
          className="rounded-lg h-[180px] max-w-full mb-5"
        />
        <h3 className="line-clamp-1 max-w-xs !pb-2 !m-0 font-bold  text-base text-blue-100">
          {data.title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <p className="text-slate-400 line-clamp-4 ">{data.description}</p>
        </div>
      </div>
    </PinContainer>
  );
}

function PinContainer({
  children,
  title,
  className,
  containerClassName,
  onClick,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  containerClassName?: string;
  onClick?: Function;
}) {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <ModalTrigger>
      <button
        className={cn(
          "relative group/pin z-50  cursor-pointer w-full block text-left h-[400px]",
          containerClassName
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
      >
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              transform: transform,
            }}
            className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-slate-950 border border-white/[0.2] group-hover/pin:border-white/[0.5] transition duration-700 overflow-hidden w-[20rem]  sm:w-[21rem]"
          >
            <div
              className={cn(" relative z-50 w-[19rem] sm:w-[20rem]", className)}
            >
              {children}
            </div>
          </div>
        </div>
        <PinPerspective title={title} />
      </button>
    </ModalTrigger>
  );
}

function PinPerspective({ title }: { title?: string }) {
  return (
    <motion.div className="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <p
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-red-400/0 via-red-500 to-red-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </p>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-red-500/20 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-red-500/30 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-red-500/50 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-red-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-red-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-red-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-red-600 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
}
