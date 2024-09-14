import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import customCursor from "../styles/Cursor.module.css";
import Cursor from "@/components/Cursor/CustomCursor";

const font = Poppins({ subsets: ["latin"], weight:["400","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "RDA: Your Marketing Partner!",
  description: "Award-Winning Social Media Marketing Agency in 2023",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
      {/* <Cursor /> */}
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
