import NavBar from "@/components/root/NavBar";
import GlobalRootMenu from "@/components/root/globalRootMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <NavBar />
      <GlobalRootMenu />
      <main>{children}</main>
    </section>
  );
}
