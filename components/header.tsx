"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Volume2, VolumeX } from "lucide-react"
import { useAudio } from "@/hooks/use-audio"

const navItems = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#cv", label: "السيرة الذاتية" },
  { href: "#skills", label: "المهارات" },
  { href: "#gallery", label: "المعرض" },
  { href: "#health", label: "صحتي" },
  { href: "#friends", label: "الأحباب" },
  { href: "#food", label: "الأكلات" },
  { href: "#blog", label: "مدونتي" },
  { href: "#medical", label: "ملاحظات طبية" },
  { href: "#teaching", label: "ركن التعليم" },
  { href: "#stories", label: "قصصي" },
  { href: "#private", label: "الخاص" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const { isPlaying, toggle } = useAudio("/audio/1.mp3")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`relative w-full h-16 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-cyan-500/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden glow-primary">
            <Image src="/placeholder.svg?height=40&width=40" alt="أسامة" fill className="object-cover" />
          </div>
          <div className="text-lg md:text-xl font-bold text-gradient">أسامة | الموقع الجبار</div>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-4">
          {navItems.slice(0, 6).map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`px-3 py-2 rounded-full text-sm transition-all duration-300 ${
                activeSection === item.href.slice(1)
                  ? "bg-cyan-500/20 text-cyan-400 glow-primary"
                  : "text-white hover:text-cyan-400 hover:bg-cyan-500/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Audio Control & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="w-10 h-10 rounded-full bg-black/50 border border-cyan-500/50 hover:bg-cyan-500/20"
          >
            {isPlaying ? <Volume2 className="h-5 w-5 text-cyan-400" /> : <VolumeX className="h-5 w-5 text-cyan-400" />}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden">
                <div className="flex flex-col justify-center items-center w-6 h-6 gap-1">
                  <div className="w-6 h-0.5 bg-cyan-400 transform transition-all duration-300"></div>
                  <div className="w-6 h-0.5 bg-cyan-400 transform transition-all duration-300"></div>
                  <div className="w-6 h-0.5 bg-cyan-400 transform transition-all duration-300"></div>
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-black/95 border-cyan-500/20 backdrop-blur-md">
              <nav className="flex flex-col gap-2 mt-6">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`p-2.5 rounded-lg text-right transition-all duration-300 text-sm ${
                      activeSection === item.href.slice(1)
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 glow-primary"
                        : "text-white hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
