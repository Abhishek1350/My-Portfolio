"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { heroSection } from "@/config/data";

function getSocialIcon(title: string) {
  switch (title) {
    case "GitHub":
      return <FaGithub className="w-8 h-8 text-gray-200 hover:text-gray-500" />;
    case "Twitter":
      return (
        <FaSquareXTwitter className="w-8 h-8 text-gray-200 hover:text-gray-500" />
      );
    case "Instagram":
      return (
        <FaInstagram className="w-8 h-8 text-pink-500 hover:text-pink-700" />
      );
    default:
      return (
        <FaLinkedinIn className="w-8 h-8 text-blue-500 hover:text-blue-700" />
      );
  }
}

export function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col items-center lg:items-start"
      >
        <Avatar className="w-42 h-42 mb-6 ring-2 ring-gray-800">
          <AvatarImage
            src={heroSection.personalInfo.avatar}
            alt={heroSection.personalInfo.name}
            className="object-cover"
          />
          <AvatarFallback className="text-3xl font-semibold bg-gray-800">
            AB
          </AvatarFallback>
        </Avatar>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-2 text-sm text-gray-400 mb-4"
        >
          <FiMapPin className="w-4 h-4" />
          {heroSection.personalInfo.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex w-full items-center gap-4 justify-between"
        >
          {heroSection.socialLinks.map(({ title, url }) => (
            <motion.a
              key={title}
              title={title}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getSocialIcon(title)}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex-1 text-center lg:text-left"
      >
        <div className="flex justify-center lg:justify-start items-center gap-4 mb-6">
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <a
              className="flex items-center border border-blue-700/50 text-blue-300 hover:bg-blue-900/30 transition-all duration-300 py-2 px-4 rounded-sm"
              href={`mailto:${heroSection.personalInfo.email}`}
            >
              <FiCalendar className="w-4 h-4 mr-2" />
              <span>Schedule a call</span>
            </a>
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl lg:text-6xl font-bold mb-3 tracking-tight"
        >
          {heroSection.personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl text-gray-400 mb-5"
        >
          {heroSection.personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-gray-300 leading-relaxed text-lg max-w-2xl"
        >
          {heroSection.personalInfo.description}
        </motion.p>
      </motion.div>
    </section>
  );
}
