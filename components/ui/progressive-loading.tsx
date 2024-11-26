"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ProgressiveLoadingProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function ProgressiveLoading({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
}: ProgressiveLoadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={
          shouldRender
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 20 }
        }
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {shouldRender && children}
      </motion.div>
      {!shouldRender && (
        <div className="w-full h-full min-h-[100px] bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />
      )}
    </div>
  );
}

export function ProgressiveList({
  items,
  renderItem,
  className = "",
  itemClassName = "",
  delay = 100,
}: {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  className?: string;
  itemClassName?: string;
  delay?: number;
}) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <ProgressiveLoading
          key={index}
          className={itemClassName}
          delay={index * delay}
        >
          {renderItem(item, index)}
        </ProgressiveLoading>
      ))}
    </div>
  );
}
