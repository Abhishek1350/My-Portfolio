"use client"

import { certifications } from "@/config/data"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaCertificate } from "react-icons/fa"

export function Certifications() {
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
            <FaCertificate className="w-6 h-6 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            Achievements & Badges
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {certifications.map((cert, index) => (
          <motion.a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            title={cert.title}
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="group bg-gray-900/30 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-500"
          >
            <Image
              src={cert.image || "/placeholder.svg"}
              alt={cert.title}
              width={500}
              height={500}
              className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </motion.a>
        ))}
      </div>
    </div>
  )
}
