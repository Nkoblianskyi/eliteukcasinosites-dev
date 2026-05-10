import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Responsible Gaming | EliteUKCasinoSites.com",
  description:
    "EliteUKCasinoSites.com is committed to responsible gambling. Find tools, resources, and support organisations to help you stay in control.",
}

const tools = [
  {
    title: "Deposit Limits",
    body: "All UKGC-licensed casinos must offer daily, weekly, and monthly deposit limits. Set these before you start playing to keep your spending within a budget you are comfortable with.",
  },
  {
    title: "Reality Checks",
    body: "Reality check notifications remind you how long you have been playing. Use these prompts to take regular breaks and maintain perspective on your gambling session.",
  },
  {
    title: "Time-Out Periods",
    body: "If you feel you need a short break, casinos offer time-out periods ranging from 24 hours to 6 weeks. Your account will be temporarily suspended during this time.",
  },
  {
    title: "Self-Exclusion",
    body: "Self-exclusion allows you to block yourself from gambling for a minimum of 6 months. UKGC-licensed casinos must honour self-exclusion requests and may not contact you with marketing during this period.",
  },
]

const organisations = [
  {
    name: "BeGambleAware",
    description: "Free, confidential advice and support. Call the National Gambling Helpline on 0808 8020 133.",
    href: "https://www.begambleaware.org/",
    logo: "/gamble-aware.png",
  },
  {
    name: "GamCare",
    description: "The leading provider of support, information, and advice for anyone affected by problem gambling.",
    href: "https://www.gamcare.org.uk/",
    logo: "/gamcare.png",
  },
  {
    name: "GamStop",
    description: "Register with GamStop to self-exclude from all UKGC-licensed gambling websites and apps simultaneously.",
    href: "https://www.gamstop.co.uk/",
    logo: "/gamstop.svg",
  },
  {
    name: "Gambling Therapy",
    description: "Free online support and counselling service for anyone affected by problem gambling, worldwide.",
    href: "https://www.gamblingtherapy.org/",
    logo: "/gordon.png",
  },
]

const warningSign = [
  "Spending more than you can afford to lose",
  "Gambling to escape problems or relieve stress",
  "Chasing losses by increasing your bets",
  "Lying to friends or family about your gambling",
  "Neglecting work, family, or personal responsibilities",
  "Borrowing money or selling possessions to fund gambling",
  "Feeling anxious, irritable, or depressed when not gambling",
  "Repeatedly failing to cut back or stop gambling",
]

export default function ResponsibleGaming() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-primary text-primary-foreground">
        <div className="h-px bg-accent" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-4">
              Player Welfare
            </p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-primary-foreground mb-5 text-balance">
              Responsible Gaming
            </h1>
            <div className="h-px bg-accent/30 w-32 mx-auto mb-5" />
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xl mx-auto">
              Gambling should always be an enjoyable form of entertainment. At EliteUKCasinoSites.com, we are committed to promoting safe and responsible play.
            </p>
          </div>
        </div>
        <div className="h-px bg-accent/20" />
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Commitment */}
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Our Commitment</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Gambling in Control
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Gambling is a legitimate form of entertainment enjoyed responsibly by millions of UK adults. However, for some individuals it can become problematic. We take our responsibility seriously and actively encourage all visitors to gamble safely, within their means, and only for entertainment.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We only feature UKGC-licensed casinos, all of which are required by law to provide comprehensive responsible gambling tools. If you are ever concerned about your gambling, please use the resources below.
              </p>
            </div>

            {/* Responsible Gambling Tools */}
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Tools</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Responsible Gambling Tools
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tools.map((tool, i) => (
                  <div key={i} className="border border-border p-6 hover:border-accent/40 transition-colors duration-200">
                    <div className="h-px bg-accent w-8 mb-4" />
                    <h3 className="font-serif font-bold text-base text-foreground mb-2">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning signs */}
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Awareness</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Warning Signs of Problem Gambling
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Recognising the signs of problem gambling is the first step towards getting help. Please seek support if you identify with any of the following:
              </p>
              <ul className="space-y-2">
                {warningSign.map((sign, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground border-l border-border pl-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support organisations */}
            <div>
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Support</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">
                Support Organisations
              </h2>
              <div className="h-px bg-border w-full mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {organisations.map((org) => (
                  <Link
                    key={org.name}
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border p-5 hover:border-accent/40 transition-colors duration-200 flex flex-col gap-3 group"
                  >
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={120}
                      height={36}
                      className="object-contain h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    />
                    <div>
                      <p className="font-serif font-bold text-sm text-foreground mb-1 group-hover:text-accent transition-colors duration-200">{org.name}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{org.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Emergency callout */}
            <div className="bg-primary text-primary-foreground p-8">
              <div className="h-px bg-accent mb-7" />
              <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">
                Need Help Now?
              </p>
              <h3 className="font-serif font-bold text-xl text-primary-foreground mb-4">
                Free, Confidential Support Available 24/7
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed mb-4">
                The National Gambling Helpline is available around the clock to provide free, confidential support, information, and counselling.
              </p>
              <p className="font-serif font-bold text-2xl text-accent mb-2">0808 8020 133</p>
              <p className="text-xs text-primary-foreground/50 mb-6">Free from UK landlines and mobiles</p>
              <p className="text-xs text-primary-foreground/40 leading-relaxed">
                18+ only. Gambling can be addictive. Please play responsibly. All casinos listed hold valid UKGC licences.
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
