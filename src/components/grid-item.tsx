"use client";

import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import { useLocale } from "next-intl";
import Image from "next/image";
import NextLink from "next/link";

type GridItemProps = {
  children: React.ReactNode;
  href: string;
  title: string;
  thumbnail: string;
};

type WorkGridItemProps = {
  children: React.ReactNode;
  id: string;
  title: string;
  thumbnail: any;
};

export const GridItem = ({
  children,
  href,
  title,
  thumbnail,
}: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
}: WorkGridItemProps) => {
  const locale = useLocale();
  return (
    <Box w="100%" textAlign="center">
      <NextLink href={`/${locale}/works/${id}`} passHref scroll={false}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            width={600}
            height={400}
            style={{ objectFit: "cover" }}
          />
          <LinkOverlay href={`/${locale}/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};

export const GridItemStyle = () => (
  <Global
    styles={css`
      .grid-item-thumbnail {
        border-radius: 12px;
        filter: blur(0.5px);
      }
    `}
  />
);
