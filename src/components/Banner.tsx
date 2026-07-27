type BannerProps = {
  title: string;
  subtitle?: string;
};

/**
 * Full-width page banner: gradient (or photo, via the --banner-image token
 * in globals.css) background, big page title, small logo mark top-right.
 */
export function Banner({ title, subtitle }: BannerProps) {
  return (
    <div className="banner-surface relative overflow-hidden rounded-b-2xl px-6 py-10 sm:px-10 sm:py-14 md:rounded-none">
      <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-sm font-bold text-banner-fg ring-1 ring-white/25 backdrop-blur sm:right-10 sm:top-8">
        BOP
      </div>
      <div className="max-w-2xl pr-16 sm:pr-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-banner-fg-muted">
          Bay of Plenty RP &mdash; Fire &amp; Emergency
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-banner-fg sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-sm text-banner-fg-muted sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
