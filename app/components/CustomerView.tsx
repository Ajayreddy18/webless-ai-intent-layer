"use client"

import { motion } from "framer-motion"

export default function CustomerView() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
        <h2 className="text-4xl font-bold">
          Personalized AI-native journeys
        </h2>

        <p className="text-zinc-400 mt-6 leading-9 text-lg">
          Webless restructures websites dynamically
          based on visitor intent, semantic context,
          and AI discoverability.
        </p>
      </div>
    </motion.section>
  )
}