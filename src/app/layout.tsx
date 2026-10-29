import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bold-bind.lovable.app"),
  title: "Bold Bind — Creative & Digital Agency",
  description:
    "Bold Bind is a creative & digital agency in Dhaka delivering marketing, brand identity, design, automation, consulting, and video production.",
  authors: [{ name: "Bold Bind" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Bold Bind — Creative & Digital Agency",
    description:
      "Bold Bind is a creative & digital agency in Dhaka delivering marketing, brand identity, design, automation, consulting, and video production.",
    type: "website",
    siteName: "Bold Bind",
    images: [{ url: "/images/og.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bold Bind — Creative & Digital Agency",
    description:
      "Bold Bind is a creative & digital agency in Dhaka delivering marketing, brand identity, design, automation, consulting, and video production.",
    images: ["/images/og.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ED1C24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased bg-background text-foreground font-body`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
