import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Chakra from "@/components/chakra";
import { cookies } from "next/headers";
import Layout from "@/components/layouts/main";
import AnimateScroll from "@/components/AnimateScroll";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bui Son Thai - Homepage",
  description: "buisonthai's homepage",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const cookiesList = cookies();
  const colorMode = cookiesList.get("chakra-ui-color-mode");

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <Chakra colorMode={colorMode?.value}>
          <body className={nunito.className}>
            <Layout>
              <AnimateScroll>{children}</AnimateScroll>
            </Layout>
          </body>
        </Chakra>
      </NextIntlClientProvider>
    </html>
  );
}
