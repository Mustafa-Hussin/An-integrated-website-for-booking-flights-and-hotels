"use client";

import { motion } from "framer-motion";
import { Search } from "@/components/search";

export function HeroSection() {
  return (
    <section className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative rounded-3xl bg-[url('https://images.unsplash.com/photo-1682687220742-aba13b6e50ba')] bg-cover bg-center px-6 py-24 text-center text-white"
      >
        <div className="absolute inset-0 rounded-3xl bg-black/50" />
        <div className="relative">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Discover Your Next Adventure
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
            Book flights, hotels, and vacation packages to explore the world's most
            beautiful destinations.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative -mt-16 rounded-xl bg-background p-6 shadow-lg sm:mx-16"
      >
        <Search />
      </motion.div>
    </section>
  );
}