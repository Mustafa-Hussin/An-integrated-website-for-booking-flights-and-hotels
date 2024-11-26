"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    id: 1,
    title: "European Adventure",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    duration: "10 Days",
    groupSize: "Max 12 people",
    rating: 4.9,
    price: "$2,499",
    destinations: ["Paris", "Rome", "Barcelona"],
    description: "Experience the best of Europe's iconic cities",
  },
  {
    id: 2,
    title: "Asian Discovery",
    image: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1",
    duration: "14 Days",
    groupSize: "Max 10 people",
    rating: 4.8,
    price: "$2,999",
    destinations: ["Tokyo", "Bangkok", "Singapore"],
    description: "Immerse yourself in vibrant Asian cultures",
  },
  {
    id: 3,
    title: "Caribbean Paradise",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19",
    duration: "7 Days",
    groupSize: "Max 8 people",
    rating: 4.7,
    price: "$1,899",
    destinations: ["Jamaica", "Bahamas", "St. Lucia"],
    description: "Relax on pristine beaches and crystal-clear waters",
  },
];

export function TravelPackages() {
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
          Curated Travel Packages
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-muted-foreground"
        >
          All-inclusive packages designed to create unforgettable experiences
        </motion.p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-2xl bg-background shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={600}
                height={450}
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{pkg.rating}</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {pkg.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.destinations.map((destination) => (
                  <Badge key={destination} variant="secondary">
                    {destination}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{pkg.groupSize}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-semibold text-primary">
                  {pkg.price}
                </span>
                <Button asChild>
                  <Link href={`/packages/${pkg.id}`}>
                    View Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}