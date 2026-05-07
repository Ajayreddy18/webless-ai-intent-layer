import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()

  const message = body.message.toLowerCase()

  let intent = "customer"

  if (
    message.includes("api") ||
    message.includes("sdk") ||
    message.includes("developer") ||
    message.includes("integration")
  ) {
    intent = "developer"
  }

  else if (
    message.includes("revenue") ||
    message.includes("growth") ||
    message.includes("traction") ||
    message.includes("invest")
  ) {
    intent = "investor"
  }

  else if (
    message.includes("seo") ||
    message.includes("traffic") ||
    message.includes("conversion")
  ) {
    intent = "customer"
  }

  return NextResponse.json({
    intent,
  })
}