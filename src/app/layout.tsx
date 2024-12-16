

import { ClerkProvider } from '@clerk/nextjs'
import { type Metadata } from "next";
import { Inter } from 'next/font/google'
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import "@/styles/globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.siteName}`,
    default: `Warike | ${siteConfig.siteDescription}`,
  },
  description: siteConfig.siteDescription,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "software development",
  ],
  authors: [
    {
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  ],
  creator:siteConfig.siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    siteName: siteConfig.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    images: [`${siteConfig.siteUrl}/og.png`],
    creator: `@${siteConfig.companyName}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html 
        suppressHydrationWarning
        lang="en"
        className={cn(
          'h-full scroll-smooth antialiased',
          inter.variable
        )}
      >
        <body>{children}</body>
      </html>
    </ClerkProvider>
    
  );
}
