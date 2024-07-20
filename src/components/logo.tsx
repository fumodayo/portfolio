import Link from "next/link";
import styled from "@emotion/styled";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { GiFallingStar } from "react-icons/gi";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`;

const IconBox = styled.div`
  display: flex;
  > svg {
    transition: 200ms ease;
  }

  &:hover {
    transform: rotate(-20deg);
  }
`;

const Logo = () => (
  <Link href="/" scroll={false}>
    <LogoBox>
      <IconBox>
        <GiFallingStar size={24} />
      </IconBox>
      <Text
        color={useColorModeValue("gray.800", "whiteAlpha.900")}
        fontFamily="Nunito, sans-serif"
        fontWeight="bold"
        ml={1}
      >
        Son Thai
      </Text>
    </LogoBox>
  </Link>
);

export default Logo;
