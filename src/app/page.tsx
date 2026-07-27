import Link from "next/link";
import { Banner } from "@/components/Banner";
import { StationsIcon, FleetIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <>
      <Banner
        title="Welcome to the BOPRP Fire Portal"
        subtitle="The internal home for Bay of Plenty RP Fire & Emergency — station information, apparatus records, training and policy in one place."
      />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8 sm:px-10">
        <section className="max-w-3xl rounded-2xl border border-subtle bg-card p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-ink">About this portal</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            This is a placeholder welcome message for the department portal.
            Once member accounts are live, this page will surface your shift
            roster, recent bulletins and any outstanding training
            requirements. For now, use the links below to browse station and
            fleet information, or check the sidebar for SOPs and policies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            Quick links
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:max-w-2xl">
            <Link
              href="/stations"
              className="group flex items-center gap-4 rounded-2xl border border-subtle bg-card p-5 transition-colors hover:border-accent"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <StationsIcon />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  Stations
                </span>
                <span className="block text-xs text-muted">
                  Browse every station across the district
                </span>
              </span>
            </Link>

            <Link
              href="/fleet"
              className="group flex items-center gap-4 rounded-2xl border border-subtle bg-card p-5 transition-colors hover:border-accent"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <FleetIcon />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">
                  Vehicle Fleet
                </span>
                <span className="block text-xs text-muted">
                  See appliances by type across the department
                </span>
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
