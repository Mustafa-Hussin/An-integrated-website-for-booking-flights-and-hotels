"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  Compass, 
  Mountain, 
  Waves, 
  Tent, 
  Camera, 
  Utensils,
  Clock,
  Users,
  MapPin,
  Star
} from "lucide-react";

const categories = [
  {
    id: "adventures",
    label: "مغامرات",
    icon: Mountain,
  },
  {
    id: "water",
    label: "أنشطة مائية",
    icon: Waves,
  },
  {
    id: "culture",
    label: "ثقافة وفنون",
    icon: Camera,
  },
  {
    id: "food",
    label: "تجارب طعام",
    icon: Utensils,
  },
];

const activities = {
  adventures: [
    {
      id: 1,
      title: "تسلق جبال الألب",
      description: "مغامرة تسلق مثيرة في جبال الألب السويسرية",
      price: 799,
      duration: "يوم كامل",
      groupSize: "4-8 أشخاص",
      location: "سويسرا",
      rating: 4.8,
      image: "/activities/climbing.jpg",
      features: ["معدات متكاملة", "مدرب محترف", "وجبة غداء", "نقل"],
      difficulty: "متقدم",
    },
    {
      id: 2,
      title: "سفاري صحراوي",
      description: "مغامرة صحراوية مع ركوب الدراجات الرباعية",
      price: 499,
      duration: "نصف يوم",
      groupSize: "2-6 أشخاص",
      location: "دبي",
      rating: 4.9,
      image: "/activities/safari.jpg",
      features: ["دراجات رباعية", "عشاء بدوي", "عرض تنورة", "التقاط صور"],
      difficulty: "متوسط",
    },
  ],
  water: [
    {
      id: 3,
      title: "الغوص في المالديف",
      description: "استكشف الحياة البحرية الخلابة في المالديف",
      price: 899,
      duration: "يوم كامل",
      groupSize: "2-4 أشخاص",
      location: "المالديف",
      rating: 4.9,
      image: "/activities/diving.jpg",
      features: ["معدات غوص", "مدرب محترف", "قارب خاص", "غداء"],
      difficulty: "متوسط",
    },
    {
      id: 4,
      title: "ركوب الأمواج",
      description: "تعلم ركوب الأمواج في أجمل شواطئ بالي",
      price: 299,
      duration: "3 ساعات",
      groupSize: "4-6 أشخاص",
      location: "بالي",
      rating: 4.7,
      image: "/activities/surfing.jpg",
      features: ["لوح ركوب", "مدرب خاص", "مشروبات", "صور"],
      difficulty: "مبتدئ",
    },
  ],
  culture: [
    {
      id: 5,
      title: "جولة في كيوتو التقليدية",
      description: "اكتشف الثقافة اليابانية العريقة",
      price: 599,
      duration: "يوم كامل",
      groupSize: "6-10 أشخاص",
      location: "اليابان",
      rating: 4.8,
      image: "/activities/kyoto.jpg",
      features: ["زي كيمونو", "شاي تقليدي", "مرشد محلي", "غداء"],
      difficulty: "سهل",
    },
  ],
  food: [
    {
      id: 6,
      title: "تجربة طهي إيطالية",
      description: "تعلم صنع الباستا والبيتزا التقليدية",
      price: 399,
      duration: "4 ساعات",
      groupSize: "4-8 أشخاص",
      location: "روما",
      rating: 4.9,
      image: "/activities/cooking.jpg",
      features: ["مكونات طازجة", "شيف محترف", "عشاء", "كتاب وصفات"],
      difficulty: "سهل",
    },
  ],
};

export default function ActivitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("adventures");

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">أنشطة وتجارب فريدة</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              اكتشف مجموعة متنوعة من الأنشطة والتجارب الفريدة في وجهتك المفضلة.
              من المغامرات المثيرة إلى التجارب الثقافية الغنية.
            </p>
          </div>

          <Tabs defaultValue="adventures" className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map(({ id, label, icon: Icon }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="flex items-center gap-2"
                  onClick={() => setSelectedCategory(id)}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map(({ id }) => (
              <TabsContent key={id} value={id}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activities[id].map((activity) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="overflow-hidden h-full flex flex-col">
                        <div className="aspect-video relative bg-muted">
                          {/* صورة النشاط */}
                          <Badge className="absolute top-4 right-4">
                            {activity.difficulty}
                          </Badge>
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold">{activity.title}</h3>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              <span className="text-sm mr-1">{activity.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{activity.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 ml-2" />
                              <span className="text-sm">{activity.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 ml-2" />
                              <span className="text-sm">{activity.groupSize}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 ml-2" />
                              <span className="text-sm">{activity.location}</span>
                            </div>
                          </div>
                          
                          <div className="border-t pt-4 mt-auto">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex flex-wrap gap-2">
                                {activity.features.map((feature) => (
                                  <Badge key={feature} variant="secondary">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-2xl font-bold">{activity.price} ر.س</span>
                                <span className="text-sm text-muted-foreground mr-1">/ للشخص</span>
                              </div>
                              <Button>
                                احجز الآن
                                <Compass className="h-4 w-4 mr-2" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Compass className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">تجارب فريدة</h3>
              <p className="text-sm text-muted-foreground">
                اختر من بين مجموعة متنوعة من الأنشطة الفريدة والمميزة
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">مرشدون محترفون</h3>
              <p className="text-sm text-muted-foreground">
                استمتع بتجربتك مع مرشدين محترفين وذوي خبرة
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">تقييمات ممتازة</h3>
              <p className="text-sm text-muted-foreground">
                جميع أنشطتنا حاصلة على تقييمات عالية من المسافرين
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
