import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import StoreProvider from '@/components/providers/StoreProvider';
import ThemeProvider from '@/components/providers/ThemeProvider';
import { DarkModeSync } from '@/components/layout/DarkModeSync';
import Topbar from '@/components/layout/Topbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '박주호 블로그',
  description: '박주호 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <DarkModeSync />
            <Topbar />
            <main className="min-h-screen pt-17 overflow-auto flex flex-col items-center">
              {children}
            </main>
            <Footer />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
