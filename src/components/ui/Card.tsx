"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover3D?: boolean;
  glowOnHover?: boolean;
  variant?: "default" | "gradient" | "outline";
}

export function Card({
  children,
  className,
  hover3D = true,
  glowOnHover = true,
  variant = "default",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (max 10 degrees)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    // Calculate glow position
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    
    if (hover3D) {
      setTransform({ rotateX, rotateY });
    }
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setGlowPosition({ x: 50, y: 50 });
  };

  const variantStyles = {
    default: "bg-[rgba(26,26,46,0.6)] border border-white/10",
    gradient: "bg-gradient-to-br from-[rgba(26,26,46,0.8)] to-[rgba(10,10,15,0.8)] border border-white/10",
    outline: "bg-transparent border border-white/20",
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative rounded-2xl p-6 overflow-hidden",
        "backdrop-blur-xl",
        "transition-all duration-300",
        variantStyles[variant],
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        y: -8,
        boxShadow: glowOnHover 
          ? "0 25px 50px -12px rgba(14, 165, 233, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)" 
          : "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Gradient glow effect that follows mouse */}
      {glowOnHover && (
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(14, 165, 233, 0.1), transparent 40%)`,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
      
      {/* Subtle gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            padding: "1px",
            background: `linear-gradient(135deg, rgba(14, 165, 233, 0.5), rgba(139, 92, 246, 0.5))`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </div>
    </motion.div>
  );
}

// Feature Card with icon
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
  size?: "normal" | "large";
  delay?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  highlight,
  size = "normal",
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        size === "large" && "lg:col-span-2"
      )}
    >
      <Card className="h-full">
        <div className="flex flex-col h-full">
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 text-primary">
            {icon}
          </div>
          
          {/* Highlight Tag */}
          {highlight && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 w-fit mb-3">
              {highlight}
            </span>
          )}
          
          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          
          {/* Description */}
          <p className="text-white/60 leading-relaxed">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
