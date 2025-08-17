"use client"

import { workExperience } from "@/config/data"
import { motion } from "framer-motion"
import { FiBriefcase } from "react-icons/fi"

export function WorkExperience() {
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
            className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
          >
            <FiBriefcase className="w-6 h-6 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
            Professional Journey
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

      <div className="space-y-12 ">
        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-2">
              <div>
                <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                <p className="text-blue-400 font-medium text-lg">{job.position}</p>
              </div>
              <span className="text-gray-400">{job.period}</span>
            </div>

            <p className="text-lg text-gray-200 mb-2">{job.shortDesc}</p>

            <ul className="space-y-2 mb-8 pl-3">
              {job.bulletPoints.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-gray-300 text-lg"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
