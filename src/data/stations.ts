/**
 * Station list. Safe to edit: add, remove or reorder stations here and the
 * Stations page updates automatically, no layout code needs to change.
 *
 * To add a station, copy an existing block and change the values. Every
 * field is required except `image`.
 *
 * Station photos: drop a picture into `public/images/stations/` and set
 * `image: "/images/stations/your-file.jpg"`. If you leave `image` out, the
 * card shows a coloured placeholder with the callsign instead.
 */

export type Station = {
  /** Unique key used in the URL / React list. Lowercase, no spaces. */
  id: string;
  /** Display name, e.g. "Tauranga City Fire Station". */
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
    id: "tauranga-city",
    name: "Tauranga City Fire Station",
    callsign: "TGA",
    street: "1 Cameron Road",
    suburb: "Tauranga Central",
    applianceCount: 8,
    crewType: "Career",
    description:
      "Department headquarters and the busiest station in the district. Houses the primary aerial appliance and the district command unit.",
    image: "/images/stations/taurangastation.webp",
  },
  {
    id: "mount-maunganui",
    name: "Mount Maunganui Fire Station",
    callsign: "MTM",
    street: "17 Totara Street",
    suburb: "Mount Maunganui",
    applianceCount: 5,
    crewType: "Career",
    description:
      "Covers the port, the industrial precinct and the Mount. Primary hazmat response for the region.",
    image: "/images/stations/maunganuistation.webp",
  },
  {
    id: "greerton",
    name: "Greerton Fire Station",
    callsign: "GRT",
    street: "1237 Cameron Road",
    suburb: "Greerton",
    applianceCount: 4,
    crewType: "Composite",
    description:
      "Southern Tauranga cover, including the state highway corridor and the rural fringe out to Tauriko.",
    image: "/images/stations/greentonstation.webp",
  },
  {
    id: "ohope",
    name: "Ohope Fire Station",
    callsign: "OHP",
    street: "2 Pohutukawa Avenue",
    suburb: "Ohope Beach",
    applianceCount: 3,
    crewType: "Volunteer",
    description:
      "Coastal station covering Ohope Beach and the western approaches to Whakatāne, with a strong surf and swiftwater rescue commitment.",
    image: "/images/stations/ohopestation.webp",
  },
  {
    id: "opotiki",
    name: "Opotiki Fire Station",
    callsign: "OPO",
    street: "1 Bridge Street",
    suburb: "Opotiki",
    applianceCount: 4,
    crewType: "Volunteer",
    description:
      "Eastern gateway station covering the Opotiki district, State Highway 2 and the surrounding rural and forestry land.",
    image: "/images/stations/opotikistation.webp",
  },
  {
    id: "whakatane",
    name: "Whakatāne Fire Station",
    callsign: "WHK",
    street: "10 Commerce Street",
    suburb: "Whakatāne",
    applianceCount: 4,
    crewType: "Composite",
    description:
      "Eastern Bay operations, covering the harbour, the airport and the coastal highway.",
    image: "/images/stations/whakatanestation.webp",
  },
];
