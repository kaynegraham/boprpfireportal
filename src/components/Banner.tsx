import Image from "next/image";

type BannerProps = {
  title: string;
  subtitle?: string;
};

/**
 * Full-width page banner: gradient (or photo, via the --banner-image token
 * in globals.css) background, big page title, department crest top-right.
 */
export function Banner({ title, subtitle }: BannerProps) {
  return (
    <div className="banner-surface relative overflow-hidden rounded-b-2xl px-6 py-10 sm:px-10 sm:py-14 md:rounded-none">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[-4rem] w-56 -skew-x-12 bg-accent/15"
      />

      <div className="absolute right-6 top-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5 sm:right-10 sm:top-8">
        <Image
          src="/images/firerescue.webp"
          alt="Fire Rescue Rauora crest"
          width={64}
          height={64}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      <div className="relative max-w-2xl pr-20 sm:pr-0">
        <h1 className="text-3xl font-bold tracking-tight text-banner-fg sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-banner-fg-muted sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
