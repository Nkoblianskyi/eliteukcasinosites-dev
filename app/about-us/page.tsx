import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | EliteUKCasinoSites.com - Expert UK Casino Reviews",
  description:
    "Learn about our editorial mission, review methodology, and commitment to helping UK players find the finest UKGC-licensed casinos.",
}

const pillars = [
  {
    title: "UKGC Licensed Only",
    body: "Every casino we feature holds a valid UK Gambling Commission licence, guaranteeing the highest standards of player protection and fair gaming.",
  },
  {
    title: "UK Player Focused",
    body: "We prioritise casinos that understand British gaming culture, accept GBP, offer UK payment methods, and provide localised customer support.",
  },
  {
    title: "Expert Reviews",
    body: "Our experienced team of casino analysts conduct thorough, hands-on testing of every platform, examining game quality, bonus terms, and withdrawal speeds.",
  },
  {
    title: "Exclusive Bonuses",
    body: "We negotiate enhanced welcome offers and exclusive promotions unavailable elsewhere, maximising value for UK players.",
  },
]

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-primary text-primary-foreground">
        <div className="h-px bg-accent" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-4">
              Who We Are
            </p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-primary-foreground mb-5 text-balance">
              About EliteUKCasinoSites
            </h1>
            <div className="h-px bg-accent/30 w-32 mx-auto mb-5" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xl mx-auto">
              Your trusted authority on UK casino sites - dedicated to helping British players find the finest UKGC-licensed casinos through independent, expert-led analysis.
            </p>
          </div>
        </div>
        <div className="h-px bg-accent/20" />
      </section>

      {/* Mission */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12">
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Our Mission</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Clarity in a Complex Market
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                At EliteUKCasinoSites.com, we have established ourselves as the UK&apos;s premier destination for casino evaluation and comparison. In today&apos;s crowded gaming marketplace, our specialist team cuts through the marketing noise to identify genuinely exceptional casino experiences tailored specifically for British players.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you are passionate about slots, live blackjack, roulette, or progressive jackpots, we help you find casinos that deliver outstanding value, a superior game library, and first-class customer service.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {pillars.map((p, i) => (
                <div key={i} className="border border-border p-6 hover:border-accent/40 transition-colors duration-200">
                  <div className="h-px bg-accent w-8 mb-4" />
                  <h3 className="font-serif font-bold text-base text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Methodology */}
            <div className="mb-12">
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Process</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Our Review Methodology
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Behind every recommendation lies a comprehensive evaluation process developed by industry veterans. We scrutinise each casino across multiple critical dimensions:
              </p>
              <ul className="space-y-3">
                {[
                  ["Licensing & Security", "UKGC licence verification, SSL encryption, and fund segregation"],
                  ["Welcome Bonuses", "Value assessment, wagering requirements, and realistic completion terms"],
                  ["Game Library", "Slot variety, live dealer tables, jackpots, RTP rates, and software providers"],
                  ["Odds & RTP Quality", "Competitiveness across major game categories and value for UK players"],
                  ["Payment Methods", "UK-friendly options, deposit and withdrawal speeds"],
                  ["Mobile Experience", "App quality, responsive website, full game availability on mobile"],
                  ["Customer Support", "Live chat availability, email response times, UK-based support teams"],
                  ["Responsible Gaming", "Deposit limits, self-exclusion tools, links to BeGambleAware and GamCare"],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-3 text-sm text-muted-foreground border-l border-border pl-4">
                    <span className="font-serif font-semibold text-foreground whitespace-nowrap">{title}:</span>
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div className="mb-12">
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Values</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Our Core Principles
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <div className="space-y-4">
                {[
                  ["Transparency", "We clearly explain our testing methodology and ranking criteria, ensuring you understand exactly how we evaluate casinos."],
                  ["Editorial Independence", "Our reviews remain completely impartial. Whilst we earn affiliate commissions, these never influence our honest assessments."],
                  ["Continuous Updates", "The casino landscape evolves constantly, and so do our reviews. We regularly reassess platforms to reflect current offers and features."],
                  ["Responsible Gaming", "We actively promote responsible gambling practices and prominently feature links to BeGambleAware, GamCare, and GamStop."],
                ].map(([title, desc]) => (
                  <div key={title} className="border-l-2 border-accent pl-5">
                    <p className="font-serif font-semibold text-sm text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding */}
            <div className="bg-primary text-primary-foreground p-8">
              <div className="h-px bg-accent mb-7" />
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">
                How We Are Funded
              </p>
              <h3 className="font-serif font-bold text-xl text-primary-foreground mb-4">
                Free for All UK Players
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
                Our platform is sustained through affiliate partnerships with casinos, who compensate us when visitors register through our links. This business model allows us to operate without subscription fees or restricted content.
              </p>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                Crucially, these commercial relationships never compromise our editorial integrity. Our rankings are determined solely by platform quality, player satisfaction, and objective performance metrics.
              </p>
              <div className="h-px bg-accent/30 mt-7" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
