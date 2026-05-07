"use client"

import { motion } from "framer-motion"

export default function CrawlerSimulation({
  intent,
}: {
  intent: string
}) {
  const contentMap = {
    investor: [
      "✓ Intent identified: Investor",
      "✓ Revenue metrics indexed",
      "✓ Growth signals extracted",
      "✓ Fundraising relevance detected",
    ],

    developer: [
      "✓ Intent identified: Developer",
      "✓ API documentation indexed",
      "✓ SDK relevance extracted",
      "✓ Semantic API metadata detected",
    ],

    customer: [
      "✓ Intent identified: Customer",
      "✓ Conversion paths optimized",
      "✓ GEO metadata extracted",
      "✓ Personalized CTA generated",
    ],

    ai_agent: [
      "✓ AI crawler detected",
      "✓ Semantic graph extracted",
      "✓ Machine-readable entities indexed",
      "✓ Structured metadata processed",
    ],
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto px-6 py-12"
    >
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              Semantic Crawler Simulation
            </h2>

            <p className="text-zinc-500 mt-2">
              AI agents interpreting structured website context
            </p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full text-purple-400">
            Crawling
          </div>
        </div>

        <div className="space-y-4">
          {contentMap[intent as keyof typeof contentMap].map(
            (item) => (
              <div
                key={item}
                className="bg-black/50 border border-zinc-800 rounded-2xl p-4"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </motion.section>
  )
}