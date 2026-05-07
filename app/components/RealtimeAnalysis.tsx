"use client"

import { useEffect, useState } from "react"

const steps = [
  "Scanning semantic structure...",
  "Analyzing visitor intent...",
  "Optimizing GEO layers...",
  "Generating AI-readable metadata...",
  "Reordering adaptive sections...",
]

export default function RealtimeAnalysis() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

        <p className="text-cyan-300">
          {steps[current]}
        </p>
      </div>
    </div>
  )
}