"use client";

import { useState } from "react";
import type { Announcement } from "@/data/announcements";

const roleStyles: Record<string, string> = {
  "Fire Commissioner": "bg-accent-soft text-accent",
  "Deputy Commissioner": "bg-amber-50 text-amber-700",
  Operations: "bg-sky-50 text-sky-700",
  Training: "bg-emerald-50 text-emerald-700",
  Communications: "bg-violet-50 text-violet-700",
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function AnnouncementFeed({ posts }: { posts: Announcement[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const sorted = [...posts].sort((a, b) => {
    if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
    return b.date.localeCompare(a.date);
  });

  return (
    <div className="flex flex-col gap-4">
      {sorted.map((post) => {
        const isOpen = openId === post.id;

        return (
          <article
            key={post.id}
            className="rounded-2xl border border-subtle bg-card p-5 shadow-sm sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                  roleStyles[post.authorRole] ?? "bg-subtle text-muted"
                }`}
              >
                {post.authorRole}
              </span>
              {post.pinned && (
                <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
                  Pinned
                </span>
              )}
              <span className="ml-auto text-xs text-muted">
                {formatDate(post.date)}
              </span>
            </div>

            <h3 className="mt-3 text-base font-semibold text-ink">
              {post.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              {post.summary}
            </p>

            {isOpen && (
              <div className="mt-4 border-t border-subtle pt-4">
                <p className="text-sm leading-relaxed text-muted">
                  {post.body}
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide text-muted">
                      Submitted by
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-ink">
                      {post.author}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide text-muted">
                      Date
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-ink">
                      {formatDate(post.date)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide text-muted">
                      Location
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-ink">
                      {post.station}
                    </dd>
                  </div>
                </dl>
              </div>
            )}

            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : post.id)}
              aria-expanded={isOpen}
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-accent-hover"
            >
              {isOpen ? "Show less" : "View more"}
              <ChevronIcon open={isOpen} />
            </button>
          </article>
        );
      })}
    </div>
  );
}
