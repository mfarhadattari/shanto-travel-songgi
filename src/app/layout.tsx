import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/libs/providers/Providers";

export const metadata: Metadata = {
  title: "Shanto Travel Songgi",
  description: "A travels lovers community developed by DevMFarhad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  );
}
