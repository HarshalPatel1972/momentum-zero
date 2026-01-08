"use client";

import { motion } from "framer-motion";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/AnimatedText";
import { ParticleSystem } from "@/components/effects/ParticleSystem";

export function CTA() {
  return (
    <section id="cta" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <ParticleSystem
          className="opacity-50"
          particleCount={40}
          colors={["#0EA5E9", "#8B5CF6"]}
          connectionDistance={100}
          mouseInteraction={false}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* CTA Card */}
          <div className="relative bg-gradient-to-br from-[rgba(26,26,46,0.8)] to-[rgba(10,10,15,0.9)] backdrop-blur-xl rounded-3xl border border-white/10 p-12 lg:p-20 text-center overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl p-[1px] pointer-events-none">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(14, 165, 233, 0.3), rgba(139, 92, 246, 0.3))",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30"
              >
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="heading-lg mb-6 max-w-2xl mx-auto"
              >
                Ready to take control of your{" "}
                <GradientText animate>AI agents</GradientText>?
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-white/60 max-w-xl mx-auto mb-10"
              >
                Open source, local-first, and built for developers. 
                Get started in seconds.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="primary" size="lg" onClick={() => window.open('https://github.com/HarshalPatel1972/agent-momentum/releases', '_blank')}>
                  <span>Download Now</span>
                  <ArrowIcon />
                </Button>
                <Button variant="secondary" size="lg" onClick={() => window.open('https://github.com/HarshalPatel1972/agent-momentum', '_blank')}>
                  <span>View Source</span>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>MIT License</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mac, Windows, Linux</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No account needed</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
