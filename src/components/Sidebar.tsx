"use client";

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
            className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-sidebar-active text-sidebar-fg-active"
                : "text-sidebar-fg hover:bg-sidebar-hover hover:text-sidebar-fg-active"
            }`}
          >
            <Icon
              className={`shrink-0 ${
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
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-fg">
        BOP
      </div>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-sidebar-fg-active">
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
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-xs font-bold text-accent-fg">
            BOP
          </div>
          <span className="text-sm font-semibold text-sidebar-fg-active">
            BOPRP Fire Portal
          </span>
        </div>
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-sidebar-fg-active hover:bg-sidebar-hover"
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
