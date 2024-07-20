import Layout from "@/components/layouts/article";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";

import thumbTrello from "../../../public/images/works/danabus-banner.png";
import type { Metadata } from "next";
import thumbDanabus from "../../../public/images/works/danabus-banner.png";

export const metadata: Metadata = {
  title: "Works - Son Thai",
  description: "sonthai's workspage",
};

const WorksPage = () => (
  <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="danabus"
            title="City Bus Tracking"
            thumbnail={thumbDanabus}
          >
            A website to track routes, view information about bus stops and be
            advertised for popular tourist attractions in the city while
            passing.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="danabus"
            title="City Bus Tracking"
            thumbnail={thumbTrello}
          >
            A website to track routes, view information about bus stops and be
            advertised for popular tourist attractions in the city while
            passing.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default WorksPage;
