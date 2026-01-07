"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  variant?: "words" | "characters" | "lines";
  delay?: number;
  staggerDelay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function AnimatedText({
  text,
  className,
  variant = "words",
  delay = 0,
  staggerDelay = 0.05,
  tag: Tag = "p",
}: AnimatedTextProps) {
  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  if (variant === "words") {
    const words = text.split(" ");
    
    return (
      <motion.span
        className={cn("inline-flex flex-wrap", className)}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block overflow-hidden mr-[0.25em]"
            style={{ perspective: "1000px" }}
          >
            <motion.span
              className="inline-block"
              variants={child}
              style={{ transformOrigin: "bottom" }}
            >
              {word}
            </motion.span>
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (variant === "characters") {
    const characters = text.split("");
    
    return (
      <motion.span
        className={cn("inline-flex", className)}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={child}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Lines variant
  const lines = text.split("\n");
  
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div variants={child}>
            {React.createElement(Tag, {}, line)}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

// Gradient Text Component
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className,
  animate = false,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        "bg-gradient-to-r from-primary via-secondary to-primary",
        animate && "bg-[length:200%_auto] animate-gradient",
        className
      )}
    >
      {children}
    </span>
  );
}

// Typewriter Effect
interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function Typewriter({
  text,
  className,
  speed = 50,
  delay = 0,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let index = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-primary ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}
