'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDispatch } from 'react-redux';
import { setDarkMode } from '@/store/slices/darkModeSlice';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, ComputerIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
};

const ICON_SIZES = {
  DEFAULT: 'h-5 w-5',
  SMALL: 'h-4 w-4',
};

export default function DarkModeToggleButton() {
  const dispatch = useDispatch();
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setMounted(true);
  }, []);

  const isSystemDarkMode = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);

    switch (newTheme) {
      case THEME.DARK:
        dispatch(setDarkMode(true));
        break;
      case THEME.LIGHT:
        dispatch(setDarkMode(false));
        break;
      case THEME.SYSTEM:
        dispatch(setDarkMode(isSystemDarkMode()));
        break;
    }
  };

  const isActive = (themeOption: string) => mounted && theme === themeOption;

  const getThemeIcon = () => {
    if (!mounted) return <SunIcon className={ICON_SIZES.DEFAULT} />;

    return resolvedTheme === THEME.DARK ? (
      <MoonIcon className={ICON_SIZES.DEFAULT} />
    ) : (
      <SunIcon className={ICON_SIZES.DEFAULT} />
    );
  };

  if (!mounted) {
    return (
      <Button variant="ghost" className="w-10 cursor-pointer">
        <SunIcon className={ICON_SIZES.DEFAULT} />
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-10 cursor-pointer dark:bg-dark dark:hover:bg-dark-point"
        >
          {getThemeIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 dark:bg-dark">
        <DropdownMenuLabel className="text-center">
          다크모드 설정
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => handleThemeChange(THEME.DARK)}
            className={`cursor-pointer ${isActive(THEME.DARK) ? 'dark:bg-dark-point dark:hover:bg-dark-hover' : 'hover:bg-dark-200'}`}
          >
            <MoonIcon className={`mr-2 ${ICON_SIZES.SMALL}`} />
            다크 모드
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange(THEME.LIGHT)}
            className={`cursor-pointer ${isActive(THEME.LIGHT) ? 'bg-light hover:bg-dark-200' : 'dark:hover:bg-dark-point'}`}
          >
            <SunIcon className={`mr-2 ${ICON_SIZES.SMALL}`} />
            라이트 모드
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleThemeChange(THEME.SYSTEM)}
            className="cursor-pointer bg-light hover:bg-dark-200 dark:bg-dark dark:hover:bg-dark-point"
          >
            <ComputerIcon className={`mr-2 ${ICON_SIZES.SMALL}`} />
            시스템 설정
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
