"use client";

import { motion } from "framer-motion";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { AnimatedText, GradientText } from "@/components/ui/AnimatedText";
import { ParticleSystem } from "@/components/effects/ParticleSystem";
import { MeshGradient } from "@/components/effects/MeshGradient";
import { FloatingOrbs } from "@/components/effects/GlowOrb";
import { stats } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <MeshGradient className="z-0" />
      <FloatingOrbs className="z-0" />
      <ParticleSystem className="z-10" particleCount={60} />

      {/* Content */}
      <div className="container-custom relative z-20 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-white/70">Now in Public Beta</span>
            </motion.div>

            {/* Headline */}
            <h1 className="heading-xl mb-6">
              <AnimatedText
                text="Remote Control"
                variant="words"
                className="text-white block"
                delay={0.3}
              />
              <span className="block mt-2">
                <AnimatedText
                  text="for Your"
                  variant="words"
                  className="text-white"
                  delay={0.5}
                />
                {" "}
                <AnimatedText
                  text="AI Agents"
                  variant="words"
                  delay={0.6}
                  className="text-primary inline-flex font-bold"
                />
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg lg:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Take full control of your autonomous AI agents from anywhere. 
              Monitor, debug, and manage in real-time with enterprise-grade security.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" size="lg">
                <span>Start Free Trial</span>
                <ArrowIcon />
              </Button>
              <Button variant="secondary" size="lg">
                <span>View Documentation</span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    className="text-2xl lg:text-3xl font-bold text-white mb-1"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
            style={{ perspective: "1000px" }}
          >
            {/* Floating Dashboard */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateZ: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main Dashboard Card */}
              <div className="relative bg-[rgba(26,26,46,0.8)] backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                {/* Window Controls */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-sm text-white/40">Momentum Dashboard</span>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4">
                  {/* Agent Status Row */}
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-medium">Production Agent</div>
                        <div className="text-sm text-white/50">Running on AWS</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-400 text-sm">Connected</span>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Latency", value: "23ms", color: "text-green-400" },
                      { label: "Uptime", value: "99.9%", color: "text-primary" },
                      { label: "Tasks", value: "1,247", color: "text-secondary" },
                    ].map((metric) => (
                      <div key={metric.label} className="p-3 bg-white/5 rounded-lg text-center">
                        <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                        <div className="text-xs text-white/50">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Terminal Preview */}
                  <div className="p-4 bg-[#0D0D12] rounded-xl font-mono text-sm">
                    <div className="text-white/50 mb-2"># Last command</div>
                    <div className="text-green-400">$ momentum status --agent prod-1</div>
                    <div className="text-white/70 mt-1">✓ Agent prod-1 is healthy</div>
                  </div>
                </div>
              </div>

              {/* Floating Element - Top Right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 p-4 bg-[rgba(26,26,46,0.9)] backdrop-blur-xl rounded-xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/50">Task Completed</div>
                    <div className="text-sm text-white">Data processed</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element - Bottom Left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-8 p-3 bg-[rgba(26,26,46,0.9)] backdrop-blur-xl rounded-xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-white/70">Live monitoring...</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Glow Effect Behind Dashboard */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
