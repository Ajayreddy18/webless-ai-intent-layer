"use client"

import { motion } from "framer-motion"

export default function Hero({
  intent,
}: {
  intent: string
}) {
  const titles: Record<string, string> = {
    investor: "AI-native growth infrastructure",
    developer: "Build semantic AI-ready websites",
    customer: "Turn visitors into intelligent outcomes",
    ai_agent: "Machine-readable web experiences",
  }

  return (
    <section className="py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <p className="text-zinc-500 mb-4">
          Intent detected: {intent}
        </p>

        <h1 className="text-7xl font-bold leading-tight max-w-5xl bg-gradient-to-r from-white via-zinc-300 to-zinc-600 text-transparent bg-clip-text">
          {titles[intent]}
        </h1>

        <p className="mt-8 text-zinc-400 text-xl max-w-2xl leading-9">
          Websites that dynamically adapt for humans,
          AI agents, semantic crawlers, and GEO systems.
        </p>

        <div className="flex gap-4 mt-10">
            <a
                href="#dashboard"
                className="bg-white text-black px-6 py-3 rounded-2xl font-medium"
            >
                Generate Adaptive Experience
            </a>

            <a
                href="#semantic"
                className="border border-zinc-700 px-6 py-3 rounded-2xl hover:bg-zinc-900"
            >
            Inspect AI Context
          </a>
        </div>
      </motion.div>
    </section>
  )
}