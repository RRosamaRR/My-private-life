"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, ExternalLink, Music, Calendar, User } from "lucide-react"

interface Song {
  id: number
  title: string
  artist: string
  genre: string
  year: number
  duration: string
  youtubeUrl: string
  audioUrl: string
  coverImage: string
  description: string
}

const favoriteSongs: Song[] = [
  {
    id: 1,
    title: "Sicko Mode",
    artist: "Travis Scott",
    genre: "Hip-Hop",
    year: 2018,
    duration: "5:12",
    youtubeUrl: "https://www.youtube.com/watch?v=6ONRf7h3Mdk",
    audioUrl: "/audio/2.mp3",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    description: "أغنية رائعة تجمع بين الإيقاع القوي والكلمات المميزة",
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Synthwave",
    year: 2019,
    duration: "3:20",
    youtubeUrl: "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
    audioUrl: "/audio/3.mp3",
    coverImage: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=300&h=300&fit=crop",
    description: "أغنية إلكترونية مذهلة مع لحن لا يُنسى",
  },
  {
    id: 3,
    title: "God's Plan",
    artist: "Drake",
    genre: "Hip-Hop",
    year: 2018,
    duration: "3:19",
    youtubeUrl: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
    audioUrl: "/audio/4.mp3",
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
    description: "رسالة إيجابية مع إيقاع مميز",
  },
  {
    id: 4,
    title: "Lofi Hip Hop Mix",
    artist: "ChilledCow",
    genre: "Lofi",
    year: 2020,
    duration: "1:00:00",
    youtubeUrl: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    audioUrl: "/audio/5.mp3",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    description: "موسيقى هادئة مثالية للدراسة والتركيز",
  },
  {
    id: 5,
    title: "Sunflower",
    artist: "Post Malone",
    genre: "Pop",
    year: 2018,
    duration: "2:38",
    youtubeUrl: "https://www.youtube.com/watch?v=ApXoWvfEYVU",
    audioUrl: "/audio/6.mp3",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    description: "أغنية مليئة بالطاقة الإيجابية",
  },
  {
    id: 6,
    title: "Lucid Dreams",
    artist: "Juice WRLD",
    genre: "Hip-Hop",
    year: 2018,
    duration: "3:59",
    youtubeUrl: "https://www.youtube.com/watch?v=mzB1VGEGcSU",
    audioUrl: "/audio/7.mp3",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    description: "أغنية عاطفية مع كلمات عميقة",
  },
  {
    id: 7,
    title: "Rockstar",
    artist: "Post Malone ft. 21 Savage",
    genre: "Hip-Hop",
    year: 2017,
    duration: "3:38",
    youtubeUrl: "https://www.youtube.com/watch?v=UceaB4D0jpo",
    audioUrl: "/audio/8.mp3",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    description: "أغنية قوية مع إيقاع جذاب",
  },
  {
    id: 8,
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Pop",
    year: 2017,
    duration: "3:53",
    youtubeUrl: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    audioUrl: "/audio/9.mp3",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    description: "أغنية رومانسية مع لحن جميل",
  },
  {
    id: 9,
    title: "Old Town Road",
    artist: "Lil Nas X",
    genre: "Country Rap",
    year: 2019,
    duration: "2:37",
    youtubeUrl: "https://www.youtube.com/watch?v=w2Ov5jzm3j8",
    audioUrl: "/audio/10.mp3",
    coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    description: "مزيج فريد من الكانتري والراب",
  },
]

export function MusicSection() {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null)
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({})

  const togglePlay = (songId: number) => {
    const audio = audioRefs.current[songId]

    if (currentPlaying === songId) {
      audio?.pause()
      setCurrentPlaying(null)
    } else {
      // Pause all other audios
      Object.values(audioRefs.current).forEach((a) => a?.pause())

      if (audio) {
        audio.play()
        setCurrentPlaying(songId)
      }
    }
  }

  const handleAudioEnd = (songId: number) => {
    if (currentPlaying === songId) {
      setCurrentPlaying(null)
    }
  }

  return (
    <section id="music" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="responsive-text-3xl lg:text-5xl font-bold text-center mb-8 text-gradient">
          🎵 قائمة الأغاني المفضلة
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          مجموعة مختارة من أفضل الأغاني التي أستمع إليها أثناء التصميم والدراسة
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteSongs.map((song) => (
            <Card
              key={song.id}
              className="card-bg border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="flex">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <img
                    src={song.coverImage || "/placeholder.svg"}
                    alt={song.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => togglePlay(song.id)}
                      className="text-white hover:text-cyan-400 hover:bg-cyan-500/20"
                    >
                      {currentPlaying === song.id ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </Button>
                  </div>
                </div>

                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{song.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <User className="h-4 w-4" />
                        {song.artist}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => window.open(song.youtubeUrl, "_blank")}
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                      {song.genre}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="h-3 w-3" />
                      {song.year}
                    </div>
                    <div className="text-xs text-gray-400">{song.duration}</div>
                  </div>

                  <p className="text-sm text-gray-300">{song.description}</p>
                </div>
              </div>

              <audio
                ref={(el) => {
                  if (el) audioRefs.current[song.id] = el
                }}
                src={song.audioUrl}
                onEnded={() => handleAudioEnd(song.id)}
                preload="none"
              />
            </Card>
          ))}
        </div>

        {/* Music Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-4">
              <Music className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyan-400 mb-1">500+</div>
              <div className="text-gray-300 text-sm">أغنية في المكتبة</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-magenta-400 mb-1">8</div>
              <div className="text-gray-300 text-sm">ساعات استماع يومياً</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-orange-400 mb-1">15</div>
              <div className="text-gray-300 text-sm">نوع موسيقي مختلف</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">2020</div>
              <div className="text-gray-300 text-sm">بداية الاستماع الجدي</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
