"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// <Link href="/"> that scrolls back to the top when you're already on the home page,
// where a link to the current URL would otherwise do nothing visible.
// onNavigate only fires for in-app navigation, so Ctrl/Cmd-click still opens a new tab.
export default function HomeLink({ onNavigate, ...props }) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      href="/"
      onNavigate={(event) => {
        onNavigate?.(event);
        if (pathname === "/") {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    />
  );
}
