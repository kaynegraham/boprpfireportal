import { Banner } from "@/components/Banner";

const categories = [
  {
    name: "Operations",
    description:
      "Fireground command, appliance staffing and incident control procedures.",
  },
  {
    name: "Health & Safety",
    description:
      "PPE requirements, breathing apparatus procedures and welfare at incidents.",
  },
  {
    name: "Training & Development",
    description:
      "Recruit training pathways, competency sign-off and ongoing qualification requirements.",
  },
  {
    name: "Vehicles & Equipment",
    description:
      "Appliance checks, equipment maintenance schedules and defect reporting.",
  },
  {
    name: "Administration",
    description:
      "Leave, station bookings, and general department administration.",
  },
];

export default function SopsPage() {
  return (
    <>
      <Banner
        title="SOPs & Policies"
        subtitle="Standard operating procedures and department policy documents."
      />

      <div className="px-6 py-8 sm:px-10">
        <div className="mb-6 max-w-3xl rounded-2xl border border-subtle bg-card p-5 text-sm text-muted">
          This is placeholder content for stage 1. Document uploads and
          version history will be added once the document library is
          connected to real storage in a later stage.
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-subtle bg-card p-5"
            >
              <h3 className="text-sm font-semibold text-ink">
                {category.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
              <span className="mt-4 inline-block rounded-full bg-subtle px-2.5 py-1 text-[11px] font-medium text-muted">
                No documents yet
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
