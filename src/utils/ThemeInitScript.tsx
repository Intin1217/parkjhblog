export default function ThemeInitScript() {
  const script = `
    (function() {
      try {
        const theme = localStorage.getItem('theme');
        const persistRoot = localStorage.getItem('persist:root');
        let isDarkMode = false;
        
        if (persistRoot) {
          try {
            const parsedRoot = JSON.parse(persistRoot);
            const darkModeState = JSON.parse(parsedRoot.isDarkMode || '{}');
            isDarkMode = darkModeState.isDarkMode;
          } catch (e) {}
        }
        
        const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldApplyDark = theme === 'dark' || (theme === 'system' && isSystemDark) || isDarkMode;
        
        if (shouldApplyDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (error) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
