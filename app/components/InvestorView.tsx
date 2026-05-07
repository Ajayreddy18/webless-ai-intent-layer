"use client"

import { motion } from "framer-motion"

const metrics = [
  {
    title: "Conversion Lift",
    value: "42%",
  },
  {
    title: "AI Visibility",
    value: "3.8x",
  },
  {
    title: "Enterprise Pages",
    value: "120+",
  },
]

export default function InvestorView() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {metrics.map((item) => (
          <div
            key={item.title}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-5xl font-bold">
              {item.value}
            </h2>

            <p className="text-zinc-400 mt-4">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  )
}