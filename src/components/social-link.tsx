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
    // Prevent default behavior for all links to avoid browser navigation
    e.preventDefault();

    // If not on mobile or no username provided, just call the onClick handler
    if (!isMobile || !username) {
      // For non-mobile, we'll manually handle navigation to maintain consistent behavior
      window.open(href, "_blank", "noopener,noreferrer");
      onClick?.();
      return;
    }

    // For Twitter/X
    if (platform.toLowerCase() === "x" || platform.toLowerCase() === "twitter") {
      // Try the twitter:// scheme
      const twitterScheme = `twitter://user?screen_name=${username}`;
      
      // Create a hidden iframe to attempt opening the app without changing page
      const appIntent = document.createElement('iframe');
      appIntent.style.display = 'none';
      document.body.appendChild(appIntent);
      
      // App opening attempt
      appIntent.src = twitterScheme;
      
      // Remove the iframe after attempt
      setTimeout(() => {
        document.body.removeChild(appIntent);
      }, 100);
      
      // Call onClick handler if provided
      onClick?.();
    }
    // For LinkedIn
    else if (platform.toLowerCase() === "linkedin") {
      // Try to open LinkedIn app via normal URL (app association)
      // Use window.open instead of location.href to avoid changing the current page
      window.open(href, "_blank", "noopener,noreferrer");
      onClick?.();
    }
    // For other platforms
    else {
      // Just open in new tab for other platforms
      window.open(href, "_blank", "noopener,noreferrer");
      onClick?.();
    }
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