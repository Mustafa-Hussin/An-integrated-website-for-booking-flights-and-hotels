"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Building2, Search, Star, Wifi, Coffee, Car } from "lucide-react";

const popularDestinations = [
  {
    city: "دبي",
    country: "الإمارات",
    image: "/destinations/dubai.jpg",
    hotels: 1240,
  },
  {
    city: "اسطنبول",
    country: "تركيا",
    image: "/destinations/istanbul.jpg",
    hotels: 890,
  },
  {
    city: "القاهرة",
    country: "مصر",
    image: "/destinations/cairo.jpg",
    hotels: 650,
  },
];

export default function HotelsPage() {
  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">احجز فندقك المفضل</h1>
            <p className="text-muted-foreground">
              اكتشف أفضل الفنادق في وجهتك المفضلة بأفضل الأسعار
            </p>
          </div>

          <Card className="p-6 mb-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label>الوجهة</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر وجهتك" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dxb">دبي</SelectItem>
                      <SelectItem value="ist">اسطنبول</SelectItem>
                      <SelectItem value="cai">القاهرة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>تاريخ الوصول</Label>
                  <DatePicker />
                </div>

                <div className="space-y-2">
                  <Label>تاريخ المغادرة</Label>
                  <DatePicker />
                </div>

                <div className="space-y-2">
                  <Label>عدد الغرف والضيوف</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">غرفة واحدة، شخصين</SelectItem>
                      <SelectItem value="1-3">غرفة واحدة، 3 أشخاص</SelectItem>
                      <SelectItem value="2-4">غرفتين، 4 أشخاص</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Search className="ml-2 h-4 w-4" />
                بحث عن الفنادق
              </Button>
            </form>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">الوجهات الشائعة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {popularDestinations.map((destination) => (
                <Card key={destination.city} className="overflow-hidden">
                  <div className="aspect-video relative bg-muted">
                    {/* صورة الوجهة */}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{destination.city}</h3>
                    <p className="text-sm text-muted-foreground">
                      {destination.country}
                    </p>
                    <p className="text-sm mt-2">
                      {destination.hotels} فندق متاح
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-4 text-center">
              <Star className="h-6 w-6 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">فنادق فاخرة</h3>
              <p className="text-sm text-muted-foreground">
                اختر من بين أفضل الفنادق 5 نجوم
              </p>
            </Card>
            <Card className="p-4 text-center">
              <Wifi className="h-6 w-6 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">خدمات متكاملة</h3>
              <p className="text-sm text-muted-foreground">
                واي فاي مجاني وخدمات راقية
              </p>
            </Card>
            <Card className="p-4 text-center">
              <Coffee className="h-6 w-6 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">إفطار مجاني</h3>
              <p className="text-sm text-muted-foreground">
                استمتع بإفطار شهي كل صباح
              </p>
            </Card>
            <Card className="p-4 text-center">
              <Car className="h-6 w-6 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">خدمة النقل</h3>
              <p className="text-sm text-muted-foreground">
                توصيل مجاني من وإلى المطار
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
