import Image from "next/image";

/**
 * Persistent desktop header sitting above the page banner, showing both the
 * department crest and the parent community logo at a legible size. Hidden
 * on mobile, where the sidebar's own top bar carries a compact version.
 */
export function TopNavbar() {
  return (
    <header className="sticky top-0 z-30 hidden items-center justify-between border-b border-subtle bg-card px-8 py-3.5 shadow-sm md:flex">
      <div className="flex items-center gap-3.5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 ring-1 ring-subtle">
          <Image
            src="/images/firerescue.webp"
            alt="Fire Rescue Rauora crest"
            width={56}
            height={56}
            className="h-full w-full object-contain"
            priority
          />
        </div>
        <div className="leading-tight">
          <p className="text-base font-semibold text-ink">
            Fire Rescue Rauora
          </p>
          <p className="text-xs text-muted">Bay of Plenty Fire &amp; Emergency</p>
        </div>
      </div>

      <div className="flex items-center gap-3.5">
        <div className="text-right leading-tight">
          <p className="text-sm font-semibold text-ink">
            Bay of Plenty Roleplay
          </p>
          <p className="text-xs text-muted">FiveM community</p>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full ring-1 ring-subtle">
          <Image
            src="/images/boprplogo.webp"
            alt="Bay of Plenty Roleplay logo"
            width={56}
            height={56}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </header>
  );
}
