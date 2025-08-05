"use client";

import {
  MessageSquare,
  PanelBottomClose,
  PanelBottomOpen,
} from "lucide-react";
import { useState } from "react";
import { useChat } from "./chat-provider";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SocialLink } from "./social-link";

export default function Navbar() {
  const { toggleChat } = useChat();
  const [isDockCollapsed, setIsDockCollapsed] = useState(false);


  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock
        className={cn(
          "z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          {
            "transition-transform-y duration-300 ease-in-out transform-y-20":
              isDockCollapsed,
          }
        )}
      >
        {!isDockCollapsed &&
          DATA.navbar.map((item) => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        {!isDockCollapsed &&
          Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => {
              // Extract username from URL for deep linking
              let username = "";
              if (name === "X") {
                username = social.url.split("SaviPabla")[0].split("/").pop() || "SaviPabla";
              } else if (name === "LinkedIn") {
                username = social.url.split("saviii")[0].split("/").pop() || "saviii";
              } else if (name === "GitHub") {
                username = social.url.split("saviii")[0].split("/").pop() || "saviii";
              }
              
              return (
                <DockIcon key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SocialLink
                        href={social.url}
                        platform={name}
                        username={username}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12"
                        )}
                      >
                        <social.icon className="size-4" />
                      </SocialLink>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              );
            })}
        {!isDockCollapsed && (
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleChat}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <MessageSquare className="size-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Chat</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        )}
        {!isDockCollapsed && (
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        )}
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setIsDockCollapsed(!isDockCollapsed)}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12"
                )}
              >
                {isDockCollapsed ? (
                  <PanelBottomOpen className="size-4" />
                ) : (
                  <PanelBottomClose className="size-4" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isDockCollapsed ? "Open" : "Close"}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
