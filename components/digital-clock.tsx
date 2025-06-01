"use client"

import { useEffect, useState } from "react"

export function DigitalClock() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute top-20 left-4 z-40 bg-black/60 backdrop-blur-sm rounded-lg p-3 border-2 border-red-500 text-center min-w-[120px] border-glow">
      <div className="text-cyan-400 font-bold text-lg font-mono">11:11</div>
      <div className="text-magenta-400 font-medium text-sm font-mono">2006/8/9</div>
      <div className="text-red-500 font-medium text-xs font-mono text-center mt-1 animate-pulse bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
        Start of pain, end of universe
      </div>
    </div>
  )
}
