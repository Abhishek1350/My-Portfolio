"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Header() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour12: false }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-20 flex items-center justify-between px-6 py-4"
    >
      <div className="text-white font-medium">imabhishek</div>
      <div className="text-sm text-gray-400 font-mono">{time}</div>
    </motion.header>
  )
}
