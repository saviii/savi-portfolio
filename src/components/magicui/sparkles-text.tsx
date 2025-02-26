"use client";

import type React from "react"

import { motion } from "framer-motion"
import { type CSSProperties, type ReactElement, useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface Sparkle {
  id: string
  x: string
  y: string
  color: string
  delay: number
  scale: number
  lifespan: number
}

const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay }}
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </motion.svg>
  )
}

interface SparklesTextProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the text
   * */
  as?: ReactElement

  /**
   * @default ""
   * @type string
   * @description
   * The className of the text
   */
  className?: string

  /**
   * @required
   * @type string
   * @description
   * The text to be displayed
   * */
  text: string

  /**
   * @default 10
   * @type number
   * @description
   * The count of sparkles
   * */
  sparklesCount?: number

  /**
   * @default "{first: '#9E7AFF', second: '#FE8BBB'}"
   * @type string
   * @description
   * The colors of the sparkles
   * */
  colors?: {
    first: string
    second: string
  }
  
  /**
   * @default 0
   * @type number
   * @description
   * Animation delay in seconds
   * */
  delay?: number
}

const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
  delay = 0,
  ...props
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [showSparkles, setShowSparkles] = useState(false)

  useEffect(() => {
    // Show sparkles after initial delay
    const showTimer = setTimeout(() => {
      setShowSparkles(true)
      
      // Hide sparkles after 3 seconds
      const hideTimer = setTimeout(() => {
        setShowSparkles(false)
      }, 3000)
      
      return () => clearTimeout(hideTimer)
    }, delay * 1000)
    
    return () => clearTimeout(showTimer)
  }, [delay])

  useEffect(() => {
    if (!showSparkles) {
      setSparkles([])
      return
    }
    
    const generateStar = (): Sparkle => {
      // Create a function to generate positions only around the text (not on top)
      // We'll use a random approach to select one of these options:
      // 1. Above the text
      // 2. Below the text
      // 3. Left of the text
      // 4. Right of the text
      
      const position = Math.floor(Math.random() * 4)
      let starX: string
      let starY: string
      
      switch (position) {
        case 0: // Above
          starX = `${Math.random() * 100}%`
          starY = `-${10 + Math.random() * 15}px`
          break
        case 1: // Below
          starX = `${Math.random() * 100}%`
          starY = `calc(100% + ${10 + Math.random() * 15}px)`
          break
        case 2: // Left
          starX = `-${10 + Math.random() * 15}px`
          starY = `${Math.random() * 100}%`
          break
        case 3: // Right
          starX = `calc(100% + ${10 + Math.random() * 15}px)`
          starY = `${Math.random() * 100}%`
          break
        default:
          starX = "0px"
          starY = "0px"
      }
      
      const color = Math.random() > 0.5 ? colors.first : colors.second
      const starDelay = Math.random() * 0.5 // shorter delays for quicker animation
      const scale = Math.random() * 1 + 0.3
      const lifespan = Math.random() * 10 + 5
      const id = `${starX}-${starY}-${Date.now()}`
      return { id, x: starX, y: starY, color, delay: starDelay, scale, lifespan }
    }

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateStar)
      setSparkles(newSparkles)
    }

    initializeStars()
    
    // No need for the update interval since we're only showing for 3 seconds
    
    return () => {}
  }, [colors.first, colors.second, sparklesCount, showSparkles])

  return (
    <div
      className={cn("text-6xl font-bold", className)}
      {...props}
      style={
        {
          "--sparkles-first-color": `${colors.first}`,
          "--sparkles-second-color": `${colors.second}`,
        } as CSSProperties
      }
    >
      <span className="relative inline-block">
        {showSparkles && sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong>{text}</strong>
      </span>
    </div>
  )
}

export default SparklesText 