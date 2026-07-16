import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jinruozai.github.io/HTML-Light-Demo/";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const publicAsset = (path: string) => new URL(`${basePath}${path}`, siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "云隙照明 - 专注光的价值",
    template: "%s — 云隙照明",
  },
  description:
    "原创光影美学，自研核心技术，精益自主智造。设计、研发、制造、方案、工程一站式照明解决方案。",
  openGraph: {
    title: "云隙照明 - 专注光的价值",
    description: "我们的使命，专注于光的价值",
    type: "website",
    url: siteUrl,
    images: [{ url: publicAsset("/og.jpg"), width: 1200, height: 630, alt: "云隙照明" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "云隙照明 - 专注光的价值",
    description: "我们的使命，专注于光的价值",
    images: [publicAsset("/og.jpg")],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
