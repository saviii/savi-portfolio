import { ChatProvider } from "@/components/chat-provider";
import { MainContent } from "@/components/main-content";
import { ChatPanel } from "@/components/chat-panel";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Product Manager Portfolio",
    template: `%s | Portfolio`,
  },
  description: DATA.description,
  openGraph: {
    title: "Portfolio | savi.fyi",
    description: DATA.description,
    url: DATA.url,
    siteName: "savi.fyi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Portfolio - savi.fyi`,
      },
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
  twitter: {
    title: "Portfolio | savi.fyi",
    card: "summary_large_image",
    description: DATA.description,
    images: [`${DATA.url}/og-image.jpg`],
    creator: "@SaviPabla",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ChatProvider>
            <TooltipProvider delayDuration={0}>
              <MainContent>{children}</MainContent>
              <Navbar />
              <ChatPanel />
            </TooltipProvider>
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
