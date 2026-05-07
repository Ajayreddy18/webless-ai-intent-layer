"use client"

import { motion } from "framer-motion"

export default function SemanticPanel({
  intent,
}: {
  intent: string
}) {
  const semanticData = {
    company: "Webless",
    intent_detected: intent,
    ai_readability_score: "94%",
    geo_optimization: "High",
    semantic_depth: "Advanced",
    crawler_visibility: "Optimized",
    semantic_topics: [
      "AI-native websites",
      "adaptive GEO",
      "semantic interfaces",
    ],
  }

  return (
    <motion.section id="semantic"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              AI Semantic Layer
            </h2>

            <p className="text-zinc-500 mt-2">
              Real-time machine-readable context
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full text-green-400">
            Live
          </div>
        </div>

        <div className="bg-black/70 border border-zinc-800 rounded-2xl p-6">
          <pre className="text-green-400 overflow-auto leading-8 text-sm">
            {JSON.stringify(semanticData, null, 2)}
          </pre>
        </div>
      </div>
    </motion.section>
  )
}