"use client"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="floating absolute top-1/4 right-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="floating absolute top-1/2 left-1/4 w-32 h-32 bg-magenta-400/20 rounded-full blur-xl"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="floating absolute bottom-1/4 right-1/3 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="responsive-text-4xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient">أسامة بشير حسين علي الددادَة</span>
          </h1>

          <h2 className="responsive-text-xl lg:text-3xl text-cyan-400 mb-8 font-semibold">
            مصمم ثلاثي الأبعاد | طالب طب | مبدع في عالم الألعاب
          </h2>

          <p className="responsive-text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed px-2 sm:px-4">
            مرحبًا بك في عالمي الشامل! أنا أسامة، شاب سعودي مولود في القريات عام 2004، طالب طب بشري في السنة الأولى،
            ومصمم ثلاثي الأبعاد محترف. هذا الموقع يمثل رحلتي، إنجازاتي، شغفي، وتفاصيل حياتي الكاملة التي تجمع بين الطب
            والتصميم والألعاب.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 flex-wrap">
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/30 hover:bg-blue-500/20 transition-all duration-300 group"
            >
              <svg
                className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm text-gray-300">Facebook</span>
            </button>
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/30 hover:bg-red-500/20 transition-all duration-300 group"
            >
              <svg
                className="h-8 w-8 text-red-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="text-sm text-gray-300">YouTube</span>
            </button>
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/30 hover:bg-pink-500/20 transition-all duration-300 group"
            >
              <svg
                className="h-8 w-8 text-pink-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span className="text-sm text-gray-300">TikTok</span>
            </button>
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/30 hover:bg-yellow-500/20 transition-all duration-300 group"
            >
              <svg
                className="h-8 w-8 text-yellow-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
              <span className="text-sm text-gray-300">Snapchat</span>
            </button>
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/30 hover:bg-gray-500/20 transition-all duration-300 group"
            >
              <svg
                className="h-8 w-8 text-gray-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-sm text-gray-300">X</span>
            </button>
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/30 hover:bg-cyan-500/20 transition-all duration-300 group"
            >
              <svg
                className="h-8 w-8 text-cyan-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span className="text-sm text-gray-300">Telegram</span>
            </button>
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/30 hover:bg-purple-500/20 transition-all duration-300 group"
            >
              <svg
                className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-sm text-gray-300">Instagram</span>
            </button>
            <button
              onClick={() => window.open("#", "_blank")}
              className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/30 hover:bg-green-500/20 transition-all duration-300 group"
            >
              <svg
                className="h-8 w-8 text-green-400 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span className="text-sm text-gray-300">WhatsApp</span>
            </button>
          </div>

          <button
            onClick={() => scrollToSection("cv")}
            className="animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
