"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GradientText } from "@/components/ui/AnimatedText";
import { howItWorks } from "@/lib/constants";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 border border-secondary/20">
            How It Works
          </span>
          <h2 className="heading-lg mb-6">
            Get started in{" "}
            <GradientText>three simple steps</GradientText>
          </h2>
          <p className="text-lg text-white/60">
            Momentum integrates seamlessly with your existing AI infrastructure.
            Connect your agents in minutes, not days.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Connection Line - Mobile (Vertical) */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-[2px]">
            <motion.div
              className="h-full bg-gradient-to-b from-primary via-secondary to-primary"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Steps */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-20 lg:pl-0"
              >
                {/* Step Number */}
                <motion.div
                  className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 lg:-top-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-primary/30 z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.step}
                </motion.div>

                {/* Content Card */}
                <div className="lg:pt-16 group">
                  <motion.div
                    className="bg-[rgba(26,26,46,0.6)] backdrop-blur-xl rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-white/20 hover:bg-[rgba(26,26,46,0.8)]"
                    whileHover={{ y: -5 }}
                  >
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Code Snippet or Visual */}
                    {step.codeSnippet && (
                      <div className="relative">
                        <div className="bg-[#0D0D12] rounded-xl p-4 font-mono text-sm overflow-x-auto border border-white/5">
                          {/* Terminal Header */}
                          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                            <span className="text-xs text-white/30 ml-2">terminal</span>
                          </div>

                          {/* Code Content */}
                          <pre className="text-white/80">
                            <code>
                              {step.codeSnippet.split("\n").map((line, i) => (
                                <div key={i} className="leading-relaxed">
                                  {line.startsWith("npm") || line.startsWith("$") ? (
                                    <span className="text-green-400">{line}</span>
                                  ) : line.startsWith("import") ? (
                                    <>
                                      <span className="text-secondary">import</span>
                                      <span className="text-white">{line.slice(6)}</span>
                                    </>
                                  ) : line.startsWith("const") ? (
                                    <>
                                      <span className="text-secondary">const</span>
                                      <span className="text-white">{line.slice(5)}</span>
                                    </>
                                  ) : line.includes("//") ? (
                                    <span className="text-white/40">{line}</span>
                                  ) : (
                                    <span>{line}</span>
                                  )}
                                </div>
                              ))}
                            </code>
                          </pre>
                        </div>

                        {/* Copy Button */}
                        <button className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors opacity-0 group-hover:opacity-100">
                          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    )}

                    {/* Dashboard Preview for Step 3 */}
                    {step.visual === "dashboard" && (
                      <div className="bg-[#0D0D12] rounded-xl p-4 border border-white/5">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                          <span className="text-xs text-white/30 ml-2">dashboard.momentum.dev</span>
                        </div>

                        {/* Mini Dashboard Preview */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30" />
                            <div className="flex-1">
                              <div className="w-24 h-3 bg-white/20 rounded" />
                              <div className="w-16 h-2 bg-white/10 rounded mt-1" />
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-green-500" />
                              <span className="text-xs text-green-400">Online</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2">
                            {["CPU", "Memory", "Tasks"].map((label) => (
                              <div key={label} className="p-2 bg-white/5 rounded-lg text-center">
                                <div className="text-primary font-bold text-sm">
                                  {label === "CPU" ? "12%" : label === "Memory" ? "256MB" : "47"}
                                </div>
                                <div className="text-[10px] text-white/40">{label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
