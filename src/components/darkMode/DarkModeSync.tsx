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
  const prevResolvedTheme = useRef(resolvedTheme);
  const prevIsDarkMode = useRef(isDarkMode);

  useEffect(() => {
    if (!resolvedTheme) return;

    const isDark = resolvedTheme === THEME.DARK;
    dispatch(setDarkMode(isDark));
    isInitialized.current = true;
    prevResolvedTheme.current = resolvedTheme;
    prevIsDarkMode.current = isDark;
  }, []);

  useEffect(() => {
    if (!isInitialized.current || !resolvedTheme) return;

    if (
      resolvedTheme !== prevResolvedTheme.current &&
      (resolvedTheme === THEME.DARK) !== isDarkMode
    ) {
      const isDark = resolvedTheme === THEME.DARK;
      dispatch(setDarkMode(isDark));
      prevResolvedTheme.current = resolvedTheme;
    }
  }, [resolvedTheme, isDarkMode, dispatch]);

  useEffect(() => {
    if (!isInitialized.current) return;

    if (
      isDarkMode !== prevIsDarkMode.current &&
      (isDarkMode ? THEME.DARK : THEME.LIGHT) !== resolvedTheme
    ) {
      const newTheme = isDarkMode ? THEME.DARK : THEME.LIGHT;
      setTheme(newTheme);
      prevIsDarkMode.current = isDarkMode;
    }
  }, [isDarkMode, setTheme]);

  return null;
}
