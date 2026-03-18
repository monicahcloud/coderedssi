"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { School, ChevronRight } from "lucide-react";

export function SchoolCTA() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSchoolClick = () => {
    const currentType = searchParams.get("type");
    const isAlreadyOnSchoolContact =
      pathname === "/" &&
      currentType === "school" &&
      window.location.hash === "#contact";

    if (isAlreadyOnSchoolContact) {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    router.push(`${pathname}?type=school#contact`);
  };

  return (
    <Button
      type="button"
      size="lg"
      onClick={handleSchoolClick}
      className="h-16 px-8 rounded-full text-lg font-black uppercase tracking-tighter 
      bg-primary text-primary-foreground
      shadow-[0_0_30px_-10px_rgba(var(--primary),0.6)]
      transition-all duration-300 ease-out
      hover:scale-[1.03]
      hover:shadow-[0_0_50px_-5px_rgba(var(--primary),0.9)]
      active:scale-[0.98]
      group">
      <span className="flex items-center gap-2">
        <School className="h-5 w-5" />
        Request School Assessment
        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Button>
  );
}
