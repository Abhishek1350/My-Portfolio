"use client"

import { motion } from "framer-motion"
import { FaPenFancy } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"

const blogPosts = [
  {
    title: "My Self-Taught Developer Journey",
    description: "How I transformed from complete beginner to React developer during the 2021 lockdown.",
    date: "Dec 15, 2024",
    gradient: "from-blue-600 to-cyan-700",
  },
  {
    title: "Building Scalable React Apps",
    description: "Best practices and patterns I've learned while building production applications.",
    date: "Dec 8, 2024",
    gradient: "from-cyan-600 to-blue-700",
  },
  {
    title: "Next.js Performance Tips",
    description: "Advanced techniques for optimizing Next.js applications and improving user experience.",
    date: "Nov 28, 2024",
    gradient: "from-blue-700 to-cyan-600",
  },
]

export function BlogPosts() {
  return (
    <section className="mb-16">
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
            <FaPenFancy className="w-6 h-6 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            Latest Insights
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="group bg-gray-900/30 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-500"
          >
            <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
              <h3 className="text-xl font-bold text-white text-center px-4">{post.title}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-4 leading-relaxed">{post.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  <FiArrowRight className="w-4 h-4 text-blue-400" />
                </motion.div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
