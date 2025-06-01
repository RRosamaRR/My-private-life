"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Heart, GraduationCap, MapPin, Calendar, Droplet } from "lucide-react"

const personalInfo = [
  {
    icon: User,
    title: "المعلومات الشخصية",
    items: [
      { label: "الاسم الكامل", value: "أسامة بشير حسين علي الددادَة" },
      { label: "تاريخ الميلاد", value: "15 ديسمبر 2004 (20 سنة)" },
      { label: "مكان الولادة", value: "القريات، السعودية" },
      { label: "زمرة الدم", value: "O+" },
      { label: "الجنسية", value: "سعودي" },
      { label: "الإقامة الحالية", value: "الرياض، حي النسيم" },
      { label: "الحالة الاجتماعية", value: "أعزب" },
    ],
  },
  {
    icon: Heart,
    title: "الاهتمامات والهوايات",
    items: [
      { label: "الهوايات الأساسية", value: "تصميم 3D، ألعاب الفيديو، كرة السلة، كرة القدم، تمارين الكاليثنكس" },
      { label: "الألعاب المفضلة", value: "Call of Duty، Fortnite، FIFA، Genshin Impact، Valorant" },
      { label: "الموسيقى المفضلة", value: "Hip-hop، موسيقى الألعاب، موسيقى إلكترونية، Lofi" },
      { label: "الأنمي المفضل", value: "Attack on Titan، Demon Slayer، One Piece، Naruto" },
      { label: "الطعام المفضل", value: "المندي، البيتزا، المطبق، الأفوكادو، السوشي" },
      { label: "الكتب المفضلة", value: "كتب التشريح، كتب التصميم، روايات الخيال العلمي" },
    ],
  },
  {
    icon: GraduationCap,
    title: "التعليم والمؤهلات",
    items: [
      { label: "التخصص الحالي", value: "الطب البشري (السنة الأولى) - جامعة الملك سعود" },
      { label: "الشهادات المهنية", value: "دبلوم تصميم ثلاثي الأبعاد، شهادة Unreal Engine 5، شهادة Blender المتقدمة" },
      { label: "اللغات", value: "العربية (اللغة الأم)، الإنجليزية (متقدمة - IELTS 7.5)" },
      { label: "المهارات التقنية", value: "22 برنامج تصميم (Blender, 3ds Max, SketchUp, UE5, Maya, Cinema 4D...)" },
      { label: "الطموح المهني", value: "أن أصبح مصمم ألعاب عالمي ومتخصص في الواقع الافتراضي الطبي" },
      { label: "المعدل الأكاديمي", value: "4.2/5.0 في السنة التحضيرية" },
    ],
  },
]

const timelineEvents = [
  {
    year: "2004",
    icon: "👶",
    title: "البداية في القريات",
    description:
      "ولدت في مدينة القريات شمال السعودية في 15 ديسمبر، كنت الطفل الأول في عائلتي. قضيت طفولتي الأولى بين القريات والرياض حيث عمل والدي كمهندس مدني.",
    location: "القريات، السعودية",
  },
  {
    year: "2010-2016",
    icon: "🎮",
    title: "اكتشاف عالم التكنولوجيا",
    description:
      "بدأت شغفي بالألعاب والتكنولوجيا. كنت ألعب ألعاب البناء مثل Minecraft وأحلم بإنشاء عوالم خاصة بي. هذا ما زرع بذرة حب التصميم في قلبي.",
    location: "الرياض، السعودية",
  },
  {
    year: "2016",
    icon: "💻",
    title: "أول لمسة مع التصميم ثلاثي الأبعاد",
    description:
      "بداية رحلتي مع التصميم ثلاثي الأبعاد عندما حصلت على جهازي الأول. بدأت بتعلم SketchUp من خلال دروس على اليوتيوب، وأنشأت أول نموذج ثلاثي الأبعاد (كرسي بسيط). كان شعوراً لا يُوصف!",
    location: "الرياض، السعودية",
  },
  {
    year: "2017",
    icon: "🎨",
    title: "التطوير والإتقان",
    description:
      "توسعت في تعلم التصميم وأتقنت Blender و3ds Max. صممت أول مشروع متكامل (غرفة معيشة كاملة) وشاركته في منتديات التصميم العربية. حصلت على إعجاب كبير مما شجعني على المتابعة.",
    location: "الرياض، السعودية",
  },
  {
    year: "2018",
    icon: "💰",
    title: "أول مشروع ربحي",
    description:
      "أول مشروع ربحي: تصميم داخلي لمحل ملابس في الرياض. حققت منه 1500 ريال وكانت بداية عملي المحترف في التصميم. شعرت وقتها أنني أستطيع تحويل شغفي إلى مهنة حقيقية.",
    location: "الرياض، السعودية",
  },
  {
    year: "2019",
    icon: "🌍",
    title: "التوسع الإقليمي",
    description:
      "بدأت التسويق لأعمالي عبر الإنترنت وعملت مع عملاء من السعودية والإمارات والكويت. تخصصت في تصميم الواجهات التجارية والديكور الداخلي. أنشأت حسابات على منصات التواصل الاجتماعي.",
    location: "الخليج العربي",
  },
  {
    year: "2020-2021",
    icon: "📚",
    title: "فترة التحضير للجامعة",
    description:
      "ركزت على دراستي للثانوية العامة مع الاستمرار في التصميم كهواية. حصلت على معدل عالي أهلني لدخول كلية الطب. في نفس الوقت، طورت مهاراتي في برامج جديدة مثل Maya و Cinema 4D.",
    location: "الرياض، السعودية",
  },
  {
    year: "2022",
    icon: "🎮",
    title: "دخول عالم الألعاب والطب",
    description:
      "التحقت بكلية الطب في جامعة الملك سعود مع الاستمرار في التصميم. بدأت التعمق في صناعة الألعاب باستخدام Unreal Engine 5، وأنشأت أول نموذج بيئة لعب كاملة. اكتشفت شغفي بدمج الطب والتكنولوجيا.",
    location: "الرياض، السعودية",
  },
  {
    year: "2023",
    icon: "🏥",
    title: "التخصص في التصميم الطبي",
    description:
      "بدأت في دمج معرفتي الطبية مع مهاراتي في التصميم. أنشأت نماذج ثلاثية الأبعاد لأعضاء الجسم البشري لمساعدة زملائي في الدراسة. حصلت على تقدير من الأساتذة لإبداعي في هذا المجال.",
    location: "الرياض، السعودية",
  },
  {
    year: "2024",
    icon: "🚀",
    title: "مشاريع متقدمة",
    description:
      "عملت على مشاريع أكثر تعقيداً: تصميم فيلا سكنية كاملة في حي الرحمانية، وتطوير أصول ثلاثية الأبعاد للألعاب. بدأت في تعلم الذكاء الاصطناعي وتطبيقه في التصميم.",
    location: "الرياض، السعودية",
  },
  {
    year: "2025",
    icon: "🌟",
    title: "المستقبل والطموحات",
    description:
      "أنشأت هذا الموقع الشامل لتوثيق رحلتي ومشاركة معرفتي مع العالم. أعمل حالياً على تطوير لعبة ثلاثية الأبعاد بمفاهيم طبية فريدة تسمى 'MediVerse'. هدفي أن أصبح رائداً في مجال التكنولوجيا الطبية.",
    location: "الرياض، السعودية",
  },
]

