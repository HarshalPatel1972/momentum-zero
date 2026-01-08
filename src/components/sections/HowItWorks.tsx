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
                <div className="lg:pt-16 group h-full">
                  <motion.div
                    className="bg-[rgba(26,26,46,0.6)] backdrop-blur-xl rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:border-white/20 hover:bg-[rgba(26,26,46,0.8)] h-full flex flex-col items-center text-center"
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
                    {/* Visual Content based on Step */}
                    {step.visual === "terminal" ? (
                       <div className="mt-6 flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 w-full">
                         <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3">
                           <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                           </svg>
                         </div>
                         <div className="font-mono text-sm text-white/80 bg-black/40 px-3 py-1 rounded border border-white/5">
                            Momentum-Setup.exe
                         </div>
                       </div>
                    ) : null}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="https://github.com/HarshalPatel1972/agent-momentum#readme" target="_blank" className="text-primary hover:text-primary-light transition-colors text-sm font-medium inline-flex items-center gap-2">
              Read full setup guide in Documentation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
