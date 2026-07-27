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
  /** Body text, one or two sentences. */
  body: string;
  /** Name of the person posting, e.g. "Chief A. Ngata". */
  author: string;
  /** Their role, shown as a badge, e.g. "Fire Commissioner". */
  authorRole: string;
  /** ISO date, e.g. "2026-07-25". */
  date: string;
  /** Pinned posts are sorted to the top of the feed. */
  pinned?: boolean;
};

export const announcements: Announcement[] = [
  {
    id: "portal-stage-1",
    title: "Fire Portal, Stage 1 preview is live",
    body: "You're looking at the first build of the department portal: station and fleet information, plus this announcement feed. Roster, Training and Applications will come online once member sign-in ships in stage 2.",
    author: "Comms Officer R. Tane",
    authorRole: "Communications",
    date: "2026-07-26",
    pinned: true,
  },
  {
    id: "recruit-intake",
    title: "Recruit intake opens 1 August",
    body: "Applications for the next recruit intake open next week. Expect roughly twenty places across Tauranga City, Mount Maunganui and Greerton. The Applications page will take submissions once accounts are live in stage 2.",
    author: "Commissioner J. Whitmore",
    authorRole: "Fire Commissioner",
    date: "2026-07-25",
  },
  {
    id: "mtm-412-maintenance",
    title: "MTM 412 out of service for scheduled maintenance",
    body: "Mount Maunganui's pump rescue tender is booked in for its annual service from Monday. MTM 411 covers primary response during the outage; expect a short delay on second-appliance turnout.",
    author: "Chief D. Hemara",
    authorRole: "Operations",
    date: "2026-07-22",
  },
  {
    id: "ba-refresher",
    title: "Reminder: BA refresher training this Saturday",
    body: "All crew due for breathing apparatus recertification, this is your final reminder. Sessions run morning and afternoon at Tauranga City; contact your station officer to confirm your slot.",
    author: "Training Officer L. Marsh",
    authorRole: "Training",
    date: "2026-07-20",
  },
  {
    id: "whakatane-milestone",
    title: "Whakatāne crews pass 500 responses this year",
    body: "A strong effort from a composite crew covering one of our busiest coastal areas. Well done to everyone on shift at Whakatāne Fire Station this year.",
    author: "Deputy Commissioner S. Ropata",
    authorRole: "Deputy Commissioner",
    date: "2026-07-15",
  },
];
