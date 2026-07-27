# BOPRP Fire Portal

Internal department portal for **Bay of Plenty RP Fire & Emergency**, a
FiveM roleplay community. Built with Next.js 15 (App Router), TypeScript
and Tailwind CSS.

## Stage 1 — this build

Stage 1 is the static shell: layout, navigation and display-only pages.
There is **no authentication, no database and no API routes** yet.

What's included:

- **Layout** — dark sidebar nav (collapses to a top bar under `md`), with a
  full-width banner header on every page.
- **Home** — placeholder welcome copy and quick links.
- **Stations** — card grid sourced from [`src/data/stations.ts`](src/data/stations.ts).
- **Vehicle Fleet** — sectioned list (Pump/PRT, Aerial, Command/Hazmat, Rescue,
  Rural/Tanker, Support) sourced from [`src/data/fleet.ts`](src/data/fleet.ts).
- **SOPs / Policies** — placeholder category list.
- **Roster, Training, Applications, Profile** — render a "Coming soon —
  requires login" card, since these all depend on member accounts that
  don't exist yet.

### Editing content

Non-devs can edit the portal's content without touching any component code:

- `src/data/stations.ts` — one object per station (name, address, appliance
  count, crew type, description, optional photo).
- `src/data/fleet.ts` — one section per apparatus category, each with a list
  of vehicles (year, make/model, type, callsign, home station).
- `src/data/nav.ts` — sidebar labels, order and which pages are marked
  "coming soon".

### Theming

All colours used by the portal are CSS variables defined once at the top of
[`src/app/globals.css`](src/app/globals.css) (`--bg-sidebar`, `--bg-content`,
`--accent`, the banner gradient stops, etc.). Change a value there and the
whole portal reskins — no component edits required. To swap the banner
gradient for a photo, drop an image into `public/images/` and set
`--banner-image: url("/images/your-file.jpg")`.

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Stage 2 — planned

Stage 2 will add the real backend behind the placeholders above:

- **Discord OAuth**, reusing the existing BOPRP Discord application, so
  members sign in with their Discord account.
- **Role-gated access**, mapping Discord roles to portal permissions
  (member vs. officer vs. admin views).
- **A live database**, using the existing BOPRP TiDB instance, to back:
  - **Roster** — real shift rosters and station assignments.
  - **Training** — competency records and course sign-offs.
  - **Applications** — recruitment and transfer application submission and
    tracking.
  - **Profile** — member details pulled from the authenticated session.

None of the above is implemented in this stage — the corresponding pages
currently render static "coming soon" placeholders only.
