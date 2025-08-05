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
        layout
        className="absolute left-0 top-0 w-px bg-primary origin-top"
        style={{ height }}
        transition={{ duration: 0.2, ease: "easeIn" }}
      />
      <div ref={ref} className="space-y-8">
        {children}
      </div>
    </div>
  );
};
