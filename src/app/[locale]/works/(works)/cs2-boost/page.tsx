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
  title: "CS2Boost - Son Thai",
  description: "sonthai's workpage",
};

const CS2BoostPage = () => {
  const t = useTranslations("CS2Boost");

  return (
    <Layout>
      <Container>
        <Title>
          CS2 Boosting <Badge>Jan-2024</Badge>
        </Title>
        <P>{t("description")}</P>
        <UnorderedList my={4}>
          <ListItem>{t("list 1")}</ListItem>
          <ListItem>{t("list 2")}</ListItem>
          <ListItem>{t("list 3")}</ListItem>
          <ListItem>{t("list 4")}</ListItem>
          <ListItem>{t("list 5")}</ListItem>
        </UnorderedList>
        <List ml={4} my={4}>
          <ListItem>
            <Flex align="center">
              <Meta>Website</Meta>
              <Link href="https://cs2-boost.vercel.app" isExternal>
                <Flex align="center">
                  https://cs2-boost.vercel.app
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
              ReactJS, React Redux, MongoDB, NodeJS, Express, socketIO,
              stripeAPI, firebase, radix ui, tailwindcss, i18n
            </span>
          </ListItem>
          <ListItem>
            <Flex align="center">
              <Meta>Github</Meta>
              <Link href="https://github.com/fumodayo/cs2-boost" isExternal>
                <Flex align="center">
                  https://github.com/fumodayo/cs2-boost
                  <HiOutlineExternalLink style={{ margin: "0 4px 0 4px" }} />
                </Flex>
              </Link>
            </Flex>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/cs2-boost-banner.png"
          alt="cs2-boost-banner"
        />
        <WorkImageZoom src="/images/works/cs2-boost-1.png" alt="cs2-boost-1" />
        <WorkVideo
          src="https://www.youtube.com/embed/7rxgAWLMsdg"
          title="cs2-boost-2"
        />
        <WorkVideo
          src="https://www.youtube.com/embed/q4J_C2p43lQ"
          title="cs2-boost-3"
        />
        <WorkVideo
          src="https://www.youtube.com/embed/NY540_EkxgA"
          title="cs2-boost-4"
        />
      </Container>
    </Layout>
  );
};

export default CS2BoostPage;
