import Layout from "@/components/layouts/article";
import P from "@/components/paragraph";
import {
  Meta,
  Title,
  WorkImage,
  WorkImageZoom,
  WorkVideo,
} from "@/components/work";
import {
  Badge,
  Container,
  Flex,
  Link,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { HiOutlineExternalLink } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Danabus - Son Thai",
  description: "sonthai's workpage",
};

const DanaBusPage = () => {
  const t = useTranslations("Danabus");

  return (
    <Layout>
      <Container>
        <Title>
          DanaBus <Badge>Aug-2022</Badge>
        </Title>
        <P>{t("description")}</P>
        <UnorderedList my={4}>
          <ListItem>{t("list 1")}</ListItem>
          <ListItem>{t("list 2")}</ListItem>
          <ListItem>{t("list 3")}</ListItem>
        </UnorderedList>
        <List ml={4} my={4}>
          <ListItem>
            <Flex align="center">
              <Meta>Website</Meta>
              <Link href="https://danang-bus-tracking.vercel.app" isExternal>
                <Flex align="center">
                  https://danang-bus-tracking.vercel.app
                  <HiOutlineExternalLink style={{ margin: "0 4px 0 4px" }} />
                </Flex>
              </Link>
            </Flex>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              NextJS, MapboxAPI, Prisma, Zustand, Python (scraping data only)
            </span>
          </ListItem>
          <ListItem>
            <Flex align="center">
              <Meta>Github</Meta>
              <Link
                href="https://github.com/fumodayo/city-bus-tracking-clone"
                isExternal
              >
                <Flex align="center">
                  https://github.com/fumodayo/city-bus-tracking-clone
                  <HiOutlineExternalLink style={{ margin: "0 4px 0 4px" }} />
                </Flex>
              </Link>
            </Flex>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/danabus-banner.png"
          alt="danabus-banner"
        />
        <WorkImageZoom src="/images/works/danabus-1.png" alt="danabus-1" />
        <WorkVideo
          src="https://www.youtube.com/embed/x8ML8s8jX8A"
          title="danabus-2"
        />
      </Container>
    </Layout>
  );
};

export default DanaBusPage;
