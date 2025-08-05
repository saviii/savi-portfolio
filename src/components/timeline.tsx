"use client";

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.contentRect.height);
      }
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="relative pl-6">
      <motion.div
        className="absolute left-0 top-0 w-0.5 bg-primary origin-top"
        animate={{ height }}
        transition={{
          duration: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
      <div ref={ref} className="space-y-8">
        {children}
      </div>
    </div>
  );
};
