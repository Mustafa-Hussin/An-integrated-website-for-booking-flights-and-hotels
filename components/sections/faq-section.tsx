"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "كيف يمكنني حجز رحلة؟",
    answer: "يمكنك حجز رحلة بسهولة من خلال اختيار الوجهة المطلوبة، ثم تحديد التواريخ وعدد المسافرين. بعد ذلك، يمكنك اختيار الفندق والأنشطة المناسبة وإتمام عملية الدفع."
  },
  {
    question: "ما هي سياسة الإلغاء؟",
    answer: "تختلف سياسة الإلغاء حسب نوع الحجز. عموماً، يمكنك الإلغاء مجاناً قبل 24 ساعة من موعد الرحلة. للحجوزات في المواسم المزدحمة، قد تحتاج إلى الإلغاء قبل 48 ساعة."
  },
  {
    question: "هل يمكنني تعديل حجزي بعد التأكيد؟",
    answer: "نعم، يمكنك تعديل حجزك من خلال حسابك الشخصي. التعديلات المتاحة تشمل تغيير التواريخ أو تحديث عدد المسافرين، مع مراعاة الفروق في الأسعار إن وجدت."
  },
  {
    question: "ما هي وسائل الدفع المتاحة؟",
    answer: "نقبل مجموعة متنوعة من وسائل الدفع تشمل البطاقات الائتمانية (فيزا، ماستركارد)، والمحافظ الإلكترونية، والتحويل البنكي المباشر."
  },
  {
    question: "هل تشمل الأسعار جميع الرسوم؟",
    answer: "نعم، جميع الأسعار المعروضة تشمل الضرائب والرسوم الأساسية. قد تكون هناك رسوم إضافية اختيارية مثل التأمين على السفر أو الخدمات الإضافية."
  }
];

export function FAQSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">الأسئلة الشائعة</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-right">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-300">
              لم تجد إجابة لسؤالك؟{" "}
              <a
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                تواصل معنا
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
