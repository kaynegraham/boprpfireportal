/**
 * ---------------------------------------------------------------------------
 * STATION LIST — safe to edit
 * ---------------------------------------------------------------------------
 * This file is just content. Add, remove or reorder stations here and the
 * Stations page updates automatically — no layout code needs to change.
 *
 * To add a station, copy an existing block and change the values.
 * Every field is required except `image`.
 *
 * Station photos: drop a picture into `public/images/stations/` and set
 * `image: "/images/stations/your-file.jpg"`. If you leave `image` out, the
 * card shows a coloured placeholder with the callsign instead.
 * ---------------------------------------------------------------------------
 */

export type Station = {
  /** Unique key used in the URL / React list. Lowercase, no spaces. */
  id: string;
  /** Display name, e.g. "Tauranga Fire Station". */
  name: string;
  /** Radio callsign shown on the card badge, e.g. "TGA". */
  callsign: string;
  /** Street address line, e.g. "1 Cameron Road". */
  street: string;
  /** Suburb / town line, e.g. "Tauranga Central". */
  suburb: string;
  /** Placeholder appliance count until the fleet database lands in stage 2. */
  applianceCount: number;
  /** "Career", "Volunteer" or "Composite". */
  crewType: "Career" | "Volunteer" | "Composite";
  /** One or two lines of flavour text shown under the address. */
  description: string;
  /** Optional photo path under /public, e.g. "/images/stations/tauranga.jpg". */
  image?: string;
};

export const stations: Station[] = [
  {
    id: "tauranga",
    name: "Tauranga Fire Station",
    callsign: "TGA",
    street: "1 Cameron Road",
    suburb: "Tauranga Central",
    applianceCount: 5,
    crewType: "Career",
    description:
      "Regional headquarters and the busiest station in the district. Houses the primary aerial appliance and the district command unit.",
  },
  {
    id: "mount-maunganui",
    name: "Mount Maunganui Fire Station",
    callsign: "MTM",
    street: "17 Totara Street",
    suburb: "Mount Maunganui",
    applianceCount: 4,
    crewType: "Career",
    description:
      "Covers the port, the industrial precinct and the Mount. Primary hazmat response for the region.",
  },
  {
    id: "greerton",
    name: "Greerton Fire Station",
    callsign: "GRT",
    street: "1237 Cameron Road",
    suburb: "Greerton",
    applianceCount: 3,
    crewType: "Composite",
    description:
      "Southern Tauranga cover, including the state highway corridor and Tauriko.",
  },
  {
    id: "papamoa",
    name: "Papamoa Fire Station",
    callsign: "PPM",
    street: "18 Gravatt Road",
    suburb: "Papamoa",
    applianceCount: 3,
    crewType: "Composite",
    description:
      "Fast-growing coastal response area with a strong beach and surf rescue commitment.",
  },
  {
    id: "te-puke",
    name: "Te Puke Fire Station",
    callsign: "TPK",
    street: "130 Jellicoe Street",
    suburb: "Te Puke",
    applianceCount: 2,
    crewType: "Volunteer",
    description:
      "Rural and orchard country cover, plus a long stretch of State Highway 2.",
  },
  {
    id: "katikati",
    name: "Katikati Fire Station",
    callsign: "KTK",
    street: "36 Main Road",
    suburb: "Katikati",
    applianceCount: 2,
    crewType: "Volunteer",
    description:
      "Northern boundary station. Heavy rural fire and motor vehicle crash workload.",
  },
  {
    id: "rotorua",
    name: "Rotorua Fire Station",
    callsign: "RTA",
    street: "1176 Amohau Street",
    suburb: "Rotorua Central",
    applianceCount: 4,
    crewType: "Career",
    description:
      "Lakes district hub. Supports forestry and geothermal incident response.",
  },
  {
    id: "whakatane",
    name: "Whakatāne Fire Station",
    callsign: "WHK",
    street: "10 Commerce Street",
    suburb: "Whakatāne",
    applianceCount: 3,
    crewType: "Composite",
    description:
      "Eastern Bay operations, covering the harbour, the airport and the coastal highway.",
  },
];
