import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GPTTitle from "@/components/atoms/GPTTitle";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple ChatGPT",
  description: "Friend with openai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GPTTitle title="SimpleGPT" titleColor="blue"/>
        {children}
        </body>
    </html>
  );
}
