"use client";

import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

interface TripDetails {
  id: string;
  title: string;
  price: number;
  duration: string;
  rating: number;
  amenities: string[];
  imageUrl: string;
}

export function TripComparison() {
  const [selectedTrips, setSelectedTrips] = useState<TripDetails[]>([]);

  const compareFeatures = [
    "السعر",
    "المدة",
    "التقييم",
    "الخدمات المتوفرة",
    "الموقع",
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-6">مقارنة الرحلات</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedTrips.map((trip) => (
          <motion.div
            key={trip.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative"
          >
            <Card className="p-4">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={trip.imageUrl}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>السعر:</span>
                  <span className="font-bold">{trip.price} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span>المدة:</span>
                  <span>{trip.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>التقييم:</span>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < trip.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">الخدمات المتوفرة:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {trip.amenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedTrips.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            اختر رحلات للمقارنة بينها
          </p>
          <Button className="mt-4">اختيار رحلات</Button>
        </div>
      )}
    </div>
  );
}
