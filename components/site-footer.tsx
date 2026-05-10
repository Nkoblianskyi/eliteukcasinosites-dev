import Link from "next/link"
import Image from "next/image"

function CasinoLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon
        points="24,2 38,8 46,22 46,26 38,40 24,46 10,40 2,26 2,22 10,8"
        stroke="hsl(43,74%,50%)"
        strokeWidth="1.5"
        fill="hsl(220,35%,12%)"
      />
      <circle cx="24" cy="24" r="11" stroke="hsl(43,74%,50%)" strokeWidth="1" fill="none" />
      <circle cx="24" cy="24" r="7" stroke="hsl(43,74%,65%)" strokeWidth="0.75" fill="none" strokeDasharray="2 2" />
      <circle cx="24" cy="24" r="2" fill="hsl(43,74%,50%)" />
      <line x1="24" y1="13" x2="24" y2="17" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="24" y1="31" x2="24" y2="35" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="13" y1="24" x2="17" y2="24" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="31" y1="24" x2="35" y2="24" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="16.2" y1="16.2" x2="18.9" y2="18.9" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="29.1" y1="29.1" x2="31.8" y2="31.8" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="31.8" y1="16.2" x2="29.1" y2="18.9" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <line x1="18.9" y1="29.1" x2="16.2" y2="31.8" stroke="hsl(43,74%,50%)" strokeWidth="1" />
      <polygon points="24,4 26,7 24,9 22,7" fill="hsl(43,74%,50%)" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Gold rule */}
      <div className="h-px bg-accent" />

      {/* Main footer content */}
      <div className="container mx-auto px-4 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-primary-foreground/10">
          {/* Brand */}
          <div className="md:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-4 group w-fit">
              <CasinoLogoMark className="w-11 h-11 shrink-0 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="flex flex-col leading-none select-none">
                <span className="font-serif font-bold text-primary-foreground tracking-[0.14em] uppercase text-2xl leading-none group-hover:text-accent transition-colors duration-300">
                  Elite<span className="text-accent">UK</span>
                </span>
                <span className="font-sans font-medium text-[11px] tracking-[0.38em] uppercase text-primary-foreground/55 leading-none mt-1">
                  Casino&nbsp;Sites
                </span>
                <span className="mt-[6px] block h-px w-full bg-accent/50 group-hover:bg-accent transition-colors duration-300" />
              </div>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Britain&apos;s most prestigious casino comparison platform. We analyse every UKGC-licensed casino to deliver unbiased reviews and exclusive offers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-accent mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Responsible Gaming", href: "/responsible-gaming" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-accent/40 group-hover:w-4 transition-all duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div className="md:col-span-6">
            <h3 className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-accent mb-5">
              Responsible Gaming
            </h3>
            <div className="border border-primary-foreground/10 p-4 mb-4">
              <p className="text-xs text-primary-foreground/55 leading-relaxed">
                All casinos listed hold valid UK Gambling Commission licences. Gambling is strictly prohibited for anyone under 18. Play responsibly - never wager more than you can afford to lose. For support call{" "}
                <strong className="text-primary-foreground/80">0808 8020 133</strong>.
              </p>
            </div>
            <p className="text-xs text-accent/70">When the fun stops, STOP.</p>
          </div>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-b border-primary-foreground/10">
          {[
            { src: "/gamble-aware.png", alt: "BeGambleAware", href: "https://www.begambleaware.org/" },
            { src: "/gamcare.png", alt: "GamCare", href: "https://www.gamcare.org.uk/" },
            { src: "/gordon.png", alt: "Gambling Therapy", href: "https://www.gamblingtherapy.org/" },
            { src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission", href: "https://www.gamblingcommission.gov.uk/" },
            { src: "/gamstop.svg", alt: "GamStop", href: "https://www.gamstop.co.uk/" },
          ].map((logo) => (
            <Link
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-80 transition-opacity duration-200"
            >
              <Image src={logo.src} alt={logo.alt} width={90} height={28} className="object-contain h-7" />
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="py-8 border-b border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/40 leading-relaxed text-center max-w-3xl mx-auto">
            <strong className="text-primary-foreground/60">eliteukcasinosites.com</strong> operates as an independent comparison service. We may receive commission when you register through our links. All featured casinos hold valid UKGC licences. 18+ only. T&amp;Cs apply.
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-primary-foreground/35">
            &copy; {new Date().getFullYear()} eliteukcasinosites.com. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-accent/50 tracking-wide">UKGC Licensed</span>
            <span className="text-xs text-primary-foreground/25">|</span>
            <span className="text-xs text-primary-foreground/35">18+</span>
            <span className="text-xs text-primary-foreground/25">|</span>
            <span className="text-xs text-primary-foreground/35">BeGambleAware.org</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
