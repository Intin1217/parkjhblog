import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
import StoreProvider from '@/app/StoreProvider';
import ThemeProvider from '@/app/ThemeProvider';
import { DarkModeSync } from '@/components/darkMode/DarkModeSync';

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
            {children}
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
