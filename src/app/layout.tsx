import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CursorMatfia's Archive",
  description:
    "Discover, share, and generate powerful prompts and rule sets for AI development. Join the community of developers optimizing their AI workflows.",
  keywords: ["cursor", "ai", "prompts", "rules", "development", "automation"],
  authors: [{ name: "CursorMatfia" }],
  openGraph: {
    title: "CursorMatfia's Archive",
    description:
      "Discover, share, and generate powerful prompts and rule sets for AI development.",
    url: "https://cursormatfia-archive.com",
    siteName: "CursorMatfia's Archive",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CursorMatfia's Archive",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CursorMatfia's Archive",
    description:
      "Discover, share, and generate powerful prompts and rule sets for AI development.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
