import type { Announcement } from "@/data/announcements";

export const roleStyles: Record<string, string> = {
  "Fire Commissioner": "bg-accent-soft text-accent",
  "Deputy Commissioner": "bg-amber-50 text-amber-700",
  Operations: "bg-sky-50 text-sky-700",
  Training: "bg-emerald-50 text-emerald-700",
  Communications: "bg-violet-50 text-violet-700",
};

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function AnnouncementFeed({ posts }: { posts: Announcement[] }) {
  const sorted = [...posts].sort((a, b) => {
    if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
    return b.date.localeCompare(a.date);
  });

  return (
    <div className="flex flex-col gap-4">
      {sorted.map((post) => (
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
            {post.body}
          </p>

          <p className="mt-3 text-xs font-medium text-ink/70">
            {post.author}
          </p>
        </article>
      ))}
    </div>
  );
}
