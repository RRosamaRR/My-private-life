"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-black/90 backdrop-blur-md border-t border-cyan-500/20 z-40 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden glow-primary">
              <Image src="/placeholder.svg?height=32&width=32" alt="MW Logo" fill className="object-cover" />
            </div>
            <span className="text-white font-medium">جميع الحقوق محفوظة لـ MW 2025</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
