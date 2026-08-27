import type { Metadata } from "next";
import { Bebas_Neue, Libre_Franklin } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});
const body = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Full'Tucky | Beyond Southern",
    template: "%s | Full'Tucky",
  },
  description:
    "It's not just southern, it's Full'Tucky. Kentucky-built apparel for the ones who show up early, stay late, and live full. Based in Louisville, KY.",
  keywords: [
    "Full'Tucky",
    "Kentucky apparel",
    "Louisville clothing brand",
    "Beyond Southern",
    "Kentucky t-shirts",
    "Kentucky hats",
  ],
  openGraph: {
    type: "website",
    siteName: "Full'Tucky",
    title: "Full'Tucky | Beyond Southern",
    description:
      "Kentucky-built apparel for the ones who show up early, stay late, and live full.",
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1600,
        height: 844,
        alt: "Friends around a backyard fire in Full'Tucky gear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full'Tucky | Beyond Southern",
    description:
      "Kentucky-built apparel for the ones who show up early, stay late, and live full.",
    images: ["/images/hero-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
