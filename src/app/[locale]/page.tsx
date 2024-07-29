"use client";

import { BioSection, BioYear } from "@/components/bio";
import Layout from "@/components/layouts/article";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import NextLink from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle } from "react-icons/io5";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          {t("hello")}
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t("my name")}
            </Heading>
            <p>Web Developer ( Frontend )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/fumodayo.jpg"
                alt="Profile image"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay="0.1">
          <Heading as="h3" variant="section-title" textTransform="capitalize">
            {t("heading 1")}
          </Heading>
          <Paragraph>
            {t("Hello")}{" "}
            <Link
              href="https://www.topcv.vn/xem-cv/AwNQUVUHAA1aU1YCU1oECQ8FUVVXVgUHBlwEDgeaac"
              target="_blank"
            >
              Son Thai
            </Link>{" "}
            {t("I am a software developer")}.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<BiChevronRight />} colorScheme="teal">
                {t("My portfolio")}
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay="0.2">
          <Heading as="h3" variant="section-title">
            {t("heading 2")}
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            {t("born")}
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            {t("completed")}
          </BioSection>
          <BioSection>
            <BioYear>{t("2023")}</BioYear>
            {t("working")}
          </BioSection>
        </Section>

        <Section delay="0.3">
          <Heading as="h3" variant="section-title">
            {t("heading 3")}
          </Heading>
          <BioSection>
            <BioYear>{t("Jun")}, 2024</BioYear>
            <Link
              href="https://www.hackerrank.com/certificates/61c0fb6eda00"
              target="_blank"
            >
              Hacker Rank Node, CSS, JavaScript, Problem Solving (Basic)
            </Link>
          </BioSection>
        </Section>

        <Section delay="0.3">
          <Heading as="h3" variant="section-title">
            {t("On the web")}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/fumodayo" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @fumodayo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.facebook.com/ryo.sonthai" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoFacebook />}
                >
                  @buisonthai
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:sonthai1310.works@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGoogle />}
                >
                  @sonthai1310.works@gmail.com
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://zalo.me/0376314578" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<FaPhone />}
                >
                  (+84) 0376314578
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
