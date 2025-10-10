import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OmniaSky - Intelligence Networks",
  description:
    "Building the infrastructure technology everyone and AI will need. We architect foundational systems for tomorrow—enabling the next generation of autonomous operations.",
  metadataBase: new URL("https://omniasky.com"),
  openGraph: {
    title: "OmniaSky - Intelligence Networks",
    description:
      "Building the infrastructure technology everyone and AI will need. We architect foundational systems for tomorrow—creating the layers that enable the next generation of autonomous operations.",
    url: "https://omniasky.com",
    siteName: "OmniaSky",
    images: [
      {
        url: "https://s3.ap-southeast-3.amazonaws.com/assets.omniasky.com/web/omniasky-og-image.png",
        width: 1200,
        height: 630,
        alt: "OmniaSky - Intelligence Networks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniaSky - Intelligence Networks",
    description:
      "Building the infrastructure technology everyone and AI will need. We architect foundational systems for tomorrow—enabling the next generation of autonomous operations.",
    images: [
      "https://s3.ap-southeast-3.amazonaws.com/assets.omniasky.com/web/omniasky-og-image.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
