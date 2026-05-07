"use client"

import { motion } from "framer-motion"

export default function DeveloperView() {
  return (
    <motion.section id="api"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">
              Semantic APIs
            </h2>

            <p className="text-zinc-400 mt-2">
              AI-agent-ready structured infrastructure
            </p>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full text-cyan-400">
            Active
          </div>
        </div>

        <pre className="mt-8 bg-black/70 border border-zinc-800 p-6 rounded-2xl overflow-auto text-green-400">
{`POST /api/semantic-layer

{
  "page": "homepage",
  "intent": "developer",
  "semantic_depth": "high",
  "geo_ready": true
}`}
        </pre>
      </div>
    </motion.section>
  )
}