const achievements = [
  { year: "2018", project: "تصميم داخلي لمحل ملابس في الرياض (أول مشروع ربحي - 1500 ريال)" },
  { year: "2019", project: "تصميم نماذج ثلاثية الأبعاد لموقع بيع أثاث إلكتروني (5000 ريال)" },
  { year: "2020", project: "تطوير واجهات ثلاثية الأبعاد لمعرض شركة هندسية في دبي (8000 ريال)" },
  { year: "2021", project: "تصميم ديكور لمطعم في الرياض مع جولة افتراضية (12000 ريال)" },
  { year: "2022", project: "تصميم بيئة لعب كاملة باستخدام Unreal Engine 5 (مشروع شخصي)" },
  { year: "2023", project: "إنشاء مكتبة نماذج طبية ثلاثية الأبعاد للجامعة (تطوعي)" },
  { year: "2024", project: "مشروع ديكور لفيلا سكنية في حي الرحمانية بالرياض (25000 ريال)" },
  { year: "2025", project: "تطوير أصول ثلاثية الأبعاد لمشروع لعبة مستقلة (قيد التطوير)" },
]

export function CVSection() {
  return (
    <section id="cv" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="responsive-text-3xl lg:text-5xl font-bold text-center mb-16 text-gradient">
          السيرة الذاتية الكاملة
        </h2>

        {/* Personal Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {personalInfo.map((section, index) => (
            <Card
              key={index}
              className="card-bg border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-cyan-400 text-lg">
                  <section.icon className="h-6 w-6" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-1">
                    <div className="text-sm text-cyan-300 font-medium flex items-center gap-2">
                      {item.label === "زمرة الدم" && <Droplet className="h-4 w-4" />}
                      {item.label === "مكان الولادة" && <MapPin className="h-4 w-4" />}
                      {item.label === "تاريخ الميلاد" && <Calendar className="h-4 w-4" />}
                      {item.label}:
                    </div>
                    <div className="text-gray-300 text-sm leading-relaxed">{item.value}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-12 text-center">رحلة حياتي التفصيلية</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-magenta-500 hidden lg:block"></div>

            <div className="space-y-6 lg:space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-6 ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}>
                    <Card className="card-bg border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{event.icon}</span>
                          <Badge variant="outline" className="border-cyan-500 text-cyan-400 font-bold">
                            {event.year}
                          </Badge>
                        </div>
                        <h4 className="text-xl font-bold text-cyan-400 mb-3">{event.title}</h4>
                        <p className="text-gray-300 leading-relaxed mb-3">{event.description}</p>
                        <div className="flex items-center gap-2 text-sm text-magenta-400">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-6 h-6 bg-magenta-500 rounded-full border-4 border-black glow-secondary z-10"></div>

                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <Card className="card-bg border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-2xl text-cyan-400 text-center">المشاريع والإنجازات البارزة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-all duration-300 hover:scale-105"
                >
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 shrink-0 font-bold">
                    {item.year}
                  </Badge>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.project}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
