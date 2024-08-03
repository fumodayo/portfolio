"use client";

import Layout from "@/components/layouts/article";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <html>
      <body>
        <Layout>
          <Container py={20}>
            <Flex
              justifyContent="center"
              justifyItems="center"
              direction="column"
            >
              <Box textAlign="center">
                <Heading as="h1">Not found</Heading>
                <Text>The page you&apos;re looking for was not found.</Text>
              </Box>

              <Divider my={6} />
              <Box my={6} textAlign="center">
                <Link href="/">
                  <Button colorScheme="teal">Return to home</Button>
                </Link>
              </Box>
            </Flex>
          </Container>
        </Layout>
      </body>
    </html>
  );
};

export default NotFound;
