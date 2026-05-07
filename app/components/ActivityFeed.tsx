"use client"

import { useEffect, useState } from "react"

const logs = [
  "Semantic metadata generated",
  "AI crawler interaction detected",
  "Intent confidence updated to 94%",
  "Adaptive GEO optimization applied",
  "Structured entities indexed",
  "Developer intent classification completed",
]

export default function ActivityFeed() {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setItems((prev) => [
        logs[i % logs.length],
        ...prev.slice(0, 4),
      ])

      i++
    }, 1800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Real-Time AI Activity
          </h2>

          <div className="flex items-center gap-2 text-green-400">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live
          </div>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 border border-zinc-800 rounded-2xl p-4 text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}