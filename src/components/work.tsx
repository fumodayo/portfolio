"use client";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Badge,
  Box,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import NextLink from "next/link";

export const Title = ({ children }: { children: React.ReactNode }) => {
  const t = useTranslations("Navbar");

  return (
    <Box>
      <NextLink href="/works">
        <Link>{t("works")}</Link>
      </NextLink>
      <span>
        {" "}
        <ChevronRightIcon />{" "}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  );
};

export const WorkImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const WorkImageZoom = ({
  src,
  alt,
  ...props
}: { src: string; alt: string } & React.ComponentProps<typeof Image>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        onClick={onOpen}
        borderRadius="lg"
        mb={4}
        w="full"
        cursor="pointer"
        {...props}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="transparent">
          <ModalBody p={0}>
            <Image
              src={src}
              alt={alt}
              onClick={onClose}
              objectFit="contain"
              width="100%"
              height="100vh"
              cursor="pointer"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export const WorkVideo = ({
  src,
  title,
  ...props
}: {
  src: string;
  title: string;
} & React.ComponentProps<typeof AspectRatio>) => (
  <Box my={5}>
    <AspectRatio {...props}>
      <iframe title={title} src={src} allowFullScreen />
    </AspectRatio>
  </Box>
);

export const Meta = ({ children }: { children: React.ReactNode }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
