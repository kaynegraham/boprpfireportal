"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/nav";
import { iconByKey, MenuIcon, CloseIcon } from "@/components/icons";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
      {navItems.map((item) => {
        const Icon = iconByKey[item.icon];
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
              isActive
                ? "bg-sidebar-active text-sidebar-fg-active"
                : "text-sidebar-fg hover:bg-sidebar-hover hover:text-sidebar-fg-active"
            }`}
          >
            {isActive && (
              <span
                aria-hidden
                className="absolute inset-y-1.5 left-0 w-1 rounded-full bg-accent"
              />
            )}
            <Icon
              className={`shrink-0 transition-colors ${
                isActive ? "text-accent" : "text-sidebar-fg group-hover:text-sidebar-fg-active"
              }`}
            />
            <span className="truncate">{item.label}</span>
            {item.comingSoon && (
              <span className="ml-auto rounded-full border border-sidebar-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-sidebar-fg/70">
                soon
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

function SidebarBrand() {
  return (
    <div className="flex items-center gap-3 border-b border-sidebar-border px-4 py-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow">
        <Image
          src="/images/firerescue.webp"
          alt="Fire Rescue Rauora crest"
          width={56}
          height={56}
          className="h-full w-full object-contain"
          priority
        />
      </div>
      <div className="leading-tight">
        <p className="text-base font-semibold text-sidebar-fg-active">
          BOPRP Fire
        </p>
        <p className="text-xs text-sidebar-fg">Department Portal</p>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-sidebar-border bg-sidebar px-4 py-3 md:hidden">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 shadow">
            <Image
              src="/images/firerescue.webp"
              alt="Fire Rescue Rauora crest"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/25">
            <Image
              src="/images/boprplogo.webp"
              alt="Bay of Plenty Roleplay logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="truncate text-sm font-semibold text-sidebar-fg-active">
            BOPRP Fire Portal
          </span>
        </div>
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sidebar-fg-active hover:bg-sidebar-hover"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Mobile dropdown nav */}
      {mobileOpen && (
        <div className="flex flex-col border-b border-sidebar-border bg-sidebar md:hidden">
          <NavLinks onNavigate={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col border-r border-sidebar-border bg-sidebar md:flex">
        <SidebarBrand />
        <NavLinks />
        <div className="border-t border-sidebar-border px-4 py-3 text-[11px] text-sidebar-fg/70">
          Stage 1 preview build
        </div>
      </aside>
    </>
  );
}
