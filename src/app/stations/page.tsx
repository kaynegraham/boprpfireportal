import Image from "next/image";
import { Banner } from "@/components/Banner";
import { stations } from "@/data/stations";

const crewTypeStyles: Record<string, string> = {
  Career: "bg-accent-soft text-accent",
  Volunteer: "bg-emerald-50 text-emerald-700",
  Composite: "bg-sky-50 text-sky-700",
};

export default function StationsPage() {
  return (
    <>
      <Banner
        title="Stations"
        subtitle="Every station across the Bay of Plenty RP fire district, with its home appliance count and coverage area."
      />

      <div className="px-6 py-8 sm:px-10">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {stations.map((station) => (
            <article
              key={station.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-subtle bg-card shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-sidebar">
                {station.image ? (
                  <Image
                    src={station.image}
                    alt={`${station.name} department banner`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sidebar to-[#2a1210] text-2xl font-bold tracking-widest text-white/80">
                    {station.callsign}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-ink">
                    {station.name}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                      crewTypeStyles[station.crewType] ??
                      "bg-subtle text-muted"
                    }`}
                  >
                    {station.crewType}
                  </span>
                </div>

                <p className="text-sm text-muted">
                  {station.street}
                  <br />
                  {station.suburb}
                </p>

                <p className="text-sm leading-relaxed text-muted">
                  {station.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-subtle pt-3 text-xs text-muted">
                  <span>Callsign {station.callsign}</span>
                  <span className="font-medium text-ink">
                    {station.applianceCount} appliance
                    {station.applianceCount === 1 ? "" : "s"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
