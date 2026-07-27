/**
 * Sidebar navigation items. Also the source for the Home page's Quick
 * Links list, so labels, order and "coming soon" status only need editing
 * in one place. Icons live in `src/components/icons.tsx`.
 */
export type NavItem = {
  href: string;
  label: string;
  icon: string;
  /** Short blurb shown under the label in Quick Links. */
  description: string;
  /** Pages that need real auth/data in stage 2 show a "coming soon" card. */
  comingSoon?: boolean;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: "home", description: "Portal overview" },
  {
    href: "/roster",
    label: "Roster",
    icon: "roster",
    description: "Shift rosters and station assignments",
    comingSoon: true,
  },
  {
    href: "/sops",
    label: "SOPs / Policies",
    icon: "sops",
    description: "Standard operating procedures and policy documents",
  },
  {
    href: "/training",
    label: "Training",
    icon: "training",
    description: "Competency records and course sign-offs",
    comingSoon: true,
  },
  {
    href: "/fleet",
    label: "Vehicle Fleet",
    icon: "fleet",
    description: "See appliances by type across the department",
  },
  {
    href: "/stations",
    label: "Stations",
    icon: "stations",
    description: "Browse every station across the district",
  },
  {
    href: "/applications",
    label: "Applications",
    icon: "applications",
    description: "Recruitment and transfer applications",
    comingSoon: true,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: "profile",
    description: "Your member details and account settings",
    comingSoon: true,
  },
];
