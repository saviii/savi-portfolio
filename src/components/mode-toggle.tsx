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
      className="px-2 relative"
      onClick={cycleTheme}
    >
      {theme === 'light' && <SunIcon className="h-[1.2rem] w-[1.2rem]" />}
      {theme === 'dark' && <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
      {theme === 'system' && <DesktopIcon className="h-[1.2rem] w-[1.2rem]" />}
    </Button>
  );
}
