import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box textAlign="center" opacity={0.4} fontSize="sm">
    {new Date().getFullYear()} Bui Son Thai.
  </Box>
);

export default Footer;
