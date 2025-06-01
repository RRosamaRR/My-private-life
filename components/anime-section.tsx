"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Star, Calendar, Play, Eye, Heart } from "lucide-react"

interface Anime {
  id: number
  title: string
  titleArabic: string
  genre: string[]
  year: number
  episodes: number
  rating: number
  status: string
  studio: string
  image: string
  description: string
  favoriteCharacter: string
  watchedTimes: number
  personalRating: number
}

const favoriteAnimes: Anime[] = [
  {
    id: 1,
    title: "Berserk",
    titleArabic: "بيرسيرك",
    genre: ["Dark Fantasy", "Action", "Drama"],
    year: 1997,
    episodes: 25,
    rating: 9.0,
    status: "مكتمل",
    studio: "OLM",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    description:
      "قصة ملحمية مظلمة تتبع رحلة المحارب جاتس في عالم قاسي مليء بالوحوش والخيانة. أنمي يستكشف أعماق الطبيعة البشرية والصراع من أجل البقاء.",
    favoriteCharacter: "Guts",
    watchedTimes: 5,
    personalRating: 10,
  },
  {
    id: 2,
    title: "Attack on Titan",
    titleArabic: "هجوم العمالقة",
    genre: ["Action", "Drama", "Fantasy"],
    year: 2013,
    episodes: 87,
    rating: 9.0,
    status: "مكتمل",
    studio: "Mappa",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    description:
      "في عالم محاط بجدران عملاقة، يقاتل البشر من أجل البقاء ضد عمالقة آكلي البشر. قصة مليئة بالتشويق والمؤامرات.",
    favoriteCharacter: "Levi Ackerman",
    watchedTimes: 3,
    personalRating: 9,
  },
  {
    id: 3,
    title: "Demon Slayer",
    titleArabic: "قاتل الشياطين",
    genre: ["Action", "Supernatural", "Historical"],
    year: 2019,
    episodes: 44,
    rating: 8.7,
    status: "مستمر",
    studio: "Ufotable",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    description: "تانجيرو كامادو يسعى لإنقاذ أخته التي تحولت إلى شيطان، في رحلة مليئة بالقتال والتضحية.",
    favoriteCharacter: "Tanjiro Kamado",
    watchedTimes: 2,
    personalRating: 8,
  },
  {
    id: 4,
    title: "One Piece",
    titleArabic: "قطعة واحدة",
    genre: ["Adventure", "Comedy", "Action"],
    year: 1999,
    episodes: 1000,
    rating: 9.1,
    status: "مستمر",
    studio: "Toei Animation",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    description: "مونكي دي لوفي وطاقمه يبحثون عن الكنز الأسطوري 'ون بيس' في مغامرة لا تنتهي عبر البحار.",
    favoriteCharacter: "Roronoa Zoro",
    watchedTimes: 1,
    personalRating: 9,
  },
  {
    id: 5,
    title: "Naruto",
    titleArabic: "ناروتو",
    genre: ["Action", "Adventure", "Martial Arts"],
    year: 2002,
    episodes: 720,
    rating: 8.4,
    status: "مكتمل",
    studio: "Pierrot",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    description: "قصة الشاب ناروتو أوزوماكي الذي يحلم بأن يصبح هوكاجي قريته، رغم وجود وحش بداخله.",
    favoriteCharacter: "Itachi Uchiha",
    watchedTimes: 2,
    personalRating: 8,
  },
  {
    id: 6,
    title: "Death Note",
    titleArabic: "مذكرة الموت",
    genre: ["Psychological", "Thriller", "Supernatural"],
    year: 2006,
    episodes: 37,
    rating: 9.0,
    status: "مكتمل",
    studio: "Madhouse",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    description: "لايت ياجامي يجد مذكرة تمكنه من قتل أي شخص بكتابة اسمه، فيقرر تطهير العالم من المجرمين.",
    favoriteCharacter: "L",
    watchedTimes: 4,
    personalRating: 9,
  },
]

