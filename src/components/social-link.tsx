"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import { getSocialDeepLink } from "@/lib/utils";

interface SocialLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  platform: string;
  username?: string;
  onClick?: () => void;
}

/**
 * A component that enhances social media links to open in native apps on mobile when available
 */
export function SocialLink({
  href,
  children,
  className,
  platform,
  username = "",
  onClick,
}: SocialLinkProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = 
        typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      
      const mobile = Boolean(
        userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
      );
      
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Handle click to attempt opening native app
  const handleClick = (e: React.MouseEvent) => {
    if (!isMobile || !username) {
      onClick?.();
      return;
    }

    // Prevent default behavior
    e.preventDefault();

    // For Twitter/X
    if (platform.toLowerCase() === "x" || platform.toLowerCase() === "twitter") {
      // First try the twitter:// scheme
      const twitterScheme = `twitter://user?screen_name=${username}`;
      const webFallback = `https://x.com/${username}`;
      
      window.location.href = twitterScheme;
      
      // Fallback to web after short timeout (will execute if app wasn't opened)
      setTimeout(() => {
        window.location.href = webFallback;
      }, 500);
    }
    // For LinkedIn
    else if (platform.toLowerCase() === "linkedin") {
      // LinkedIn app handles regular URLs through app association
      window.location.href = href;
    }
    // For other platforms, just open the regular URL
    else {
      window.location.href = href;
    }

    // Call the onClick handler if provided
    onClick?.();
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
} 