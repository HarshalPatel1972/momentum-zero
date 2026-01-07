"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  className?: string;
  color?: string;
  size?: number;
  intensity?: number;
}

export function GlowOrb({
  className,
  color = "#0EA5E9",
  size = 400,
  intensity = 0.3,
}: GlowOrbProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color}${Math.round(intensity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 0.5,
        }}
      />
    </div>
  );
}

// Ambient floating orbs that move independently
interface FloatingOrbsProps {
  className?: string;
  count?: number;
}

export function FloatingOrbs({ className, count = 5 }: FloatingOrbsProps) {
  // Use deterministic values to prevent hydration mismatch
  const orbs = [
    { id: 0, size: 350, color: "#0EA5E9", initialX: 10, initialY: 20, duration: 25, delay: 0 },
    { id: 1, size: 280, color: "#8B5CF6", initialX: 80, initialY: 60, duration: 30, delay: -3 },
    { id: 2, size: 420, color: "#0EA5E9", initialX: 50, initialY: 80, duration: 35, delay: -5 },
    { id: 3, size: 300, color: "#8B5CF6", initialX: 20, initialY: 50, duration: 28, delay: -2 },
    { id: 4, size: 380, color: "#0EA5E9", initialX: 70, initialY: 30, duration: 32, delay: -7 },
  ].slice(0, count);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}20 0%, transparent 70%)`,
            filter: "blur(40px)",
            left: `${orb.initialX}%`,
            top: `${orb.initialY}%`,
          }}
          animate={{
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
