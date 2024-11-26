"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Headphones,
  MessagesSquare,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: تنفيذ منطق إرسال النموذج
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نحن هنا لمساعدتك! تواصل معنا لأي استفسار أو مساعدة تحتاجها.
              فريقنا جاهز للرد على جميع أسئلتك.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">اتصل بنا</h3>
              <p className="text-sm text-muted-foreground mb-4">
                متاحون على مدار الساعة
              </p>
              <p className="font-medium">800-555-0123</p>
            </Card>

            <Card className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">راسلنا</h3>
              <p className="text-sm text-muted-foreground mb-4">
                نرد خلال 24 ساعة
              </p>
              <p className="font-medium">support@travelco.com</p>
            </Card>

            <Card className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">زورنا</h3>
              <p className="text-sm text-muted-foreground mb-4">
                مكتبنا الرئيسي
              </p>
              <p className="font-medium">الرياض، المملكة العربية السعودية</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">أرسل رسالتك</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">الاسم الأول</Label>
                    <Input
                      id="firstName"
                      placeholder="محمد"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">الاسم الأخير</Label>
                    <Input
                      id="lastName"
                      placeholder="أحمد"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@domain.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الجوال</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="05xxxxxxxx"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label>نوع الاستفسار</Label>
                  <RadioGroup defaultValue="booking" className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="booking" id="booking" />
                      <Label htmlFor="booking">حجز رحلة</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="support" id="support" />
                      <Label htmlFor="support">دعم فني</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="feedback" id="feedback" />
                      <Label htmlFor="feedback">اقتراحات</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">أخرى</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">رسالتك</Label>
                  <Textarea
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    className="min-h-[150px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "جاري الإرسال..."
                  ) : (
                    <>
                      إرسال الرسالة
                      <Send className="h-4 w-4 mr-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">الأسئلة الشائعة</h2>
                <div className="space-y-4">
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">كيف يمكنني إلغاء حجزي؟</h3>
                    <p className="text-sm text-muted-foreground">
                      يمكنك إلغاء حجزك من خلال حسابك الشخصي أو الاتصال بخدمة العملاء.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">ما هي سياسة الاسترداد؟</h3>
                    <p className="text-sm text-muted-foreground">
                      تختلف سياسة الاسترداد حسب نوع الحجز والوقت المتبقي قبل موعد الرحلة.
                    </p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="font-semibold mb-2">هل يمكنني تغيير موعد رحلتي؟</h3>
                    <p className="text-sm text-muted-foreground">
                      نعم، يمكنك تغيير موعد رحلتك قبل 48 ساعة من موعد المغادرة.
                    </p>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">ساعات العمل</h2>
                <Card className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">أيام الأسبوع</span>
                      <span>8:00 ص - 8:00 م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">السبت</span>
                      <span>9:00 ص - 6:00 م</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">الأحد</span>
                      <span>9:00 ص - 4:00 م</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Headphones className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">دعم متخصص</h3>
              <p className="text-sm text-muted-foreground">
                فريق دعم متخصص لمساعدتك في كل خطوة
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">استجابة سريعة</h3>
              <p className="text-sm text-muted-foreground">
                نرد على استفساراتك في أسرع وقت ممكن
              </p>
            </Card>
            <Card className="p-6 text-center">
              <MessagesSquare className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">تواصل فعال</h3>
              <p className="text-sm text-muted-foreground">
                نتواصل معك عبر قنوات متعددة لراحتك
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
