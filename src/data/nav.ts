/**
 * Sidebar navigation items. Edit labels/hrefs here; icons live in
 * `src/components/icons.tsx`.
 */
export type NavItem = {
  href: string;
  label: string;
  icon: string;
  /** Pages that need real auth/data in stage 2 show a "coming soon" card. */
  comingSoon?: boolean;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/roster", label: "Roster", icon: "roster", comingSoon: true },
  { href: "/sops", label: "SOPs / Policies", icon: "sops" },
  { href: "/training", label: "Training", icon: "training", comingSoon: true },
  { href: "/fleet", label: "Vehicle Fleet", icon: "fleet" },
  { href: "/stations", label: "Stations", icon: "stations" },
  {
    href: "/applications",
    label: "Applications",
    icon: "applications",
    comingSoon: true,
  },
  { href: "/profile", label: "Profile", icon: "profile", comingSoon: true },
];
