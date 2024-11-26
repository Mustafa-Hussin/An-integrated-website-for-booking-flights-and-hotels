"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  MapPin,
  Sun,
  Umbrella,
  Calendar,
  Globe,
  Search,
  Clock,
  Plane,
  Building2,
  Utensils,
  Camera,
  Star,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "دبي",
    country: "الإمارات العربية المتحدة",
    description: "مدينة الأحلام والعمارة الحديثة",
    image: "/destinations/dubai.jpg",
    rating: 4.9,
    weather: "مشمس",
    temp: "32°C",
    bestTime: "نوفمبر إلى مارس",
    flightTime: "3 ساعات",
    currency: "درهم إماراتي",
    language: "العربية، الإنجليزية",
    highlights: [
      "برج خليفة",
      "دبي مول",
      "برج العرب",
      "المدينة القديمة",
      "سفاري صحراوي",
    ],
    activities: [
      "تسوق",
      "سياحة",
      "مغامرات",
      "رياضات مائية",
      "تجربة طعام",
    ],
  },
  {
    id: 2,
    name: "اسطنبول",
    country: "تركيا",
    description: "مدينة التاريخ والحضارات العريقة",
    image: "/destinations/istanbul.jpg",
    rating: 4.8,
    weather: "معتدل",
    temp: "22°C",
    bestTime: "أبريل إلى أكتوبر",
    flightTime: "4 ساعات",
    currency: "ليرة تركية",
    language: "التركية، الإنجليزية",
    highlights: [
      "آيا صوفيا",
      "القصر العثماني",
      "البازار الكبير",
      "مضيق البوسفور",
      "برج غالاتا",
    ],
    activities: [
      "سياحة ثقافية",
      "تسوق",
      "رحلات بحرية",
      "تجربة طعام",
      "حمامات تركية",
    ],
  },
  {
    id: 3,
    name: "المالديف",
    country: "جمهورية المالديف",
    description: "جنة الشواطئ والمياه الفيروزية",
    image: "/destinations/maldives.jpg",
    rating: 4.9,
    weather: "استوائي",
    temp: "29°C",
    bestTime: "ديسمبر إلى أبريل",
    flightTime: "6 ساعات",
    currency: "روفيه مالديفي",
    language: "الديفهي، الإنجليزية",
    highlights: [
      "الشواطئ البيضاء",
      "الشعاب المرجانية",
      "المنتجعات الفاخرة",
      "الرياضات المائية",
      "الغروب الساحر",
    ],
    activities: [
      "غوص",
      "سنوركل",
      "سبا",
      "رحلات بحرية",
      "رومانسية",
    ],
  },
];

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = destinations.filter(dest =>
    dest.name.includes(searchQuery) ||
    dest.country.includes(searchQuery) ||
    dest.description.includes(searchQuery)
  );

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">اكتشف وجهات سياحية مميزة</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              استكشف أجمل الوجهات السياحية حول العالم، واختر وجهتك القادمة من بين مجموعة
              من الأماكن الساحرة التي تناسب جميع الأذواق.
            </p>

            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="ابحث عن وجهتك المفضلة..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="aspect-video relative bg-muted">
                    {/* صورة الوجهة */}
                    <div className="absolute top-4 right-4 flex items-center bg-black/50 rounded-full px-2 py-1 text-white">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm mr-1">{destination.rating}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                      <p className="text-muted-foreground text-sm">{destination.country}</p>
                    </div>

                    <p className="text-muted-foreground mb-6">{destination.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Sun className="h-4 w-4 ml-2" />
                        <span className="text-sm">{destination.weather}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 ml-2" />
                        <span className="text-sm">{destination.bestTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 ml-2" />
                        <span className="text-sm">{destination.flightTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 ml-2" />
                        <span className="text-sm">{destination.language}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">أبرز المعالم</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {destination.highlights.map((highlight) => (
                          <Badge key={highlight} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      <h4 className="font-semibold mb-2">الأنشطة المتوفرة</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {destination.activities.map((activity) => (
                          <Badge key={activity} variant="outline">
                            {activity}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full mt-4">
                        استكشف الوجهة
                        <MapPin className="h-4 w-4 mr-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Plane className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">رحلات مباشرة</h3>
              <p className="text-sm text-muted-foreground">
                رحلات مباشرة إلى معظم الوجهات
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Building2 className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">إقامة فاخرة</h3>
              <p className="text-sm text-muted-foreground">
                فنادق ومنتجعات من فئة 5 نجوم
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Utensils className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">تجارب طعام</h3>
              <p className="text-sm text-muted-foreground">
                أشهى المأكولات المحلية والعالمية
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Camera className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">معالم سياحية</h3>
              <p className="text-sm text-muted-foreground">
                أشهر المعالم والمزارات السياحية
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
