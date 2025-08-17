"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Vikshak P",
    company: "Edvolve",
    linkedIn: "https://www.linkedin.com/in/vikshak/",
    position: "Cofounder",
    avatar: "/images/testimonials/vikshak.webp",
    testimonial:
      "Abhishek worked with us and he was quite the problem solver. His ability to learn quickly and eagerness to learn new things was super helpful since we were a high velocity team and expected quick results. Would happily work with him again to develop good products, and recommend him to other employers looking for a fast learner in your team!",
  },
  {
    name: "Shwetank Singh",
    company: "Edvolve",
    linkedIn: "https://www.linkedin.com/in/singhshwetank/",
    position: "Technical Lead",
   avatar: "/images/testimonials/shwetank.webp",
    testimonial:
      "Abhishek is a hardworking, driven and dedicated person. He will be an asset wherever he goes.",
  },
];

export function Testimonials() {
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
            <FaQuoteLeft className="w-6 h-6 text-blue-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
            Few Nice Words
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-lg p-6 border border-blue-500/30"
          >
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback className="bg-blue-600 text-white">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-white text-lg leading-relaxed">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={testimonial.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-blue-300 transition-colors duration-300"
                  >
                    {testimonial.name}
                  </motion.a>
                </h3>
                <p className="text-sm">{testimonial.position} @{testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-300 ">
              "{testimonial.testimonial}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
