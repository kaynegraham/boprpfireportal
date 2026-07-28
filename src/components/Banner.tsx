import Image from "next/image";

type BannerProps = {
  title: string;
  subtitle?: string;
};

/**
 * Full-width page banner: gradient (or photo, via the --banner-image token
 * in globals.css) background with a big, softly blurred crest filling it
 * as a backdrop, the department crest and community logo paired together
 * on top, and an accent stripe along the bottom edge. The logo pair sits
 * above the title on narrow screens and moves to the top-right corner once
 * there's room beside it.
 */
export function Banner({ title, subtitle }: BannerProps) {
  return (
    <div className="banner-surface relative overflow-hidden rounded-b-2xl px-6 pb-6 pt-8 sm:px-10 sm:pb-8 sm:pt-14 md:rounded-none">
      <Image
        aria-hidden
        src="/images/firerescue.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none scale-125 select-none object-cover opacity-[0.14] blur-2xl"
        priority
      />

      <div className="relative mb-5 inline-flex items-center gap-3 rounded-2xl bg-white/95 px-3 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur sm:absolute sm:right-10 sm:top-8 sm:mb-0 sm:gap-4 sm:px-4 sm:py-3">
        <Image
          src="/images/firerescue.webp"
          alt="Fire Rescue New Zealand crest"
          width={96}
          height={96}
          className="h-12 w-12 object-contain sm:h-16 sm:w-16"
          priority
        />
        <span aria-hidden className="h-10 w-px bg-subtle sm:h-14" />
        <Image
          src="/images/boprplogo.webp"
          alt="Bay of Plenty Roleplay logo"
          width={96}
          height={96}
          className="h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16"
          priority
        />
      </div>

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

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-accent"
      />
    </div>
  );
}
