import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  /**
   * If provided, renders as a link. If omitted, renders as a span wrapper.
   */
  href?: string;
  /**
   * Controls text size + icon size.
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Show icon (shield) or not.
   */
  showIcon?: boolean;
  /**
   * Render only the icon (no text)
   */
  iconOnly?: boolean;
  /**
   * Optional tagline under the name
   */
  tagline?: string;
  className?: string;
};

const sizeStyles = {
  sm: { icon: "h-5 w-5", text: "text-lg", gap: "gap-2" },
  md: { icon: "h-6 w-6", text: "text-2xl", gap: "gap-2" },
  lg: { icon: "h-8 w-8", text: "text-3xl", gap: "gap-3" },
  xl: { icon: "h-10 w-10", text: "text-4xl", gap: "gap-4" },
};

export function BrandMark({
  href = "/",
  size = "md",
  iconOnly = false,
  tagline,
  className,
}: BrandMarkProps) {
  const styles = sizeStyles[size];

  const content = (
    <span className={cn("inline-flex items-center", styles.gap, className)}>
      {!iconOnly && (
        <span className="inline-flex flex-col leading-none">
          <span
            className={cn(
              styles.text,
              "font-bold tracking-tight text-foreground",
            )}>
            Code<span className="text-primary"> Red</span>
          </span>

          {tagline ? (
            <span className="mt-1 text-xs text-muted-foreground">
              {tagline}
            </span>
          ) : null}
        </span>
      )}

      {iconOnly ? <span className="sr-only">Code Red</span> : null}
    </span>
  );

  // If href is explicitly set to empty string/null-ish, render non-link.
  if (!href) return content;

  return (
    <Link href={href} className="inline-flex items-center">
      {content}
    </Link>
  );
}
