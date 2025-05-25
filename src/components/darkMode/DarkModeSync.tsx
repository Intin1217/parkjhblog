'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setDarkMode } from '@/store/slices/darkModeSlice';

const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
};

export function DarkModeSync() {
  const dispatch = useDispatch();
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkMode = useSelector(
    (state: RootState) => state.isDarkMode.isDarkMode,
  );
  const isInitialized = useRef(false);
  const prevResolvedTheme = useRef<string | undefined>(undefined);
  const prevIsDarkMode = useRef<boolean | undefined>(undefined);

  // 초기화 처리
  useEffect(() => {
    if (!resolvedTheme) return;

    const isDark = resolvedTheme === THEME.DARK;
    dispatch(setDarkMode(isDark));
    isInitialized.current = true;
    prevResolvedTheme.current = resolvedTheme;
    prevIsDarkMode.current = isDark;
  }, []);

  useEffect(() => {
    if (
      !isInitialized.current ||
      !resolvedTheme ||
      resolvedTheme === prevResolvedTheme.current
    )
      return;

    const isDark = resolvedTheme === THEME.DARK;

    if (isDark !== prevIsDarkMode.current) {
      dispatch(setDarkMode(isDark));
      prevIsDarkMode.current = isDark;
    }

    prevResolvedTheme.current = resolvedTheme;
  }, [resolvedTheme, dispatch]);

  useEffect(() => {
    if (!isInitialized.current || isDarkMode === prevIsDarkMode.current) return;

    const newTheme = isDarkMode ? THEME.DARK : THEME.LIGHT;
    setTheme(newTheme);
    prevIsDarkMode.current = isDarkMode;
  }, [isDarkMode, setTheme]);

  return null;
}
