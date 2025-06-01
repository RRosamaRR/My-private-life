"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Heart, TreesIcon as Lungs, Brain, Activity, Droplet, Moon } from "lucide-react"

interface HealthMetric {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  value: string | number
  unit: string
  min: number
  max: number
  color: string
  description: string
}

export function HealthSection() {
  const [metrics, setMetrics] = useState<HealthMetric[]>([
    {
      id: "heartRate",
      title: "معدل ضربات القلب",
      icon: Heart,
      value: 72,
      unit: "bpm",
      min: 60,
      max: 100,
      color: "text-red-400",
      description: "معدل طبيعي وصحي",
    },
    {
      id: "breathing",
      title: "معدل التنفس",
      icon: Lungs,
      value: 16,
      unit: "نفس/دقيقة",
      min: 12,
      max: 20,
      color: "text-blue-400",
      description: "تنفس منتظم وهادئ",
    },
    {
      id: "bloodPressure",
      title: "ضغط الدم",
      icon: Activity,
      value: "118/76",
      unit: "mmHg",
      min: 90,
      max: 140,
      color: "text-green-400",
      description: "ضغط مثالي وصحي",
    },
    {
      id: "mood",
      title: "الحالة المزاجية",
      icon: Brain,
      value: 85,
      unit: "%",
      min: 0,
      max: 100,
      color: "text-yellow-400",
      description: "مزاج إيجابي ومتفائل",
    },
    {
      id: "stress",
      title: "مستوى التوتر",
      icon: Brain,
      value: 23,
      unit: "%",
      min: 0,
      max: 100,
      color: "text-orange-400",
      description: "مستوى توتر منخفض",
    },
    {
      id: "sleep",
      title: "جودة النوم",
      icon: Moon,
      value: 87,
      unit: "%",
      min: 0,
      max: 100,
      color: "text-purple-400",
      description: "نوم عميق ومريح",
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prevMetrics) =>
        prevMetrics.map((metric) => {
          let newValue: string | number = metric.value

          switch (metric.id) {
            case "heartRate":
              newValue = Math.floor(Math.random() * (85 - 65 + 1)) + 65
              break
            case "breathing":
              newValue = Math.floor(Math.random() * (18 - 14 + 1)) + 14
              break
            case "bloodPressure":
              const systolic = Math.floor(Math.random() * (125 - 115 + 1)) + 115
              const diastolic = Math.floor(Math.random() * (80 - 70 + 1)) + 70
              newValue = `${systolic}/${diastolic}`
              break
            case "mood":
              newValue = Math.floor(Math.random() * (95 - 75 + 1)) + 75
              break
            case "stress":
              newValue = Math.floor(Math.random() * (35 - 15 + 1)) + 15
              break
            case "sleep":
              newValue = Math.floor(Math.random() * (95 - 80 + 1)) + 80
              break
          }

          return { ...metric, value: newValue }
        }),
      )
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const getProgressValue = (metric: HealthMetric): number => {
    if (typeof metric.value === "string") {
      if (metric.id === "bloodPressure") {
        const systolic = Number.parseInt(metric.value.split("/")[0])
        return ((systolic - 90) / (140 - 90)) * 100
      }
      return 50
    }
    return ((metric.value - metric.min) / (metric.max - metric.min)) * 100
  }

  return (
    <section id="health" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="responsive-text-3xl lg:text-5xl font-bold text-center mb-16 text-gradient">
          حالتي الصحية المباشرة
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {metrics.map((metric) => (
            <Card
              key={metric.id}
              className="card-bg border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <metric.icon className={`h-6 w-6 ${metric.color} health-pulse`} />
                  <span className="text-cyan-400">{metric.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${metric.color} mb-1`}>
                      {metric.value}
                      <span className="text-lg text-gray-400 mr-1">{metric.unit}</span>
                    </div>
                    <div className="text-sm text-gray-400">{metric.description}</div>
                  </div>
                  <Progress value={getProgressValue(metric)} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Medical Notes */}
        <Card className="card-bg border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
              <Droplet className="h-6 w-6" />
              الملاحظات الطبية والصحية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-magenta-400">المعلومات الأساسية</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    زمرة الدم: O+ (متبرع عام)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    الطول: 175 سم
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    الوزن: 70 كيلو
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    مؤشر كتلة الجسم: 22.9 (طبيعي)
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-magenta-400">الحالات والملاحظات</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    حساسية من الغبار (تظهر في الربيع)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    فحوصات دورية كل 6 أشهر
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    متابعة مع طبيب باطنية سنوياً
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    مكملات فيتامين د (5000 وحدة يومياً)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    تمارين تنفس يومية لمقاومة التوتر
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
