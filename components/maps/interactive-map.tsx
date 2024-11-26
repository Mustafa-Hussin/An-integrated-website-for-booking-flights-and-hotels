"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: "hotel" | "attraction" | "restaurant";
  rating: number;
  description: string;
}

export function InteractiveMap() {
  const mapRef = useRef(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // هنا سيتم إضافة كود تهيئة الخريطة
    // يمكن استخدام Google Maps أو Mapbox
    const loadMap = async () => {
      try {
        // تهيئة الخريطة
        setMapLoaded(true);
      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    loadMap();
  }, []);

  return (
    <div className="w-full h-[600px] relative">
      <div className="absolute top-4 right-4 z-10">
        <Card className="p-4 w-64">
          <h3 className="text-lg font-semibold mb-2">تصفية المواقع</h3>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
              onClick={() => {/* تصفية الفنادق */}}
            >
              🏨 الفنادق
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
              onClick={() => {/* تصفية المعالم السياحية */}}
            >
              🏛️ المعالم السياحية
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start"
              onClick={() => {/* تصفية المطاعم */}}
            >
              🍽️ المطاعم
            </Button>
          </div>
        </Card>
      </div>

      <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden">
        {!mapLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">جاري تحميل الخريطة...</p>
            </div>
          </div>
        )}
      </div>

      {selectedLocation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-10"
        >
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-2">{selectedLocation.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {selectedLocation.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < selectedLocation.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <Button size="sm">عرض التفاصيل</Button>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
