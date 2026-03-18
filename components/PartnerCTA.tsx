"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Handshake, ChevronRight } from "lucide-react";

export function PartnerCTA() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePartnerClick = () => {
    const currentType = searchParams.get("type");
    const isAlreadyOnPartnerContact =
      pathname === "/" &&
      currentType === "partner" &&
      window.location.hash === "#contact";

    if (isAlreadyOnPartnerContact) {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    router.push(`${pathname}?type=partner#contact`);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="lg"
      onClick={handlePartnerClick}
      className="h-16 px-8 rounded-full border border-foreground/20 bg-background/60 text-foreground backdrop-blur-md hover:bg-foreground hover:text-background transition-all text-lg font-black uppercase tracking-tighter group">
      <span className="flex items-center gap-2">
        <Handshake className="h-5 w-5" />
        Become a Partner
        <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </span>
    </Button>
  );
}
