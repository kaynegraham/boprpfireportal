import Image from "next/image";

type BannerProps = {
  title: string;
  subtitle?: string;
};

/**
 * Full-width page banner: gradient (or photo, via the --banner-image token
 * in globals.css) background, a crest watermark for depth, the department
 * crest and community logo paired top-right, and an accent stripe along the
 * bottom edge.
 */
export function Banner({ title, subtitle }: BannerProps) {
  return (
    <div className="banner-surface relative overflow-hidden rounded-b-2xl px-6 pb-6 pt-10 sm:px-10 sm:pb-8 sm:pt-14 md:rounded-none">
      <Image
        aria-hidden
        src="/images/firerescue.webp"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute -right-12 -top-14 h-64 w-64 select-none object-contain opacity-[0.08] sm:-right-10 sm:-top-16 sm:h-96 sm:w-96"
      />

      <div className="absolute right-6 top-6 flex items-center gap-2.5 rounded-2xl bg-white/95 px-2.5 py-2 shadow-lg ring-1 ring-black/5 backdrop-blur sm:right-10 sm:top-8 sm:gap-3 sm:px-3">
        <Image
          src="/images/firerescue.webp"
          alt="Fire Rescue Rauora crest"
          width={48}
          height={48}
          className="h-9 w-9 object-contain sm:h-12 sm:w-12"
          priority
        />
        <span aria-hidden className="h-8 w-px bg-subtle sm:h-10" />
        <Image
          src="/images/boprplogo.webp"
          alt="Bay of Plenty Roleplay logo"
          width={48}
          height={48}
          className="h-9 w-9 rounded-full object-cover sm:h-12 sm:w-12"
          priority
        />
      </div>

      <div className="relative max-w-2xl pr-28 sm:pr-0">
        <h1 className="text-3xl font-bold tracking-tight text-banner-fg sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-banner-fg-muted sm:text-base">
            {subtitle}
          </p>
        )}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-accent"
      />
    </div>
  );
}
