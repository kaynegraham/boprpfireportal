import Link from "next/link";
import { Banner } from "@/components/Banner";
import { AnnouncementFeed } from "@/components/AnnouncementFeed";
import { LeadershipSpotlight } from "@/components/LeadershipSpotlight";
import { announcements } from "@/data/announcements";
import { StationsIcon, FleetIcon } from "@/components/icons";

const commandRoles = ["Fire Commissioner", "Deputy Commissioner"];

export default function HomePage() {
  const latestCommandPost = [...announcements]
    .filter((post) => commandRoles.includes(post.authorRole))
    .sort((a, b) => b.date.localeCompare(a.date))[0];

  return (
    <>
      <Banner
        title="Welcome to the BOPRP Fire Portal"
        subtitle="The internal home for Bay of Plenty RP Fire & Emergency: station information, apparatus records, training and policy in one place."
      />

      <div className="flex flex-1 flex-col gap-8 px-6 py-8 sm:px-10 lg:grid lg:grid-cols-[1.7fr_1fr] lg:items-start">
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            Announcements
          </h2>
          <AnnouncementFeed posts={announcements} />
        </section>

        <aside className="flex flex-col gap-6">
          <div className="rounded-2xl border border-subtle bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-ink">
              About this portal
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              This is a placeholder welcome message for the department
              portal. Once member accounts are live, this page will surface
              your shift roster and any outstanding training requirements
              alongside the announcements above.
            </p>
          </div>

          {latestCommandPost && <LeadershipSpotlight post={latestCommandPost} />}

          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
              Quick links
            </h2>
            <div className="flex flex-col gap-3">
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
          </div>
        </aside>
      </div>
    </>
  );
}
