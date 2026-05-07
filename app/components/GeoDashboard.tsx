"use client"

import { motion } from "framer-motion"

const stats = [
  {
    title: "GEO Score",
    value: "94",
  },
  {
    title: "AI Readability",
    value: "High",
  },
  {
    title: "Citation Ready",
    value: "Yes",
  },
  {
    title: "Agent Compatible",
    value: "98%",
  },
]

export default function GeoDashboard() {
  return (
    <motion.section id = "dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl"
          >
            <p className="text-zinc-400 text-sm">
              {stat.title}
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>
    </motion.section>
  )
}