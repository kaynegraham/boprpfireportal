import Image from "next/image";

type BannerProps = {
  title: string;
  subtitle?: string;
};

/**
 * Full-width page banner: gradient (or photo, via the --banner-image token
 * in globals.css) background with a large, low-opacity crest watermark for
 * depth. The crest itself lives in the top navbar / sidebar, so it isn't
 * repeated here at a small, illegible size.
 */
export function Banner({ title, subtitle }: BannerProps) {
  return (
    <div className="banner-surface relative overflow-hidden rounded-b-2xl px-6 py-10 sm:px-10 sm:py-14 md:rounded-none">
      <Image
        aria-hidden
        src="/images/firerescue.webp"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute -right-12 -top-14 h-64 w-64 select-none object-contain opacity-[0.08] sm:-right-10 sm:-top-16 sm:h-96 sm:w-96"
      />

      <div className="relative max-w-2xl">
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
