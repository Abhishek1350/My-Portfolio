"use client";

import { techStack } from "@/config/data";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

export function TechnicalSkills() {
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
            <FaReact className="w-6 h-6 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            Tech Arsenal
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

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {techStack.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className=" group p-4 flex flex-col items-center  rounded-xl border border-blue-500/30 group bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-500"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                <IconComponent
                  className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform duration-500`}
                />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
