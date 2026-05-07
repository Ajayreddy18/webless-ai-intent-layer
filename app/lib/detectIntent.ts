export function detectIntent(source: string) {
  const lower = source.toLowerCase()

  if (
    lower.includes("github") ||
    lower.includes("stack") ||
    lower.includes("api")
  ) {
    return "developer"
  }

  if (
    lower.includes("invest") ||
    lower.includes("vc") ||
    lower.includes("pitch")
  ) {
    return "investor"
  }

  if (
    lower.includes("chatgpt") ||
    lower.includes("claude") ||
    lower.includes("gemini")
  ) {
    return "ai_agent"
  }

  return "customer"
}