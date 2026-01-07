"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GradientText } from "@/components/ui/AnimatedText";

interface NodeProps {
  label: string;
  sublabel: string;
  x: number;
  y: number;
  delay: number;
  color: "primary" | "secondary" | "accent";
  icon: "user" | "cloud" | "agent";
}

function ArchitectureNode({ label, sublabel, x, y, delay, color, icon }: NodeProps) {
  const colorClasses = {
    primary: "from-primary/30 to-primary/10 border-primary/40 shadow-primary/20",
    secondary: "from-secondary/30 to-secondary/10 border-secondary/40 shadow-secondary/20",
    accent: "from-green-500/30 to-green-500/10 border-green-500/40 shadow-green-500/20",
  };

  const iconPaths = {
    user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    cloud: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    agent: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  };

  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, type: "spring" }}
    >
      {/* Pulse Ring */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses[color]} opacity-50`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 2,
        }}
        style={{ margin: "-10px" }}
      />

      {/* Node */}
      <motion.div
        className={`relative w-32 lg:w-40 p-4 rounded-2xl bg-gradient-to-br ${colorClasses[color]} border backdrop-blur-xl shadow-lg`}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[icon]} />
            </svg>
          </div>
        </div>
        <div className="text-white font-semibold text-sm">{label}</div>
        <div className="text-white/50 text-xs">{sublabel}</div>
      </motion.div>
    </motion.div>
  );
}

function ConnectionLine({ 
  x1, y1, x2, y2, delay, animated = true 
}: { 
  x1: number; y1: number; x2: number; y2: number; delay: number; animated?: boolean;
}) {
  return (
    <motion.line
      x1={`${x1}%`}
      y1={`${y1}%`}
      x2={`${x2}%`}
      y2={`${y2}%`}
      stroke="url(#lineGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray={animated ? "8 4" : "none"}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    />
  );
}

function DataDot({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) {
  return (
    <motion.circle
      r="4"
      fill="#0EA5E9"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        cx: [`${x1}%`, `${x2}%`],
        cy: [`${y1}%`, `${y2}%`],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "linear",
        repeatDelay: 1,
      }}
      style={{ filter: "drop-shadow(0 0 6px #0EA5E9)" }}
    />
  );
}

export function Architecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Architecture
          </span>
          <h2 className="heading-lg mb-6">
            Built for <GradientText>scale and security</GradientText>
          </h2>
          <p className="text-lg text-white/60">
            A robust, distributed architecture that ensures your agent communications
            are fast, reliable, and secure.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative h-[400px] lg:h-[500px] bg-[rgba(26,26,46,0.4)] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />

          {/* SVG for Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Connection Lines */}
            <ConnectionLine x1={20} y1={50} x2={50} y2={30} delay={0.5} />
            <ConnectionLine x1={50} y1={30} x2={80} y2={50} delay={0.7} />
            <ConnectionLine x1={20} y1={50} x2={50} y2={70} delay={0.6} />
            <ConnectionLine x1={50} y1={70} x2={80} y2={50} delay={0.8} />
            <ConnectionLine x1={50} y1={30} x2={50} y2={70} delay={0.9} />

            {/* Animated Data Dots */}
            {isInView && (
              <>
                <DataDot x1={20} y1={50} x2={50} y2={30} delay={1.5} />
                <DataDot x1={50} y1={30} x2={80} y2={50} delay={2} />
                <DataDot x1={80} y1={50} x2={50} y2={70} delay={2.5} />
                <DataDot x1={50} y1={70} x2={20} y2={50} delay={3} />
              </>
            )}
          </svg>

          {/* Nodes */}
          <ArchitectureNode
            label="Your Application"
            sublabel="Web / Mobile / CLI"
            x={20}
            y={50}
            delay={0.2}
            color="primary"
            icon="user"
          />

          <ArchitectureNode
            label="Momentum Cloud"
            sublabel="Secure Gateway"
            x={50}
            y={30}
            delay={0.4}
            color="secondary"
            icon="cloud"
          />

          <ArchitectureNode
            label="Bridge Service"
            sublabel="WebSocket Tunnel"
            x={50}
            y={70}
            delay={0.5}
            color="secondary"
            icon="cloud"
          />

          <ArchitectureNode
            label="AI Agent"
            sublabel="Your Runtime"
            x={80}
            y={50}
            delay={0.6}
            color="accent"
            icon="agent"
          />

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-6 left-6 flex flex-wrap gap-4"
          >
            {[
              { color: "bg-primary", label: "Control Flow" },
              { color: "bg-secondary", label: "Data Sync" },
              { color: "bg-green-500", label: "Encrypted" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-xs text-white/50">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: "🔐", label: "E2E Encrypted" },
            { icon: "🛡️", label: "SOC 2 Type II" },
            { icon: "🌍", label: "GDPR Compliant" },
            { icon: "⚡", label: "99.9% Uptime SLA" },
          ].map((badge) => (
            <motion.div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="text-sm text-white/70">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
