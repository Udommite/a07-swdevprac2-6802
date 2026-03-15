import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venue Explorer",
  description: "Browse and book memorable venues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopMenu />
        <main className="min-h-screen pt-[50px]">{children}</main>
      </body>
    </html>
  );
}
