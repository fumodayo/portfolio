"use client";

import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const AnimateScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence
      mode="wait"
      initial={true}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      {children}
    </AnimatePresence>
  );
};

export default AnimateScroll;
