import type { Announcement } from "@/data/announcements";
import { roleStyles, formatDate } from "@/components/AnnouncementFeed";

/**
 * Featured callout for the most recent post from command staff (the Fire
 * Commissioner or Deputy Commissioner), shown in the Home page side rail.
 */
export function LeadershipSpotlight({ post }: { post: Announcement }) {
  return (
    <div className="rounded-2xl border border-accent/20 bg-accent-soft p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
        From command
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
            roleStyles[post.authorRole] ?? "bg-subtle text-muted"
          }`}
        >
          {post.authorRole}
        </span>
        <span className="text-xs text-muted">{formatDate(post.date)}</span>
      </div>

      <h3 className="mt-3 text-base font-semibold text-ink">{post.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{post.body}</p>
      <p className="mt-3 text-xs font-medium text-ink/70">{post.author}</p>
    </div>
  );
}
