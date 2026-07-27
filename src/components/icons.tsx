import type { ReactElement, SVGProps } from "react";

/**
 * Small inline icon set for the sidebar nav. Kept as plain inline SVG so the
 * project doesn't need an icon library dependency for stage 1.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function RosterIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16.5 9.5a2.5 2.5 0 1 0 0-5" />
      <path d="M15 20a5.5 5.5 0 0 1 5.5-5.5H21" />
    </svg>
  );
}

export function SopsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V4a.5.5 0 0 1 .5-.5Z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 12.5h6M9 15.5h6M9 9.5h3" />
    </svg>
  );
}

export function TrainingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6 10.7v4.6c0 1.5 2.7 3.2 6 3.2s6-1.7 6-3.2v-4.6" />
      <path d="M21.5 8.5v6" />
    </svg>
  );
}

export function FleetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 16V9.5a1 1 0 0 1 1-1h9.2a1 1 0 0 1 .9.55L16 12h3.5a1.5 1.5 0 0 1 1.5 1.5V16" />
      <path d="M3 16h1.5M16 16H8" />
      <circle cx="7" cy="17.5" r="1.75" />
      <circle cx="18" cy="17.5" r="1.75" />
    </svg>
  );
}

export function StationsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V10.5L12 4l8 6.5V21" />
      <path d="M9 21v-6h6v6" />
      <path d="M4 21h16" />
    </svg>
  );
}

export function ApplicationsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 20V3.5Z" />
      <path d="M15 3.5V6.5h3" />
      <path d="m9.5 13 1.75 1.75L14.5 11" />
    </svg>
  );
}

export function ProfileIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  );
}

export const iconByKey: Record<string, (props: IconProps) => ReactElement> = {
  home: HomeIcon,
  roster: RosterIcon,
  sops: SopsIcon,
  training: TrainingIcon,
  fleet: FleetIcon,
  stations: StationsIcon,
  applications: ApplicationsIcon,
  profile: ProfileIcon,
};
