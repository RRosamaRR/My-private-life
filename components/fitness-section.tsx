"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Target, Trophy, Calendar, Activity, Timer } from "lucide-react"

interface FitnessGoal {
  id: string
  title: string
  target: number
  current: number
  unit: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  description: string
}

interface WorkoutSession {
  date: string
  type: string
  duration: number
  calories: number
  exercises: number
}

export function FitnessSection() {
  const [goals, setGoals] = useState<FitnessGoal[]>([
    {
      id: "pushups",
      title: "تمارين الضغط",
      target: 500,
      current: 320,
      unit: "عدة",
      icon: Dumbbell,
      color: "text-red-400",
      description: "هدف أسبوعي لتقوية عضلات الصدر",
    },
    {
      id: "pullups",
      title: "تمارين العقلة",
      target: 100,
      current: 75,
      unit: "عدة",
      icon: Target,
      color: "text-blue-400",
      description: "تقوية عضلات الظهر والذراعين",
    },
    {
      id: "cardio",
      title: "تمارين الكارديو",
      target: 300,
      current: 180,
      unit: "دقيقة",
      icon: Activity,
      color: "text-green-400",
      description: "تحسين اللياقة القلبية",
    },
    {
      id: "squats",
      title: "تمارين القرفصاء",
      target: 400,
      current: 280,
      unit: "عدة",
      icon: Trophy,
      color: "text-yellow-400",
      description: "تقوية عضلات الأرجل",
    },
  ])

  const weeklyWorkouts: WorkoutSession[] = [
    { date: "الأحد", type: "كاليثنكس", duration: 45, calories: 320, exercises: 8 },
    { date: "الاثنين", type: "كارديو", duration: 30, calories: 250, exercises: 5 },
    { date: "الثلاثاء", type: "قوة", duration: 60, calories: 400, exercises: 10 },
    { date: "الأربعاء", type: "راحة", duration: 0, calories: 0, exercises: 0 },
    { date: "الخميس", type: "كاليثنكس", duration: 50, calories: 350, exercises: 9 },
    { date: "الجمعة", type: "كارديو", duration: 35, calories: 280, exercises: 6 },
    { date: "السبت", type: "قوة", duration: 55, calories: 380, exercises: 8 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setGoals((prevGoals) =>
        prevGoals.map((goal) => ({
          ...goal,
          current: Math.min(goal.target, goal.current + Math.floor(Math.random() * 3)),
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100)
  }

  const totalCalories = weeklyWorkouts.reduce((sum, workout) => sum + workout.calories, 0)
  const totalDuration = weeklyWorkouts.reduce((sum, workout) => sum + workout.duration, 0)
  const activeDays = weeklyWorkouts.filter((workout) => workout.duration > 0).length

  return (
    <section id="fitness" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="responsive-text-3xl lg:text-5xl font-bold text-center mb-8 text-gradient">
          💪 نظام تتبع التمرينات
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          متابعة أهداف اللياقة البدنية وتتبع التقدم الأسبوعي في تمارين الكاليثنكس
        </p>

        {/* Weekly Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {goals.map((goal) => (
            <Card
              key={goal.id}
              className="card-bg border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <goal.icon className={`h-6 w-6 ${goal.color}`} />
                  <span className="text-cyan-400">{goal.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${goal.color} mb-1`}>
                      {goal.current}/{goal.target}
                      <span className="text-sm text-gray-400 mr-1">{goal.unit}</span>
                    </div>
                    <div className="text-sm text-gray-400">{goal.description}</div>
                  </div>
                  <Progress value={getProgressPercentage(goal.current, goal.target)} className="h-3" />
                  <div className="text-center">
                    <Badge
                      variant="outline"
                      className={`${goal.color.replace("text-", "border-").replace("400", "500/50")} ${goal.color}`}
                    >
                      {Math.round(getProgressPercentage(goal.current, goal.target))}% مكتمل
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weekly Activity */}
        <Card className="card-bg border-cyan-500/20 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
              <Calendar className="h-6 w-6" />
              النشاط الأسبوعي
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {weeklyWorkouts.map((workout, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center transition-all duration-300 ${
                    workout.duration > 0
                      ? "bg-cyan-500/20 border border-cyan-500/40 hover:bg-cyan-500/30"
                      : "bg-gray-500/20 border border-gray-500/40"
                  }`}
                >
                  <div className="text-sm font-semibold text-cyan-400 mb-2">{workout.date}</div>
                  <div className="text-xs text-gray-300 mb-2">{workout.type}</div>
                  {workout.duration > 0 ? (
                    <>
                      <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mb-1">
                        <Timer className="h-3 w-3" />
                        {workout.duration}د
                      </div>
                      <div className="text-xs text-orange-400">{workout.calories} سعرة</div>
                      <div className="text-xs text-magenta-400">{workout.exercises} تمارين</div>
                    </>
                  ) : (
                    <div className="text-xs text-gray-500">يوم راحة</div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <Activity className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-cyan-400 mb-2">{activeDays}</div>
              <div className="text-gray-300">أيام نشطة هذا الأسبوع</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <Timer className="h-12 w-12 text-magenta-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-magenta-400 mb-2">{totalDuration}</div>
              <div className="text-gray-300">دقيقة تمرين إجمالي</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <Trophy className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-400 mb-2">{totalCalories}</div>
              <div className="text-gray-300">سعرة حرارية محروقة</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
