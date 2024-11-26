"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Discover the magical sunsets and white-washed buildings",
    price: "From $899",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Experience tropical paradise and rich culture",
    price: "From $799",
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    description: "Explore ancient Incan ruins and breathtaking mountains",
    price: "From $1,299",
  },
];

export function FeaturedDestinations() {
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
          Featured Destinations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-muted-foreground"
        >
          Explore our hand-picked destinations and start planning your next adventure
        </motion.p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-background shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.name}
                width={600}
                height={450}
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">{destination.name}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {destination.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">
                  {destination.price}
                </span>
                <Button asChild>
                  <Link href={`/destinations/${destination.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}