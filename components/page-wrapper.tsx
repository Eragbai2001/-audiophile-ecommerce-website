"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Don't show navigation on home page (it's inside Hero)
  if (isHomePage) {
    return <>{children}</>;
  }

  // Show navigation with black background on all other pages
  return (
    <>
      <div className="bg-[#191919]">
        <Navigation />
      </div>
      {children}
    </>
  );
}
