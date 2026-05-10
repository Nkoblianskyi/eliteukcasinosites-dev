import Link from "next/link"

function CasinoLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer octagon border */}
      <polygon
        points="24,2 38,8 46,22 46,26 38,40 24,46 10,40 2,26 2,22 10,8"
        stroke="hsl(43,74%,50%)"
        strokeWidth="1.5"
        fill="hsl(220,35%,12%)"
      />
      {/* Inner roulette circle */}
      <circle cx="24" cy="24" r="11" stroke="hsl(43,74%,50%)" strokeWidth="1" fill="none" />
      <circle cx="24" cy="24" r="7" stroke="hsl(43,74%,65%)" strokeWidth="0.75" fill="none" strokeDasharray="2 2" />
      {/* Center dot */}
      <circle cx="24" cy="24" r="2" fill="hsl(43,74%,50%)" />
      {/* Roulette spokes */}
      <line x1="24" y1="13" x2="24" y2="17" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="24" y1="31" x2="24" y2="35" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="13" y1="24" x2="17" y2="24" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="31" y1="24" x2="35" y2="24" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="16.2" y1="16.2" x2="18.9" y2="18.9" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="29.1" y1="29.1" x2="31.8" y2="31.8" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="31.8" y1="16.2" x2="29.1" y2="18.9" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="18.9" y1="29.1" x2="16.2" y2="31.8" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      {/* Top diamond ornament */}
      <polygon points="24,4 26,7 24,9 22,7" fill="hsl(43,74%,50%)" />
    </svg>
  )
}

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-primary">
      {/* Gold top accent line */}
      <div className="h-[2px] w-full bg-accent" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 md:h-20">

          {/* ── CENTERED WORDMARK ── */}
          <Link
            href="/"
            className="flex items-center gap-4 group"
            aria-label="EliteUKCasinoSites - Home"
          >
            <CasinoLogoMark className="w-11 h-11 shrink-0 transition-opacity duration-300 group-hover:opacity-80" />

            <div className="flex flex-col leading-none select-none">
              {/* Primary wordmark */}
              <span className="font-serif font-bold text-primary-foreground tracking-[0.14em] uppercase text-2xl leading-none group-hover:text-accent transition-colors duration-300">
                Elite<span className="text-accent">UK</span>
              </span>
              {/* Sub wordmark */}
              <span className="font-sans font-medium text-[11px] tracking-[0.38em] uppercase text-primary-foreground/55 leading-none mt-1">
                Casino&nbsp;Sites
              </span>
              {/* Thin gold underline */}
              <span className="mt-[6px] block h-px w-full bg-accent/50 group-hover:bg-accent transition-colors duration-300" />
            </div>
          </Link>

        </div>
      </div>

      {/* Gold bottom rule */}
      <div className="h-px w-full bg-accent/25" />
    </header>
  )
}
