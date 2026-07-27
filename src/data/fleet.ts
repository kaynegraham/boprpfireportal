/**
 * Vehicle fleet. Safe to edit: the Vehicle Fleet page renders one section
 * per entry in `fleet`, in the order they appear here.
 *
 * To add a vehicle, copy an existing line inside the right section's
 * `vehicles` list and change the values. To add a whole new section, copy
 * a whole `{ ... }` block.
 */

export type Vehicle = {
  /** Model year, e.g. 2019. */
  year: number;
  /** Manufacturer and model, e.g. "Scania P280". */
  makeModel: string;
  /** Appliance type, e.g. "Type 3 Pump". */
  type: string;
  /** Radio callsign, e.g. "TGA 401". */
  callsign: string;
  /** Home station name, should match a station in stations.ts. */
  station: string;
};

export type FleetSection = {
  /** Unique key used in the URL anchor / React list. Lowercase, no spaces. */
  id: string;
  /** Section heading, e.g. "Pump / PRT". */
  title: string;
  /** One paragraph explaining what this class of appliance is used for. */
  description: string;
  vehicles: Vehicle[];
};

export const fleet: FleetSection[] = [
  {
    id: "pump-prt",
    title: "Pump / PRT",
    description:
      "The backbone of the fleet. Type 3 and Type 4 pumps handle structure fire, vehicle fire and the majority of medical and rescue callouts. Pump Rescue Tenders (PRT) carry the full hydraulic rescue kit in addition to a standard pump loadout.",
    vehicles: [
      {
        year: 2021,
        makeModel: "Scania P280",
        type: "Type 3 Pump",
        callsign: "TGA 401",
        station: "Tauranga City Fire Station",
      },
      {
        year: 2019,
        makeModel: "Scania P280",
        type: "Type 4 Pump Rescue Tender",
        callsign: "TGA 402",
        station: "Tauranga City Fire Station",
      },
      {
        year: 2020,
        makeModel: "MAN TGM 15.290",
        type: "Type 3 Pump",
        callsign: "MTM 411",
        station: "Mount Maunganui Fire Station",
      },
      {
        year: 2018,
        makeModel: "Scania P280",
        type: "Type 4 Pump Rescue Tender",
        callsign: "MTM 412",
        station: "Mount Maunganui Fire Station",
      },
      {
        year: 2017,
        makeModel: "MAN TGM 13.250",
        type: "Type 3 Pump",
        callsign: "GRT 421",
        station: "Greerton Fire Station",
      },
      {
        year: 2023,
        makeModel: "Isuzu FRR 500",
        type: "Type 3 Pump",
        callsign: "GRT 422",
        station: "Greerton Fire Station",
      },
      {
        year: 2022,
        makeModel: "Scania P320",
        type: "Type 3 Pump",
        callsign: "OHP 431",
        station: "Ohope Fire Station",
      },
      {
        year: 2016,
        makeModel: "Mitsubishi Fuso Fighter",
        type: "Type 3 Pump",
        callsign: "OHP 432",
        station: "Ohope Fire Station",
      },
      {
        year: 2015,
        makeModel: "Mitsubishi Fuso Fighter",
        type: "Type 3 Pump",
        callsign: "OPO 441",
        station: "Opotiki Fire Station",
      },
      {
        year: 2019,
        makeModel: "Isuzu FTR 900",
        type: "Type 3 Pump",
        callsign: "OPO 442",
        station: "Opotiki Fire Station",
      },
      {
        year: 2018,
        makeModel: "MAN TGM 15.290",
        type: "Type 4 Pump Rescue Tender",
        callsign: "WHK 471",
        station: "Whakatāne Fire Station",
      },
      {
        year: 2020,
        makeModel: "Scania P280",
        type: "Type 3 Pump",
        callsign: "WHK 472",
        station: "Whakatāne Fire Station",
      },
    ],
  },
  {
    id: "aerial",
    title: "Aerial",
    description:
      "Elevated platforms and ladders used for high-rise firefighting, elevated master streams, and rescue from height. Aerials are a district-wide asset and will respond well outside their home station area.",
    vehicles: [
      {
        year: 2022,
        makeModel: "Scania P360 / Bronto Skylift F32",
        type: "32m Aerial Platform",
        callsign: "TGA 405",
        station: "Tauranga City Fire Station",
      },
      {
        year: 2014,
        makeModel: "Iveco Eurocargo / Bronto Skylift F17",
        type: "17m Aerial Platform",
        callsign: "MTM 415",
        station: "Mount Maunganui Fire Station",
      },
      {
        year: 2016,
        makeModel: "Scania P320 / Magirus M32L",
        type: "32m Turntable Ladder",
        callsign: "WHK 475",
        station: "Whakatāne Fire Station",
      },
    ],
  },
  {
    id: "command-hazmat",
    title: "Command / Hazmat",
    description:
      "Incident management and specialist chemical response. The command unit provides the on-scene control point for anything running to a second alarm or above; the hazmat units carry detection, gas-tight suits and decontamination equipment.",
    vehicles: [
      {
        year: 2021,
        makeModel: "Mercedes-Benz Sprinter 519",
        type: "District Command Unit",
        callsign: "TGA 490",
        station: "Tauranga City Fire Station",
      },
      {
        year: 2019,
        makeModel: "Ford Ranger Wildtrak",
        type: "Operations Support / Safety Officer",
        callsign: "TGA 491",
        station: "Tauranga City Fire Station",
      },
      {
        year: 2020,
        makeModel: "MAN TGM 18.290",
        type: "Hazmat Response Unit",
        callsign: "MTM 418",
        station: "Mount Maunganui Fire Station",
      },
      {
        year: 2017,
        makeModel: "Isuzu NPS 75",
        type: "Decontamination Support Unit",
        callsign: "MTM 419",
        station: "Mount Maunganui Fire Station",
      },
    ],
  },
  {
    id: "rescue-specialist",
    title: "Rescue / Specialist",
    description:
      "Technical rescue capability beyond standard PRT kit: road crash extrication, rope and confined space rescue, and swiftwater and surf response along the coastal stations.",
    vehicles: [
      {
        year: 2018,
        makeModel: "Scania P280",
        type: "Heavy Rescue Tender",
        callsign: "TGA 407",
        station: "Tauranga City Fire Station",
      },
      {
        year: 2023,
        makeModel: "Toyota Hilux SR5 4x4",
        type: "Surf / Swiftwater Rescue Unit",
        callsign: "OHP 437",
        station: "Ohope Fire Station",
      },
      {
        year: 2021,
        makeModel: "Isuzu NPS 75 4x4",
        type: "Urban Search & Rescue Support",
        callsign: "OPO 447",
        station: "Opotiki Fire Station",
      },
    ],
  },
  {
    id: "rural-tanker",
    title: "Rural / Tanker",
    description:
      "Water carriers and off-road appliances for rural, forestry and vegetation fire, and for any incident outside reticulated water supply. Tankers shuttle to the pump at scene rather than attacking the fire directly.",
    vehicles: [
      {
        year: 2019,
        makeModel: "Scania P360 6x4",
        type: "12,000L Water Tanker",
        callsign: "OPO 448",
        station: "Opotiki Fire Station",
      },
      {
        year: 2016,
        makeModel: "Isuzu FTS 800 4x4",
        type: "Rural Fire Appliance",
        callsign: "GRT 428",
        station: "Greerton Fire Station",
      },
      {
        year: 2015,
        makeModel: "Hino 500 FM 6x4",
        type: "9,000L Water Tanker",
        callsign: "WHK 478",
        station: "Whakatāne Fire Station",
      },
    ],
  },
  {
    id: "support",
    title: "Support / Logistics",
    description:
      "Non-frontline vehicles covering breathing apparatus resupply, canteen and welfare at protracted incidents, training delivery and general fleet logistics.",
    vehicles: [
      {
        year: 2018,
        makeModel: "Isuzu NQR 87",
        type: "Breathing Apparatus Support Unit",
        callsign: "TGA 495",
        station: "Tauranga City Fire Station",
      },
      {
        year: 2017,
        makeModel: "Mercedes-Benz Sprinter 416",
        type: "Canteen / Welfare Unit",
        callsign: "TGA 496",
        station: "Tauranga City Fire Station",
      },
      {
        year: 2022,
        makeModel: "Ford Ranger XLT",
        type: "Training & Recruitment Vehicle",
        callsign: "GRT 497",
        station: "Greerton Fire Station",
      },
    ],
  },
];
