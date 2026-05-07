"use client"

import { motion } from "framer-motion"

export default function AgentBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto mt-6 max-w-4xl"
    >
      <div className="bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3 flex items-center justify-center gap-3">
        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

        <p className="text-green-300 text-sm">
          AI Agent Detected • Semantic optimization enabled
        </p>
      </div>
    </motion.div>
  )
}