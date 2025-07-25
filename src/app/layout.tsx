import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

import { SITE_NAME } from "@/constants/constants";

const font = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  icons: {
    icon: "logo.svg",
    shortcut: "logo.svg",
  },
  title: {
    absolute: `${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Best task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable}`}>{children}</body>
    </html>
  );
}
