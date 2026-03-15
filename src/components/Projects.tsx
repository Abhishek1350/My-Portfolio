"use client";

import { projects } from "@/config/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiExternalLink, FiGithub } from "react-icons/fi";

export function Projects() {
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
            <FiCode className="w-6 h-6 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            Featured Projects
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

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-blue-500/30"
          >

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.techStack.map((tech, techIndex) => {
                      const Icon = tech.icon;
                      return (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        >
                          <Icon className={`w-6 h-6 ${tech.color}`} />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </div>

          </motion.div>

          // <motion.div
          //   key={index}
          //   initial={{ opacity: 0, y: 20 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          //   viewport={{ once: true }}
          //   whileHover={{ scale: 1.01, y: -2 }}
          //   className="rounded-xl overflow-hidden transition-all duration-500 ease-out border border-blue-500/30"
          // >
          //   <div className="aspect-video bg-gray-800 overflow-hidden">
          //     <Image
          //       src={project.image}
          //       alt={project.title}
          //       width={400}
          //       height={300}
          //       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          //     />
          //   </div>
          //   <div className="p-6">
          //     <div className="flex  items-center justify-between mb-3">
          //       <h3 className="text-xl font-bold text-white">
          //         {project.title}
          //       </h3>
          //       <div className="flex items-center gap-2">
          //         {project.techStack.map((tech, techIndex) => {
          //           const Icon = tech.icon;
          //           return (
          //             <motion.div
          //               key={techIndex}
          //               initial={{ opacity: 0, scale: 0.8 }}
          //               whileInView={{ opacity: 1, scale: 1 }}
          //               transition={{
          //                 duration: 0.3,
          //                 delay: techIndex * 0.05,
          //                 ease: "easeOut",
          //               }}
          //               viewport={{ once: true }}
          //             >
          //               <Icon className={`w-6 h-6 ${tech.color}`} />
          //             </motion.div>
          //           );
          //         })}
          //       </div>
          //     </div>
          //     <p className="text-gray-300 mb-4 leading-relaxed">
          //       {project.description}
          //     </p>

          //     <div className="flex items-center gap-4">
          //       <motion.a
          //         whileHover={{ scale: 1.02, x: 2 }}
          //         whileTap={{ scale: 0.98 }}
          //         transition={{ duration: 0.2, ease: "easeOut" }}
          //         href={project.liveUrl}
          //         className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm font-medium"
          //         target="_blank"
          //         rel="noopener noreferrer"
          //       >
          //         <FiExternalLink className="w-4 h-4" />
          //         Live Demo
          //       </motion.a>
          //     </div>
          //   </div>
          // </motion.div>
        ))}
      </div>
    </div>
  );
}
