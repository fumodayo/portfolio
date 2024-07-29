"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { getCookie, setCookie } from "cookies-next";
import theme from "@/lib/theme";

type ChakraProps = {
  colorMode?: any;
  children: React.ReactNode;
};

export default function Chakra({ colorMode, children }: ChakraProps) {
  return (
    <CacheProvider>
      <ChakraProvider
        theme={theme}
        colorModeManager={{
          type: "cookie",
          ssr: true,
          get: () => colorMode ?? getCookie("chakra-ui-color-mode"),
          set: (value) => {
            setCookie("chakra-ui-color-mode", value);
          },
        }}
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
