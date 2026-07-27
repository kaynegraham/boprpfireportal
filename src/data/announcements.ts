/**
 * Announcement feed. Safe to edit: add, remove or reorder posts here and
 * the Home page feed updates automatically. Newest first is the usual
 * convention, but pinned posts always show above the rest regardless of
 * order in this list.
 */

export type Announcement = {
  /** Unique key used in the React list. */
  id: string;
  /** Post heading, e.g. "Recruit Intake Opens 1 August". */
  title: string;
  /** One short line shown on the card before it's expanded. */
  summary: string;
  /** Fuller detail shown once the reader clicks "View more". */
  body: string;
  /** Name of the person posting, e.g. "Chief A. Ngata". */
  author: string;
  /** Their role, shown as a badge, e.g. "Fire Commissioner". */
  authorRole: string;
  /** Station or area this concerns, e.g. "Mount Maunganui Fire Station". */
  station: string;
  /** ISO date, e.g. "2026-07-25". */
  date: string;
  /** Pinned posts are sorted to the top of the feed. */
  pinned?: boolean;
};

export const announcements: Announcement[] = [
  {
    id: "portal-stage-1",
    title: "Fire Portal, Stage 1 preview is live",
    summary:
      "The first build of the department portal is live: stations, fleet and this announcement feed.",
    body: "You're looking at the first build of the department portal: station and fleet information, plus this announcement feed. Roster, Training and Applications will come online once member sign-in ships in stage 2. Feedback is welcome through the usual channels.",
    author: "Comms Officer R. Tane",
    authorRole: "Communications",
    station: "Department-wide",
    date: "2026-07-26",
    pinned: true,
  },
  {
    id: "recruit-intake",
    title: "Recruit intake opens 1 August",
    summary:
      "Applications open next week, roughly twenty places across three stations.",
    body: "Applications for the next recruit intake open next week. Expect roughly twenty places across Tauranga City, Mount Maunganui and Greerton. The Applications page will take submissions once accounts are live in stage 2; for now, register your interest with your station officer.",
    author: "Commissioner J. Whitmore",
    authorRole: "Fire Commissioner",
    station: "Department-wide",
    date: "2026-07-25",
  },
  {
    id: "mtm-412-maintenance",
    title: "MTM 412 out of service for scheduled maintenance",
    summary: "Booked in for annual service from Monday; MTM 411 covers primary response.",
    body: "Mount Maunganui's pump rescue tender is booked in for its annual service from Monday, expected back in service by Friday. MTM 411 covers primary response during the outage; expect a short delay on second-appliance turnout for anything running to a second alarm.",
    author: "Chief D. Hemara",
    authorRole: "Operations",
    station: "Mount Maunganui Fire Station",
    date: "2026-07-22",
  },
  {
    id: "ba-refresher",
    title: "Reminder: BA refresher training this Saturday",
    summary: "Final reminder for crew due breathing apparatus recertification.",
    body: "All crew due for breathing apparatus recertification, this is your final reminder. Sessions run morning and afternoon at Tauranga City; contact your station officer to confirm your slot. Bring your current BA ticket and PPE.",
    author: "Training Officer L. Marsh",
    authorRole: "Training",
    station: "Tauranga City Fire Station",
    date: "2026-07-20",
  },
  {
    id: "whakatane-milestone",
    title: "Whakatāne crews pass 500 responses this year",
    summary: "A strong year for one of the district's busiest coastal rosters.",
    body: "A strong effort from a composite crew covering one of our busiest coastal areas. Well done to everyone on shift at Whakatāne Fire Station this year, and thank you to the volunteers who picked up extra callouts over summer.",
    author: "Deputy Commissioner S. Ropata",
    authorRole: "Deputy Commissioner",
    station: "Whakatāne Fire Station",
    date: "2026-07-15",
  },
];
