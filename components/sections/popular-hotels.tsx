"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Wifi, Car, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const hotels = [
  {
    id: 1,
    name: "The Ritz-Carlton",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    rating: 4.9,
    price: "$599/night",
    amenities: ["Free WiFi", "Parking", "Restaurant"],
    tags: ["Luxury", "City Center"],
  },
  {
    id: 2,
    name: "Amalfi Resort & Spa",
    location: "Amalfi Coast, Italy",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    rating: 4.8,
    price: "$429/night",
    amenities: ["Spa", "Pool", "Restaurant"],
    tags: ["Beach", "Spa"],
  },
  {
    id: 3,
    name: "Desert Palm Resort",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    rating: 4.7,
    price: "$699/night",
    amenities: ["Free WiFi", "Pool", "Gym"],
    tags: ["Desert View", "Luxury"],
  },
];

const amenityIcons = {
  "Free WiFi": Wifi,
  "Parking": Car,
  "Restaurant": Coffee,
};

export function PopularHotels() {
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
          Popular Hotels
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl text-muted-foreground"
        >
          Discover our most booked properties with exceptional amenities and service
        </motion.p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel, index) => (
          <motion.div
            key={hotel.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-2xl bg-background shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={600}
                height={450}
                className="object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{hotel.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{hotel.rating}</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{hotel.location}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {hotel.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                {hotel.amenities.slice(0, 3).map((amenity) => {
                  const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                  return Icon ? (
                    <div
                      key={amenity}
                      className="flex items-center gap-1 text-sm text-muted-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{amenity}</span>
                    </div>
                  ) : null;
                })}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">
                  {hotel.price}
                </span>
                <Button asChild>
                  <Link href={`/hotels/${hotel.id}`}>Book Now</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}