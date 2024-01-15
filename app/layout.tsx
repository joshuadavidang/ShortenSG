import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import { Providers } from "./redux/provider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShortenSG",
  description: "No more long links, shorten them now",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
