'use client';

import React, { useEffect, useState } from 'react';
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from 'next-themes';

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
