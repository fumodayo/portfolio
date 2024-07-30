"use client";

import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../navbar";
import Footer from "../footer";
import dynamic from "next/dynamic";
import VoxelAmeLoader from "../voxel-ame-loader";

const LazyVoxelAme = dynamic(() => import("../voxel-ame"), {
  ssr: false,
  loading: () => <VoxelAmeLoader />,
});

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box as="main" pb={8} bg={useColorModeValue("#f0e7db", "#202023")}>
      <Navbar />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelAme />
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
