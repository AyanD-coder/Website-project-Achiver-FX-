"use client";

import React from "react";
import BrandLogo from "@/components/ui/brand-logo";
import LiquidLoading from "@/components/ui/liquid-loader";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#040814] [.light_&]:bg-[#f8fbff]"
        >
          {/* Theme-synced background elements */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#02050c_0%,#040814_30%,#060b15_65%,#070d17_100%)] [.light_&]:bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_36%,#f8fafc_72%,#ffffff_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(37,99,235,0.12),transparent_22%),radial-gradient(circle_at_50%_42%,rgba(14,165,233,0.08),transparent_30%)] [.light_&]:bg-[radial-gradient(circle_at_20%_12%,rgba(37,99,235,0.12),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(14,165,233,0.08),transparent_20%),radial-gradient(circle_at_50%_42%,rgba(56,189,248,0.05),transparent_30%)]" />
            <div className="absolute inset-x-0 top-0 h-[140vh] bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_50%_38%,rgba(37,99,235,0.14),transparent_30%)] blur-3xl [.light_&]:bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.12),transparent_26%),radial-gradient(circle_at_50%_38%,rgba(14,165,233,0.08),transparent_28%)]" />
          </div>

          <div className="relative flex flex-col items-center">
            {/* Logo with subtle scale pulse */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [0.95, 1, 0.95],
                opacity: 1 
              }}
              transition={{ 
                opacity: { duration: 0.5 },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } 
              }}
              className="mb-8"
            >
              <BrandLogo className="w-[240px] md:w-[320px]" priority />
            </motion.div>

            {/* Liquid Loader */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <LiquidLoading />
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-6 font-display text-sm uppercase tracking-[0.3em] text-brand-glow [.light_&]:text-blue-600"
            >
              Initializing Terminal
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
