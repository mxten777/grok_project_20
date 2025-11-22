import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mvp-project-09.vercel.app/'),
  title: "만송시스템(주) - 스마트 팩토리 솔루션",
  description: "공장 모니터링 시스템으로 생산성을 높이고 스마트 팩토리를 실현하세요.",
  keywords: "스마트 팩토리, 공장 모니터링, 산업 솔루션, 만송시스템",
  openGraph: {
    title: "만송시스템(주) - 스마트 팩토리 솔루션",
    description: "공장 모니터링 시스템으로 생산성을 높이고 스마트 팩토리를 실현하세요.",
    url: "https://mvp-project-09.vercel.app/",
    siteName: "만송시스템(주)",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "만송시스템 스마트 팩토리 솔루션",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
