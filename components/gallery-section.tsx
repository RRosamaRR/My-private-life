"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Calendar, MapPin } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "تصميم داخلي لمطعم فاخر",
    description: "مشروع تصميم داخلي متكامل لمطعم في الرياض مع إضاءة ديناميكية وأثاث عصري",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "تصميم داخلي",
    year: "2024",
    location: "الرياض",
    software: ["3ds Max", "V-Ray", "Photoshop"],
    client: "مطعم الأصالة",
  },
  {
    id: 2,
    title: "بيئة خيالية للألعاب",
    description: "تصميم بيئة خيالية متكاملة باستخدام Unreal Engine 5 مع تأثيرات بصرية متقدمة",
    image:
      "https://images.unsplash.com/photo-1633287387306-f08b4b3671c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "تطوير ألعاب",
    year: "2023",
    location: "مشروع شخصي",
    software: ["Unreal Engine 5", "Blender", "Substance Painter"],
    client: "مشروع شخصي",
  },
  {
    id: 3,
    title: "فيلا سكنية حديثة",
    description: "تصميم معماري وداخلي لفيلا سكنية بطراز حديث مع حديقة وحمام سباحة",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "تصميم معماري",
    year: "2024",
    location: "الرياض - حي الرحمانية",
    software: ["SketchUp", "V-Ray", "AutoCAD"],
    client: "عميل خاص",
  },
]

const categories = ["الكل", "تصميم داخلي", "تطوير ألعاب", "تصميم معماري"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "الكل" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="responsive-text-3xl lg:text-5xl font-bold text-center mb-8 text-gradient\">هنا</h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          مجموعة مختارة من أفضل أعمالي في التصميم ثلاثي الأبعاد وتطوير الألعاب
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-cyan-500 text-black hover:bg-cyan-600"
                  : "border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="card-bg border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400"
                        onClick={() => setSelectedItem(item)}
                      >
                        <Eye className="h-6 w-6" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-black/95 border-cyan-500/20">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-cyan-400">{selectedItem?.title}</DialogTitle>
                      </DialogHeader>
                      {selectedItem && (
                        <div className="space-y-6">
                          <div className="relative h-96 rounded-lg overflow-hidden">
                            <Image
                              src={selectedItem.image || "/placeholder.svg"}
                              alt={selectedItem.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <p className="text-gray-300 leading-relaxed">{selectedItem.description}</p>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Calendar className="h-4 w-4" />
                                {selectedItem.year}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <MapPin className="h-4 w-4" />
                                {selectedItem.location}
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-cyan-400 font-semibold mb-2">البرامج المستخدمة:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedItem.software.map((software, index) => (
                                    <Badge key={index} variant="outline" className="border-cyan-500/50 text-cyan-400">
                                      {software}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-cyan-400 font-semibold mb-2">العميل:</h4>
                                <p className="text-gray-300">{selectedItem.client}</p>
                              </div>
                              <div>
                                <h4 className="text-cyan-400 font-semibold mb-2">التصنيف:</h4>
                                <Badge className="bg-magenta-500/20 text-magenta-400">{selectedItem.category}</Badge>
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
                    <Badge className="bg-cyan-500/20 text-cyan-400">{item.category}</Badge>
                    <span className="text-sm text-gray-400">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm overflow-hidden text-ellipsis">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">150+</div>
              <div className="text-gray-300">مشروع منجز</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-magenta-400 mb-2">50+</div>
              <div className="text-gray-300">عميل راضي</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">9</div>
              <div className="text-gray-300">سنوات خبرة</div>
            </CardContent>
          </Card>
          <Card className="card-bg border-cyan-500/20 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">22</div>
              <div className="text-gray-300">برنامج متقن</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
