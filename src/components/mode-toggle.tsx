"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={cycleTheme}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 data-[state=system]:rotate-90 data-[state=system]:scale-0" data-state={theme === 'system' ? 'system' : ''} />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 data-[state=system]:rotate-90 data-[state=system]:scale-0" data-state={theme === 'system' ? 'system' : ''} />
      <DesktopIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all data-[state=system]:rotate-0 data-[state=system]:scale-100" data-state={theme === 'system' ? 'system' : ''} />
    </Button>
  );
}
