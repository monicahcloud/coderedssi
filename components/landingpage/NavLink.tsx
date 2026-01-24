// components/nav-link.tsx
"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useMemo, useTransition } from "react";
import { cn } from "@/lib/utils";

type NavLinkCompatProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className"
> &
  LinkProps & {
    className?: string;
    activeClassName?: string;
    pendingClassName?: string;
    /**
     * If true, treats nested routes as active:
     * /dashboard is active for /dashboard/settings
     */
    startsWith?: boolean;
  };

const normalizePath = (path: string) => {
  if (!path) return "/";
  // strip query/hash if someone passes a string href with them
  const base = path.split("?")[0].split("#")[0];
  // remove trailing slash except root
  if (base.length > 1 && base.endsWith("/")) return base.slice(0, -1);
  return base;
};

const toPathString = (href: LinkProps["href"]) => {
  if (typeof href === "string") return href;
  // If it's an object, use pathname (queries shouldn’t affect active state)
  return href.pathname ?? "/";
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      href,
      startsWith = false,
      onClick,
      ...props
    },
    ref,
  ) => {
    const pathname = usePathname() ?? "/";
    const [isPending, startTransition] = useTransition();

    const hrefPath = useMemo(() => normalizePath(toPathString(href)), [href]);
    const currentPath = useMemo(() => normalizePath(pathname), [pathname]);

    const isActive = useMemo(() => {
      if (hrefPath === "/") return currentPath === "/";
      return startsWith
        ? currentPath === hrefPath || currentPath.startsWith(`${hrefPath}/`)
        : currentPath === hrefPath;
    }, [currentPath, hrefPath, startsWith]);

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          className,
          isActive && activeClassName,
          isPending && pendingClassName,
        )}
        onClick={(e) => {
          onClick?.(e);
          // This triggers pending state on click (best-effort)
          startTransition(() => {});
        }}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
