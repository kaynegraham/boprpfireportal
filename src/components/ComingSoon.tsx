type ComingSoonProps = {
  title: string;
  description?: string;
};

/**
 * Shown on pages that need real auth/data (Roster, Training, Applications)
 * until Discord OAuth + the database land in stage 2.
 */
export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-subtle bg-card px-6 py-16 text-center shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5v5l3 2" />
        </svg>
      </div>
      <h2 className="mt-4 text-lg font-semibold text-ink">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-muted">
        {description ??
          "Coming soon. This section requires login and will be available once member accounts go live."}
      </p>
      <span className="mt-5 inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
        Requires login &middot; stage 2
      </span>
    </div>
  );
}
