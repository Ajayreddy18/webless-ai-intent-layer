import { NextRequest, NextResponse } from "next/server"
import { detectIntent } from "@/app/lib/detectIntent"

export async function GET(req: NextRequest) {
  const referer = req.headers.get("referer") || ""

  const intent = detectIntent(referer)

  return NextResponse.json({
    intent,
    referer,
  })
}