"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonGroup, IconButton, Tooltip } from "@chakra-ui/react";
import { FaEarthAmericas, FaStar } from "react-icons/fa6";
import { usePathname, useRouter } from "@/navigation";

const LanguageSwitch = () => {
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale: string) => {
    // @ts-expect-error -- TypeScript will validate that only known `params`
    // are used in combination with a given `pathname`. Since the two will
    // always match for the current route, we can skip runtime checks.
    router.replace({ pathname, params }, { locale: nextLocale });
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={locale}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ButtonGroup>
          <Tooltip
            label={
              locale === "en" ? "Switch to Vietnamese" : "Switch to English"
            }
          >
            <IconButton
              aria-label={
                locale === "en" ? "Switch to Vietnamese" : "Switch to English"
              }
              bg={locale === "en" ? "blue.400" : "red.400"}
              colorScheme={locale === "en" ? "blue" : "red"}
              icon={locale === "en" ? <FaEarthAmericas size={18}/> : <FaStar size={18} />}
              onClick={() => changeLanguage(locale === "en" ? "vi" : "en")}
            />
          </Tooltip>
        </ButtonGroup>
      </motion.div>
    </AnimatePresence>
  );
};

export default LanguageSwitch;
