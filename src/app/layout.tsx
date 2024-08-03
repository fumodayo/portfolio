import Chakra from "@/components/chakra";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <Chakra>{children}</Chakra>
    </html>
  );
}
