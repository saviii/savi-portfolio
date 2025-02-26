"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedSkillBadgeProps {
  text: string;
}

export const AnimatedSkillBadge = ({ text }: AnimatedSkillBadgeProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Start animation after component mounts for better user experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div
      className="relative inline-flex items-center px-4 py-2 rounded-full font-medium text-sm"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        background: isAnimating 
          ? [
              "linear-gradient(90deg, #93c5fd, #6366f1)", 
              "linear-gradient(180deg, #6366f1, #ec4899)", 
              "linear-gradient(270deg, #ec4899, #f97316)", 
              "linear-gradient(360deg, #f97316, #93c5fd)"
            ] 
          : "linear-gradient(90deg, #93c5fd, #6366f1)",
        boxShadow: isAnimating 
          ? [
              "0 0 10px rgba(147, 197, 253, 0.5)",
              "0 0 15px rgba(99, 102, 241, 0.5)",
              "0 0 15px rgba(236, 72, 153, 0.5)",
              "0 0 10px rgba(249, 115, 22, 0.5)"
            ]
          : "0 0 10px rgba(147, 197, 253, 0.5)",
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        repeatType: "reverse", 
        ease: "linear",
        times: [0, 0.25, 0.5, 0.75, 1] 
      }}
    >
      <span className="relative z-10 text-white font-bold">{text}</span>
      <motion.span 
        className="absolute inset-0 rounded-full opacity-20 bg-white"
        animate={{ 
          scale: isAnimating ? [1, 1.05, 1] : 1,
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse", 
          ease: "easeInOut" 
        }}
      />
    </motion.div>
  );
}; 