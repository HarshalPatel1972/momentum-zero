"use client";

import { motion } from "framer-motion";
import { footerLinks, socialLinks } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(10,10,15,0.5)]" />

      <div className="container-custom relative z-10 py-16">
        {/* ... content ... */}
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            Proudly Open Source. Built with Wails, Go, and React.
          </p>

          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Created by</span>
            <a href="https://github.com/HarshalPatel1972" target="_blank" rel="noreferrer" className="text-white hover:text-primary transition-colors">Harshal Patel</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
