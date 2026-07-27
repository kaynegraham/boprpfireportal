import Image from "next/image";
import Link from "next/link";
import { Banner } from "@/components/Banner";
import { StationsIcon, FleetIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <>
      <Banner
        title="Welcome to the BOPRP Fire Portal"
        subtitle="The internal home for Bay of Plenty RP Fire & Emergency: station information, apparatus records, training and policy in one place."
      />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8 sm:px-10">
        <section className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-stretch">
          <div className="rounded-2xl border border-subtle bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-ink">
              About this portal
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              This is a placeholder welcome message for the department portal.
              Once member accounts are live, this page will surface your
              shift roster, recent bulletins and any outstanding training
              requirements. For now, use the links below to browse station
              and fleet information, or check the sidebar for SOPs and
              policies.
            </p>
          </div>

          <div className="flex items-center justify-center rounded-2xl border border-subtle bg-white p-6 shadow-sm sm:p-8">
            <Image
              src="/images/firerescue-wordmark.webp"
              alt="Fire Rescue Rauora"
              width={1100}
              height={600}
              className="h-auto w-full max-w-xs object-contain"
            />
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            Quick links
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:max-w-2xl">
            <Link
              href="/stations"
              className="group flex items-center gap-4 rounded-2xl border border-subtle bg-card p-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
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
              className="group flex items-center gap-4 rounded-2xl border border-subtle bg-card p-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
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