export function AnimeSection() {
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null)

  const totalEpisodes = favoriteAnimes.reduce((sum, anime) => sum + anime.episodes, 0)
  const averageRating =
    Math.round((favoriteAnimes.reduce((sum, anime) => sum + anime.personalRating, 0) / favoriteAnimes.length) * 10) / 10

  return (
    <section id="anime" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="responsive-text-3xl lg:text-5xl font-bold text-center mb-8 text-gradient">🎌 أفضل الأنمي لدي</h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          مجموعة مختارة من أفضل الأنمي التي شاهدتها وأثرت في شخصيتي وإبداعي
        </p>

        {/* Anime Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {favoriteAnimes.map((anime) => (
            <Card
              key={anime.id}
              className="card-bg border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={anime.image || "/placeholder.svg"}
                  alt={anime.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                    ⭐ {anime.personalRating}/10
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400"
                        onClick={() => setSelectedAnime(anime)}
                      >
                        <Eye className="h-6 w-6" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-black/95 border-cyan-500/20">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-cyan-400">{selectedAnime?.title}</DialogTitle>
                      </DialogHeader>
                      {selectedAnime && (
                        <div className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="relative h-96 rounded-lg overflow-hidden">
                              <Image
                                src={selectedAnime.image || "/placeholder.svg"}
                                alt={selectedAnime.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-bold text-cyan-400 mb-2">{selectedAnime.titleArabic}</h3>
                                <p className="text-gray-300 leading-relaxed">{selectedAnime.description}</p>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-cyan-400">السنة:</span>
                                  <span className="text-gray-300 mr-2">{selectedAnime.year}</span>
                                </div>
                                <div>
                                  <span className="text-cyan-400">الحلقات:</span>
                                  <span className="text-gray-300 mr-2">{selectedAnime.episodes}</span>
                                </div>
                                <div>
                                  <span className="text-cyan-400">الاستوديو:</span>
                                  <span className="text-gray-300 mr-2">{selectedAnime.studio}</span>
                                </div>
                                <div>
                                  <span className="text-cyan-400">الحالة:</span>
                                  <span className="text-gray-300 mr-2">{selectedAnime.status}</span>
                                </div>
                                <div>
                                  <span className="text-cyan-400">الشخصية المفضلة:</span>
                                  <span className="text-gray-300 mr-2">{selectedAnime.favoriteCharacter}</span>
                                </div>
                                <div>
                                  <span className="text-cyan-400">مرات المشاهدة:</span>
                                  <span className="text-gray-300 mr-2">{selectedAnime.watchedTimes}</span>
                                </div>
                              </div>
                              <div>
                                <span className="text-cyan-400 text-sm">الأنواع:</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {selectedAnime.genre.map((g, index) => (
                                    <Badge key={index} variant="outline" className="border-cyan-500/50 text-cyan-400">
                                      {g}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {anime.title}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">{anime.rating}</span>
                    </div>
                  </div>
                  <p className="text-cyan-400 text-sm">{anime.titleArabic}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {anime.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="h-4 w-4" />
                      {anime.episodes} حلقة
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-magenta-500/20 text-magenta-400">{anime.favoriteCharacter}</Badge>
                    <div className="flex items-center gap-1 text-orange-400">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{anime.watchedTimes}x</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Anime Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{favoriteAnimes.length}</div>
              <div className="text-gray-300">أنمي مفضل</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-magenta-400 mb-2">{totalEpisodes}</div>
              <div className="text-gray-300">حلقة مشاهدة</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">{averageRating}</div>
              <div className="text-gray-300">متوسط التقييم</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">2016</div>
              <div className="text-gray-300">بداية مشاهدة الأنمي</div>
            </CardContent>
          </Card>
        </div>

        {/* Favorite Character Spotlight */}
        <Card className="card-bg border-cyan-500/20 mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
              <Star className="h-6 w-6" />
              الشخصية المفضلة المطلقة: Guts من Berserk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  جاتس هو المحارب الأسطوري من أنمي Berserk، شخصية معقدة ومؤثرة تجسد الصراع الإنساني ضد القدر. قوته
                  الجسدية والعقلية، وإصراره على البقاء رغم كل المحن، يجعله مصدر إلهام حقيقي.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">محارب لا يقهر بسيف عملاق</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">شخصية معقدة ومتطورة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">رمز للإرادة والمقاومة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">تصميم شخصية أيقوني</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-magenta-400">لماذا Guts مميز؟</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  ما يجعل جاتس مميزاً ليس فقط قوته القتالية، بل عمق شخصيته النفسي. رحلته من طفل مهجور إلى محارب أسطوري
                  مليئة بالألم والنمو. إصراره على الحياة والقتال رغم كل الظروف المأساوية يجعله شخصية ملهمة حقاً. تأثيره
                  على الثقافة الشعبية والأنمي لا يمكن إنكاره.
                </p>
                <div className="flex items-center gap-4">
                  <Badge className="bg-red-500/20 text-red-400">Dark Fantasy</Badge>
                  <Badge className="bg-gray-500/20 text-gray-400">Anti-Hero</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400">Iconic</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
