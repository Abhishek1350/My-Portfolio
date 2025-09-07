"use client";

import { setupSpecs } from "@/config/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { VideoDialog } from "./ui/video-dialog";

export function MySetup() {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
          >
            <FiSettings className="w-6 h-6 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            Where Ideas Come to Life
          </h2>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <VideoDialog
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/nVIEqYuCkgA?si=lyPFyA7sbVo21iSy"
            thumbnailSrc="/images/about/abhishek-setup-1.webp"
            thumbnailAlt="Abhishek's Development Setup - Main View"
            autoplay
          />

          <motion.a
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-sm bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-gray-800/50 hover:border-blue-500/30"
            href="/images/about/abhishek-setup-2.webp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/about/abhishek-setup-2.webp"
              alt="Abhishek's Development Setup - Alternative View"
              width={800}
              height={600}
              className="w-full h-auto rounded-sm object-cover hover:scale-102 transition-transform duration-700 ease-out"
            />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col h-full"
        >
          <div className="mb-8">
            <p className="leading-relaxed">
              Built for focus, creativity, and high performance. This is where I
              code, build, and brainstorm, turning late-night sessions into
              polished projects (with a few gaming breaks in between).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {setupSpecs.map((spec, index) => {
              const IconComponent = spec.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className=" p-4 bg-gray-900/50 rounded-xl border border-blue-500/30 h-full"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center"
                    >
                      <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 text-sm">
                        {spec.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {spec.subTitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
