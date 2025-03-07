"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { IoLogoGithub } from "react-icons/io5";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import LanguageSwitch from "./language-switch";
import Logo from "./logo";

const LinkItem = ({ href, path, target, children, ...props }: any) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <NextLink href={href} scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = ({ props }: { props?: any }) => {
  const path = usePathname();
  const t = useTranslations("Navbar");
  const locale = useLocale();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        maxW="container.md"
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href={`/${locale}/works`} path={path}>
            {t("works")}
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/fumodayo/portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            {t("source")}
          </LinkItem>
        </Stack>

        <Box textAlign="right">
          <Flex gap={2}>
            <ThemeToggleButton />
            <LanguageSwitch />
            <Box display={{ base: "inline-block", md: "none" }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/">
                    <MenuItem as={Link}>{t("about")}</MenuItem>
                  </NextLink>
                  <NextLink href={`/${locale}/works`}>
                    <MenuItem as={Link}>{t("works")}</MenuItem>
                  </NextLink>
                  <MenuItem
                    as={Link}
                    href="https://github.com/fumodayo/portfolio"
                  >
                    {t("source")}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
