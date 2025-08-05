"use client";

import { useChat } from "./chat-provider";
import { cn } from "@/lib/utils";

export function MainContent({ children }: { children: React.ReactNode }) {
  const { isChatOpen } = useChat();

  return (
    <div
      className={cn(
        "transition-transform duration-300 ease-in-out",
        isChatOpen ? "transform -translate-x-56" : "transform-none"
      )}
    >
      {children}
    </div>
  );
}
