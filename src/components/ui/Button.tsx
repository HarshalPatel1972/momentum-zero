"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  magnetic?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  magnetic = true,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.2;
    const deltaY = (e.clientY - centerY) * 0.2;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: cn(
      "relative overflow-hidden",
      "bg-gradient-to-r from-primary to-primary-dark",
      "text-white font-semibold",
      "shadow-lg shadow-primary/25",
      "hover:shadow-xl hover:shadow-primary/40",
      "before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-primary-light before:to-primary",
      "before:opacity-0 before:transition-opacity before:duration-300",
      "hover:before:opacity-100"
    ),
    secondary: cn(
      "bg-transparent",
      "border border-white/20",
      "text-white font-medium",
      "hover:bg-white/5 hover:border-white/30",
      "backdrop-blur-sm"
    ),
    ghost: cn(
      "bg-transparent",
      "text-white/80 font-medium",
      "hover:text-white hover:bg-white/5"
    ),
  };

  const ButtonComponent = (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative inline-flex items-center justify-center gap-2",
        "rounded-xl transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0F]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Ripple effect on click */}
      <span className="absolute inset-0 overflow-hidden rounded-xl">
        <span className="ripple-effect" />
      </span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {ButtonComponent}
      </a>
    );
  }

  return ButtonComponent;
}

// Arrow icon for CTAs
export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-5 h-5", className)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}
