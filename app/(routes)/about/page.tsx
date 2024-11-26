"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Gem,
  Globe,
  Shield,
  Heart,
  ThumbsUp,
  Clock,
  MapPin,
  Building,
  Plane,
} from "lucide-react";

const stats = [
  {
    number: "10+",
    label: "سنوات خبرة",
    icon: Clock,
  },
  {
    number: "50K+",
    label: "عميل سعيد",
    icon: Users,
  },
  {
    number: "100+",
    label: "وجهة سياحية",
    icon: MapPin,
  },
  {
    number: "24/7",
    label: "دعم متواصل",
    icon: Heart,
  },
];

const values = [
  {
    title: "الجودة",
    description: "نقدم أفضل الخدمات السياحية بأعلى معايير الجودة",
    icon: Award,
  },
  {
    title: "الموثوقية",
    description: "نلتزم بوعودنا ونحافظ على ثقة عملائنا",
    icon: Shield,
  },
  {
    title: "الابتكار",
    description: "نبتكر حلولاً سياحية تناسب احتياجات عملائنا المتنوعة",
    icon: Gem,
  },
  {
    title: "التميز",
    description: "نسعى دائماً للتميز في كل ما نقدمه من خدمات",
    icon: Target,
  },
];

const milestones = [
  {
    year: "2013",
    title: "تأسيس الشركة",
    description: "بدأنا رحلتنا في عالم السياحة والسفر",
  },
  {
    year: "2015",
    title: "توسع محلي",
    description: "افتتاح فروع في مختلف مدن المملكة",
  },
  {
    year: "2018",
    title: "توسع إقليمي",
    description: "افتتاح مكاتب في دول الخليج",
  },
  {
    year: "2020",
    title: "تحول رقمي",
    description: "إطلاق منصة الحجوزات الإلكترونية",
  },
  {
    year: "2023",
    title: "توسع عالمي",
    description: "شراكات مع كبرى شركات السياحة العالمية",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">من نحن</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نحن شركة رائدة في مجال السياحة والسفر، نسعى لتقديم تجارب سفر
              استثنائية تلبي تطلعات عملائنا وتفوق توقعاتهم.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <Icon className="h-8 w-8 mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <Globe className="h-8 w-8 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">رؤيتنا</h2>
              <p className="text-muted-foreground">
                أن نكون الخيار الأول في عالم السياحة والسفر، نقدم تجارب سفر
                لا تُنسى ونساهم في صناعة ذكريات جميلة لعملائنا.
              </p>
            </Card>
            <Card className="p-8">
              <Target className="h-8 w-8 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">رسالتنا</h2>
              <p className="text-muted-foreground">
                تقديم خدمات سياحية متكاملة بأعلى معايير الجودة، مع التركيز
                على رضا العملاء وتلبية احتياجاتهم المختلفة.
              </p>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">قيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6">
                    <Icon className="h-8 w-8 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">مسيرتنا</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative flex items-center"
                >
                  <div className="flex-shrink-0 w-32 text-lg font-semibold">
                    {milestone.year}
                  </div>
                  <Card className="flex-grow p-6">
                    <h3 className="font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-center mb-8">فريقنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4" />
                <h3 className="font-semibold mb-1">أحمد محمد</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  الرئيس التنفيذي
                </p>
                <p className="text-sm text-muted-foreground">
                  خبرة 15 عاماً في مجال السياحة والسفر
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4" />
                <h3 className="font-semibold mb-1">سارة عبدالله</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  مدير العمليات
                </p>
                <p className="text-sm text-muted-foreground">
                  متخصصة في تطوير تجربة العملاء
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4" />
                <h3 className="font-semibold mb-1">محمد خالد</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  مدير تطوير الأعمال
                </p>
                <p className="text-sm text-muted-foreground">
                  خبير في تطوير الشراكات الاستراتيجية
                </p>
              </Card>
            </div>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Building className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">عضوية IATA</h3>
              <p className="text-sm text-muted-foreground">
                عضو معتمد في الاتحاد الدولي للنقل الجوي
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">شهادة ISO</h3>
              <p className="text-sm text-muted-foreground">
                حاصلون على شهادة الجودة العالمية
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">جوائز التميز</h3>
              <p className="text-sm text-muted-foreground">
                حائزون على العديد من جوائز التميز في مجال السياحة
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
