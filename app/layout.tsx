import "./globals.css";
import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <NavBar />
          <main className="p-5"> {children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
