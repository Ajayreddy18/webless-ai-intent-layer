"use client"

import { useState } from "react"

export default function AIAssistant({
  setIntent,
}: {
  setIntent: (intent: string) => void
}) {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function analyzeIntent() {
    setLoading(true)

    const res = await fetch("/api/ai-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    })

    const data = await res.json()
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setIntent(data.intent)
    setMessage("")

    setLoading(false)
  }

  const suggestions = [
  "I want API documentation",
  "Show investor metrics",
  "How does GEO optimization work?",
]

  return (
    <div className="fixed bottom-6 right-6 bg-white text-black p-5 rounded-3xl shadow-2xl w-96 border border-zinc-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-lg">
            AI Website Assistant
          </p>

          <p className="text-sm text-zinc-500">
            Adaptive intent engine
          </p>
        </div>

        <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
      </div>

      <div className="mt-5">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you trying to accomplish?"
          className="w-full border border-zinc-300 rounded-2xl px-4 py-3 min-h-[120px] outline-none"
        />
      </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setMessage(suggestion)}
              className="text-xs bg-zinc-100 px-3 py-2 rounded-full"            >
              {suggestion}
            </button>
          ))}
        </div>

      <button
        onClick={analyzeIntent}
        disabled={loading}
        className="w-full mt-4 bg-black text-white py-3 rounded-2xl hover:opacity-90"
      >
        {loading ? "Analyzing..." : "Analyze Intent"}
      </button>
    </div>
  )
}