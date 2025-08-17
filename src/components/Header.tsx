"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-20  px-6 py-3 bg-black/50 backdrop-blur-sm font-mono"
    >
      <nav className="w-full flex items-center justify-between">
        <div className="text-white">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/logo.webp"
              alt="imabhishek logo"
              className="rounded-full h-8 w-8"
              width={50}
              height={50}
            />
            <span className="text-lg">imabhishek</span>
          </Link>
        </div>
        <div className=" text-gray-400">{time}</div>
      </nav>
    </motion.header>
  );
}
