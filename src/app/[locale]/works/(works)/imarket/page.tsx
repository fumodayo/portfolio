import Layout from "@/components/layouts/article";
import P from "@/components/paragraph";
import { Meta, Title, WorkImage, WorkImageZoom } from "@/components/work";
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
  title: "IMarket - Son Thai",
  description: "sonthai's workpage",
};

const IMarketPage = () => {
  const t = useTranslations("IMarket");

  return (
    <Layout>
      <Container>
        <Title>
          IMarket <Badge>Feb-2023</Badge>
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
            <Meta>Platform</Meta>
            <span>Windows/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React Native, ReactJS, React redux, OpenAI API, Express, NodeJS,
              Python (scraping data only)
            </span>
          </ListItem>
          <ListItem>
            <Flex align="center">
              <Meta>Github</Meta>
              <Link
                href="https://github.com/fumodayo/GMH-Application"
                isExternal
              >
                <Flex align="center">
                  https://github.com/fumodayo/GMH-Application
                  <HiOutlineExternalLink style={{ margin: "0 4px 0 4px" }} />
                </Flex>
              </Link>
            </Flex>
          </ListItem>
        </List>
        <WorkImage src="/images/works/imarket-banner.png" alt="banner" />
        <Flex justifyContent="space-between">
          <WorkImageZoom
            maxW={260}
            src="/images/works/imarket-1.gif"
            alt="user"
          />
          <WorkImageZoom
            maxW={260}
            src="/images/works/imarket-2.gif"
            alt="rider"
          />
        </Flex>
      </Container>
    </Layout>
  );
};

export default IMarketPage;
