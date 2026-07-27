import { Banner } from "@/components/Banner";
import { fleet } from "@/data/fleet";

export default function FleetPage() {
  return (
    <>
      <Banner
        title="Vehicle Fleet"
        subtitle="Apparatus in service across the district, grouped by role. Fleet records will move to the live database in stage 2."
      />

      <div className="flex flex-col gap-6 px-6 py-8 sm:px-10">
        {/* Jump links */}
        <nav className="flex flex-wrap gap-2">
          {fleet.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full border border-subtle bg-card px-3 py-1.5 text-xs font-medium text-muted hover:border-accent hover:text-accent"
            >
              {section.title}
            </a>
          ))}
        </nav>

        {fleet.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-2xl border border-subtle bg-card p-6 sm:p-8"
          >
            <h2 className="text-lg font-semibold text-ink">
              {section.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
              {section.description}
            </p>

            <ul className="mt-5 divide-y divide-subtle">
              {section.vehicles.map((vehicle) => (
                <li
                  key={vehicle.callsign}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {vehicle.callsign}
                    </span>
                    <span className="text-sm text-ink">
                      {vehicle.year} {vehicle.makeModel}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                    <span>{vehicle.type}</span>
                    <span aria-hidden className="text-subtle">
                      &bull;
                    </span>
                    <span>{vehicle.station}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
