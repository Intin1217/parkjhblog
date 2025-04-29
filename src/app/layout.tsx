import type { Metadata } from 'next';
import React from 'react';
import '../../globals.css';

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
      <body>{children}</body>
    </html>
  );
}
