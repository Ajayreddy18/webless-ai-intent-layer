"use client"

import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import InvestorView from "./components/InvestorView"
import DeveloperView from "./components/DeveloperView"
import CustomerView from "./components/CustomerView"
import SemanticPanel from "./components/SemanticPanel"
import IntentSwitcher from "./components/IntentSwitcher"
import AIAssistant from "./components/AIAssistant"
import GeoDashboard from "./components/GeoDashboard"
import GridBackground from "./components/GridBackground"
import AgentBanner from "./components/AgentBanner"
import RealtimeAnalysis from "./components/RealtimeAnalysis"
import CrawlerSimulation from "./components/CrawlerSimulation"
import ActivityFeed from "./components/ActivityFeed"

export default function Home() {
  const [intent, setIntent] = useState("customer")

  useEffect(() => {
    fetch("/api/detect-intent")
      .then((res) => res.json())
      .then((data) => {
        setIntent(data.intent)
      })
  }, [])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <GridBackground />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.15),transparent_40%)]" />

      <div className="relative z-10">
        <Navbar />

        <AgentBanner />
        <RealtimeAnalysis />

        <IntentSwitcher setIntent={setIntent} />

        <Hero intent={intent} />

        <GeoDashboard />
        <CrawlerSimulation intent={intent} />

        {intent === "investor" && <InvestorView />}
        {intent === "developer" && <DeveloperView />}
        {intent === "customer" && <CustomerView />}
        
        <SemanticPanel intent={intent} />
        <ActivityFeed />

        <AIAssistant setIntent={setIntent} />
      </div>
    </main>
  )
}