"use client"

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
      <div className="text-2xl font-bold">
        Webless AI Layer
      </div>

      <div className="flex gap-6 text-zinc-400">
        <a
          href="#api"
          className="hover:text-white transition"
        >
          Docs
        </a>

        <a
          href="#api"
          className="hover:text-white transition"
        >
          API
        </a>

        <a
          href="#dashboard"
          className="hover:text-white transition"
        >
          Dashboard
        </a>
      </div>
    </nav>
  )
}