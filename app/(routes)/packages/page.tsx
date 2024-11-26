"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Package, Calendar, Users, MapPin, Clock, Star } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "رحلة سياحية إلى تركيا",
    description: "10 أيام في أجمل المدن التركية",
    price: 5999,
    image: "/packages/turkey.jpg",
    rating: 4.8,
    duration: "10 أيام",
    groupSize: "10-15 شخص",
    destinations: ["اسطنبول", "أنطاليا", "كابادوكيا"],
    features: ["فنادق 5 نجوم", "مرشد سياحي", "وجبات فطور", "مواصلات"],
    discount: 15,
  },
  {
    id: 2,
    title: "جولة في جزر المالديف",
    description: "7 أيام من الاسترخاء في الجنة",
    price: 8999,
    image: "/packages/maldives.jpg",
    rating: 4.9,
    duration: "7 أيام",
    groupSize: "2-4 أشخاص",
    destinations: ["ماليه", "جزر الريف المرجانية"],
    features: ["فيلا على الماء", "غوص", "سبا", "رحلات بحرية"],
  },
  {
    id: 3,
    title: "مغامرة في دبي",
    description: "5 أيام من الإثارة والترفيه",
    price: 4999,
    image: "/packages/dubai.jpg",
    rating: 4.7,
    duration: "5 أيام",
    groupSize: "4-8 أشخاص",
    destinations: ["دبي"],
    features: ["فندق فاخر", "سفاري صحراوي", "تذاكر المدن الترفيهية", "عشاء بحري"],
    discount: 10,
  },
];

export default function PackagesPage() {
  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">الباقات السياحية</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              اكتشف باقاتنا السياحية المميزة التي تم تصميمها خصيصاً لتناسب تطلعاتك.
              رحلات متكاملة تشمل الإقامة والمواصلات والأنشطة السياحية.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="aspect-[4/3] relative bg-muted">
                    {/* صورة الباقة */}
                    {pkg.discount && (
                      <Badge className="absolute top-4 right-4 bg-red-500">
                        خصم {pkg.discount}%
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{pkg.title}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm mr-1">{pkg.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 ml-2" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 ml-2" />
                        <span className="text-sm">{pkg.groupSize}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 ml-2" />
                        <span className="text-sm">{pkg.destinations.join(", ")}</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4 mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-wrap gap-2">
                          {pkg.features.map((feature) => (
                            <Badge key={feature} variant="secondary">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold">{pkg.price} ر.س</span>
                          <span className="text-sm text-muted-foreground mr-1">/ للشخص</span>
                        </div>
                        <Button>
                          احجز الآن
                          <Package className="h-4 w-4 mr-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">مواعيد مرنة</h3>
              <p className="text-sm text-muted-foreground">
                اختر التاريخ المناسب لك من بين مجموعة واسعة من المواعيد المتاحة
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">مجموعات صغيرة</h3>
              <p className="text-sm text-muted-foreground">
                استمتع برحلتك مع مجموعة صغيرة لتجربة أكثر خصوصية وراحة
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">خدمة متميزة</h3>
              <p className="text-sm text-muted-foreground">
                نضمن لك تجربة سفر لا تُنسى مع أفضل الخدمات والمرافق
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
