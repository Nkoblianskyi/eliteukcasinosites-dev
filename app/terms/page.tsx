import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms & Conditions | EliteUKCasinoSites.com",
  description:
    "Read the terms and conditions governing your use of EliteUKCasinoSites.com, our comparison service for UKGC-licensed UK casinos.",
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing and using EliteUKCasinoSites.com, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please discontinue use of our website immediately. We reserve the right to amend these terms at any time, with continued use constituting acceptance of any changes.",
  },
  {
    title: "2. Nature of Our Service",
    body: "EliteUKCasinoSites.com is an independent comparison and information service. We do not operate as a casino, accept wagers, or provide gambling services. Our website provides editorial reviews, comparisons, and links to third-party UKGC-licensed casino operators. We are not responsible for the services, content, or conduct of any third-party casino we link to.",
  },
  {
    title: "3. Eligibility",
    body: null,
    items: [
      ["Age Requirement", "You must be aged 18 or over to use this website. Gambling is strictly prohibited for persons under 18. By using our site, you confirm you are of legal gambling age in your jurisdiction."],
      ["Geographic Restrictions", "Our service is intended for users in the United Kingdom. Gambling laws vary by jurisdiction, and it is your responsibility to ensure that accessing casino sites is legal in your location."],
      ["Responsible Use", "You must not use our website if you have a gambling problem or have been self-excluded from gambling services via GamStop or any individual casino's self-exclusion programme."],
    ],
  },
  {
    title: "4. Affiliate Disclosure",
    body: "EliteUKCasinoSites.com participates in affiliate marketing programmes. When you click links to casino operators on our website and register or deposit, we may receive a commission. This commercial arrangement does not influence our editorial reviews or rankings, which are based solely on objective assessment criteria. All affiliate relationships are clearly disclosed.",
  },
  {
    title: "5. Accuracy of Information",
    body: "We strive to ensure all information on our website - including casino bonuses, terms, and features - is accurate and current. However, casino offers change frequently and we cannot guarantee that all details are up to date at all times. Always verify current terms and conditions directly with the casino before registering or depositing.",
  },
  {
    title: "6. Intellectual Property",
    body: "All content on EliteUKCasinoSites.com, including text, graphics, logos, and editorial reviews, is the property of EliteUKCasinoSites.com or its content suppliers and is protected by UK and international copyright law. You may not reproduce, redistribute, or commercially exploit any content without prior written consent.",
  },
  {
    title: "7. Limitation of Liability",
    body: "EliteUKCasinoSites.com is provided on an 'as is' basis. To the fullest extent permitted by UK law, we disclaim all liability for any losses, damages, or claims arising from your use of our website, reliance on information provided, or use of third-party casino sites accessed through our links. We are not liable for gambling losses incurred at any casino we review.",
  },
  {
    title: "8. Third-Party Links",
    body: "Our website contains links to third-party casino sites and services. These links are provided for your convenience. We have no control over the content, privacy policies, or practices of these sites and accept no responsibility for them. Use of third-party sites is at your own risk and subject to their respective terms and conditions.",
  },
  {
    title: "9. Responsible Gambling",
    body: "We are committed to promoting responsible gambling. If you are experiencing difficulties with gambling, please seek immediate assistance from BeGambleAware.org (0808 8020 133), GamCare.org.uk, or self-exclude via GamStop.co.uk. Details of responsible gambling tools are available on our Responsible Gaming page.",
  },
  {
    title: "10. Governing Law",
    body: "These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
  {
    title: "11. Contact Us",
    body: "For questions regarding these Terms and Conditions, please contact us at legal@eliteukcasinosites.com.",
  },
]

export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-primary text-primary-foreground">
        <div className="h-px bg-accent" />
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-3">Legal</p>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-primary-foreground mb-3 text-balance">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-primary-foreground/50 font-sans">Last updated: January 2025</p>
          </div>
        </div>
        <div className="h-px bg-accent/20" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 border-l-2 border-accent pl-5">
              Please read these Terms and Conditions carefully before using EliteUKCasinoSites.com. These terms govern your access to and use of our casino comparison service and constitute a legally binding agreement between you and EliteUKCasinoSites.com.
            </p>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div>
                    <h2 className="font-serif font-bold text-xl text-foreground mb-1">{section.title}</h2>
                    <div className="h-px bg-border" />
                  </div>
                  {section.body && (
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-3 pl-4">
                      {section.items.map(([title, desc]) => (
                        <li key={title} className="flex gap-3 text-sm text-muted-foreground border-l border-border pl-4">
                          <span className="font-serif font-semibold text-foreground whitespace-nowrap">{title}:</span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
