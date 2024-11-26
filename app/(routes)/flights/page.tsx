"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Plane, ArrowLeftRight } from "lucide-react";

export default function FlightsPage() {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">ابحث عن رحلتك القادمة</h1>
            <p className="text-muted-foreground">
              اكتشف أفضل العروض على تذاكر الطيران إلى وجهتك المفضلة
            </p>
          </div>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Button
                variant={isRoundTrip ? "default" : "outline"}
                onClick={() => setIsRoundTrip(true)}
              >
                ذهاب وعودة
              </Button>
              <Button
                variant={!isRoundTrip ? "default" : "outline"}
                onClick={() => setIsRoundTrip(false)}
              >
                ذهاب فقط
              </Button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>من</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر مدينة المغادرة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ruh">الرياض</SelectItem>
                      <SelectItem value="jed">جدة</SelectItem>
                      <SelectItem value="dxb">دبي</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>إلى</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر وجهتك" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cai">القاهرة</SelectItem>
                      <SelectItem value="ist">اسطنبول</SelectItem>
                      <SelectItem value="lhr">لندن</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>تاريخ المغادرة</Label>
                  <DatePicker />
                </div>

                {isRoundTrip && (
                  <div className="space-y-2">
                    <Label>تاريخ العودة</Label>
                    <DatePicker />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>البالغين</Label>
                  <Select defaultValue="1">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} بالغ
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>الأطفال</Label>
                  <Select defaultValue="0">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} طفل
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>الرضع</Label>
                  <Select defaultValue="0">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} رضيع
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Plane className="ml-2 h-4 w-4" />
                بحث عن الرحلات
              </Button>
            </form>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-4">
              <h3 className="font-semibold mb-2">أفضل الأسعار</h3>
              <p className="text-sm text-muted-foreground">
                نضمن لك أفضل الأسعار على جميع الرحلات
              </p>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">مرونة في التغيير</h3>
              <p className="text-sm text-muted-foreground">
                إمكانية تغيير موعد رحلتك بسهولة
              </p>
            </Card>
            <Card className="p-4">
              <h3 className="font-semibold mb-2">دعم على مدار الساعة</h3>
              <p className="text-sm text-muted-foreground">
                فريق دعم متخصص لمساعدتك في أي وقت
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
