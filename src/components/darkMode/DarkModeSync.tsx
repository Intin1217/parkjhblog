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

  useEffect(() => {
    if (!resolvedTheme) return;

    const isDark = resolvedTheme === THEME.DARK;
    dispatch(setDarkMode(isDark));
    isInitialized.current = true;
  }, [dispatch, resolvedTheme]);

  useEffect(() => {
    if (!isInitialized.current || !resolvedTheme) return;

    const isDark = resolvedTheme === THEME.DARK;
    const themeChanged = isDark !== isDarkMode;

    if (themeChanged) {
      dispatch(setDarkMode(isDark));
    }
  }, [resolvedTheme, isDarkMode, dispatch]);

  useEffect(() => {
    if (!isInitialized.current) return;

    const newTheme = isDarkMode ? THEME.DARK : THEME.LIGHT;
    setTheme(newTheme);
  }, [isDarkMode, setTheme]);

  return null;
}
