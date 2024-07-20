import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, type Styles } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const styles: Styles = {
  // global: (props) => ({
  //   body: {
  //     bg: mode("#f0e7db", "#202023")(props),
  //   },
  // }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: '"M PLUS Rounded 1c", sans-serif',
};

const colors = {
  grassTeal: "#88ccca",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
