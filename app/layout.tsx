import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Head from "next/head";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights you need
});
export const metadata: Metadata = {
  title: "Tarlac State University 2.0",
  description: "The unofficial website of Tarlac State University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/tsu-logo.webp" />
      </head>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
