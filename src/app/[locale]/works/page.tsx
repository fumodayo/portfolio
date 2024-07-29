import Layout from "@/components/layouts/article";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "@/components/section";
import { WorkGridItem } from "@/components/grid-item";

import thumbCS2Boost from "../../../../public/images/works/cs2-boost-banner.png";
import type { Metadata } from "next";
import thumbDanabus from "../../../../public/images/works/danabus-banner.png";
import thumbIMarket from "../../../../public/images/works/imarket-banner.png";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Works - Son Thai",
  description: "sonthai's workspage",
};

const WorksPage = () => {
  const t = useTranslations("Works");

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t("heading 1")}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="cs2-boost"
              title="Counter Strike 2 Boost"
              thumbnail={thumbCS2Boost}
            >
              {t("cs2 boost")}
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="danabus"
              title="Danang Bus Tracking"
              thumbnail={thumbDanabus}
            >
              {t("danabus")}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="imarket" title="IMarket" thumbnail={thumbIMarket}>
              {t("imarket")}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default WorksPage;
