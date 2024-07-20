import Layout from "@/components/layouts/article";
import P from "@/components/paragraph";
import { Meta, Title, WorkImage } from "@/components/work";
import { Badge, Container, List, ListItem } from "@chakra-ui/react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaCediSign } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Danabus - Son Thai",
  description: "sonthai's workpage",
};

const DanaBusPage = () => (
  <Layout>
    <Container>
      <Title>
        Danabus <Badge>2022-</Badge>
      </Title>
      <P>
        A website to track routes, view information about bus stops and be
        advertised for popular tourist attractions in the city while passing.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://thairyo.github.io/city-bus-tracking">
            https://thairyo.github.io/city-bus-tracking
            {/* <ExternalLinkIcon mx="2px" /> */}
            <FaCediSign style={{ margin: "0 2px 0 2px" }} />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Mapbox, ReactJS</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/thairyo/city-bus-tracking">
            https://github.com/thairyo/city-bus-tracking
            {/* <ExternalLinkIcon mx="2px" /> */}
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/danabus-banner.png" alt="Danabus" />
      <WorkImage src="/images/works/danabus2.png" alt="Danabus" />
      <WorkImage src="/images/works/danabus-routes.gif" alt="Danabus" />
      <WorkImage src="/images/works/danabus-directions.gif" alt="Danabus" />
    </Container>
  </Layout>
);

export default DanaBusPage;
