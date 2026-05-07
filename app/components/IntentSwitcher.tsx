export default function IntentSwitcher({
  selectedIntent,
  setIntent,
}: {
  selectedIntent: string
  setIntent: (value: string) => void
}) {
  const labels: Record<string, string> = {
    investor: "Investor",
    developer: "Developer",
    customer: "Customer",
    ai_agent: "AI Agent",
  }

  return (
    <div className="flex flex-wrap gap-4 px-6 py-6 justify-center">
      {Object.entries(labels).map(([intent, label]) => (
        <button
          key={intent}
          onClick={() => setIntent(intent)}
          className={`px-5 py-2 rounded-full border transition-all duration-300 ${
            selectedIntent === intent
            ? "bg-white text-black border-white"
            : "bg-zinc-900 border-zinc-700 hover:bg-white hover:text-black"
          }`}
        >
          {labels[intent]}
        </button>
      ))}
    </div>
  )
}