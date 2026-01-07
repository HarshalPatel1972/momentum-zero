"use client";

import { cn } from "@/lib/utils";

interface MeshGradientProps {
  className?: string;
}

export function MeshGradient({ className }: MeshGradientProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {/* Primary gradient orb */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)",
          top: "-20%",
          right: "-10%",
          filter: "blur(60px)",
        }}
      />
      
      {/* Secondary gradient orb */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)",
          bottom: "-10%",
          left: "-5%",
          filter: "blur(60px)",
          animationDelay: "-2s",
        }}
      />
      
      {/* Accent gradient orb */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)",
          top: "40%",
          left: "30%",
          filter: "blur(80px)",
          animationDelay: "-4s",
        }}
      />

      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}

// Animated gradient background for sections
interface AnimatedGradientProps {
  className?: string;
  colors?: string[];
}

export function AnimatedGradient({
  className,
  colors = ["#0EA5E9", "#8B5CF6", "#0EA5E9"],
}: AnimatedGradientProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 opacity-30 animate-gradient",
        className
      )}
      style={{
        background: `linear-gradient(135deg, ${colors.join(", ")})`,
        backgroundSize: "200% 200%",
      }}
    />
  );
}
