"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Award, Gamepad2, Star } from "lucide-react"

interface GameStats {
  id: string
  name: string
  icon: string
  winRate: number
  kd: number
  hoursPlayed: number
  rank: string
  achievements: number
  totalAchievements: number
  favoriteMode: string
  bestStreak: number
  color: string
}

const gameStats: GameStats[] = [
  {
    id: "cod",
    name: "Call of Duty",
    icon: "🎯",
    winRate: 78,
    kd: 2.34,
    hoursPlayed: 1250,
    rank: "Master",
    achievements: 45,
    totalAchievements: 60,
    favoriteMode: "Search & Destroy",
    bestStreak: 25,
    color: "text-red-400",
  },
  {
    id: "fortnite",
    name: "Fortnite",
    icon: "🏆",
    winRate: 65,
    kd: 1.89,
    hoursPlayed: 890,
    rank: "Champion",
    achievements: 38,
    totalAchievements: 50,
    favoriteMode: "Solo",
    bestStreak: 12,
    color: "text-purple-400",
  },
  {
    id: "fifa",
    name: "FIFA 24",
    icon: "⚽",
    winRate: 72,
    kd: 0, // Not applicable for FIFA
    hoursPlayed: 650,
    rank: "Division 3",
    achievements: 28,
    totalAchievements: 40,
    favoriteMode: "Ultimate Team",
    bestStreak: 18,
    color: "text-green-400",
  },
  {
    id: "valorant",
    name: "Valorant",
    icon: "🔫",
    winRate: 68,
    kd: 52,
    hoursPlayed: 420,
    rank: "2nd Place Winner",
    achievements: 22,
    totalAchievements: 35,
    favoriteMode: "Competitive",
    bestStreak: 15,
    color: "text-cyan-400",
  },
  {
    id: "genshin",
    name: "Genshin Impact",
    icon: "⚔️",
    winRate: 0, // Not applicable
    kd: 0, // Not applicable
    hoursPlayed: 320,
    rank: "AR 58",
    achievements: 156,
    totalAchievements: 200,
    favoriteMode: "Exploration",
    bestStreak: 0, // Not applicable
    color: "text-yellow-400",
  },
  {
    id: "rocket",
    name: "Rocket League",
    icon: "🚗",
    winRate: 61,
    kd: 0, // Not applicable
    hoursPlayed: 280,
    rank: "Diamond II",
    achievements: 31,
    totalAchievements: 45,
    favoriteMode: "3v3 Standard",
    bestStreak: 9,
    color: "text-orange-400",
  },
]

export function GamingSection() {
  const totalHours = gameStats.reduce((sum, game) => sum + game.hoursPlayed, 0)
  const averageWinRate = Math.round(
    gameStats.filter((game) => game.winRate > 0).reduce((sum, game) => sum + game.winRate, 0) /
      gameStats.filter((game) => game.winRate > 0).length,
  )
  const totalAchievements = gameStats.reduce((sum, game) => sum + game.achievements, 0)

  return (
    <section id="gaming" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="responsive-text-3xl lg:text-5xl font-bold text-center mb-8 text-gradient">
          🎮 لوحة إنجازات الألعاب
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          إحصائيات مفصلة لأدائي في الألعاب المفضلة مع معدلات الفوز والإنجازات
        </p>

        {/* Game Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gameStats.map((game) => (
            <Card
              key={game.id}
              className="card-bg border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">{game.icon}</span>
                  <span className="text-cyan-400">{game.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Rank and Hours */}
                <div className="flex justify-between items-center">
                  <Badge
                    className={`${game.color.replace("text-", "bg-").replace("400", "500/20")} ${game.color} border-0`}
                  >
                    {game.rank}
                  </Badge>
                  <div className="text-sm text-gray-400">{game.hoursPlayed}h لعب</div>
                </div>

                {/* Win Rate */}
                {game.winRate > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">معدل الفوز</span>
                      <span className={`text-sm font-bold ${game.color}`}>{game.winRate}%</span>
                    </div>
                    <Progress value={game.winRate} className="h-2" />
                  </div>
                )}

                {/* K/D Ratio */}
                {game.kd > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">نسبة القتل/الموت</span>
                    <span className={`text-sm font-bold ${game.color}`}>{game.kd}</span>
                  </div>
                )}

                {/* Achievements */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">الإنجازات</span>
                    <span className={`text-sm font-bold ${game.color}`}>
                      {game.achievements}/{game.totalAchievements}
                    </span>
                  </div>
                  <Progress value={(game.achievements / game.totalAchievements) * 100} className="h-2" />
                </div>

                {/* Favorite Mode */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">النمط المفضل</span>
                  <span className="text-sm text-cyan-400">{game.favoriteMode}</span>
                </div>

                {/* Best Streak */}
                {game.bestStreak > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">أفضل سلسلة انتصارات</span>
                    <span className={`text-sm font-bold ${game.color}`}>{game.bestStreak}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Gaming Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <Gamepad2 className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-cyan-400 mb-2">{totalHours}</div>
              <div className="text-gray-300">ساعة لعب إجمالية</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-yellow-400 mb-2">{averageWinRate}%</div>
              <div className="text-gray-300">متوسط معدل الفوز</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-400 mb-2">{totalAchievements}</div>
              <div className="text-gray-300">إنجاز مفتوح</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <Star className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-400 mb-2">6</div>
              <div className="text-gray-300">لعبة نشطة</div>
            </CardContent>
          </Card>
        </div>

        {/* Gaming Achievements */}
        <Card className="card-bg border-cyan-500/20 mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
              <Trophy className="h-6 w-6" />
              الإنجازات البارزة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30">
                <div className="text-2xl">🏆</div>
                <div>
                  <div className="text-cyan-400 font-semibold">بطل Call of Duty</div>
                  <div className="text-sm text-gray-400">وصلت لرتبة Master في الموسم الحالي</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30">
                <div className="text-2xl">⚡</div>
                <div>
                  <div className="text-cyan-400 font-semibold">سلسلة انتصارات قياسية</div>
                  <div className="text-sm text-gray-400">25 انتصار متتالي في Call of Duty</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30">
                <div className="text-2xl">🎯</div>
                <div>
                  <div className="text-cyan-400 font-semibold">دقة عالية</div>
                  <div className="text-sm text-gray-400">نسبة قتل/موت 2.34 في Call of Duty</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30">
                <div className="text-2xl">🌟</div>
                <div>
                  <div className="text-cyan-400 font-semibold">جامع الإنجازات</div>
                  <div className="text-sm text-gray-400">أكثر من 300 إنجاز مفتوح</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30">
                <div className="text-2xl">🥈</div>
                <div>
                  <div className="text-cyan-400 font-semibold">المركز الثاني في البطولة</div>
                  <div className="text-sm text-gray-400">فوز بالمركز الثاني في بطولة Valorant غير رسمية</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-black/30">
                <div className="text-2xl">💀</div>
                <div>
                  <div className="text-cyan-400 font-semibold">رقم قياسي في القتل</div>
                  <div className="text-sm text-gray-400">52 قتلة في ماب Bind - مباراة غير مصنفة</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
