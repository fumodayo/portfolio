import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Chakra from "@/components/chakra";
import { cookies } from "next/headers";
import Layout from "@/components/layouts/main";
import AnimateScroll from "@/components/AnimateScroll";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bui Son Thai - Homepage",
  description: "buisonthai's homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesList = cookies();
  const colorMode = cookiesList.get("chakra-ui-color-mode");

  return (
    <html lang="en">
      <Chakra colorMode={colorMode?.value}>
        <body className={nunito.className}>
          <Layout>
            <AnimateScroll>{children}</AnimateScroll>
          </Layout>
        </body>
      </Chakra>
    </html>
  );
}
