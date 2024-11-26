"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Booking",
    description:
      "Your payments and personal information are protected with industry-leading security measures.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any queries.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description:
      "Find a lower price elsewhere? We'll match it and give you an additional discount.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Partners",
    description:
      "We work with carefully selected partners to ensure the highest quality of service.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="container">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Why Choose Voyage?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-muted-foreground"
        >
          We're committed to making your travel experience exceptional from start to
          finish
        </motion.p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-background p-8 text-center shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary-foreground/10">
                <Icon className="h-6 w-6 transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}