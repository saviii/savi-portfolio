import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}

// Utility functions for deep linking to social media apps
export function getSocialDeepLink(platform: string, username: string): string {
  switch (platform.toLowerCase()) {
    case 'twitter':
    case 'x':
      // Twitter/X deep link format
      return `https://x.com/${username}`;
      // Note: We're using https://x.com URL which has app association
      // This will automatically open in the X app when available on mobile
    
    case 'linkedin':
      // LinkedIn deep link format
      // LinkedIn mobile app uses https://www.linkedin.com URLs with app association
      return `https://www.linkedin.com/in/${username}`;
    
    case 'github':
      // GitHub deep link format
      return `https://github.com/${username}`;
      
    default:
      return '';
  }
}
