"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "How do we select the best UK casino sites?",
      answer:
        "Our expert team rigorously evaluates each casino based on UKGC licensing, security measures, welcome bonuses, game selection, software providers, mobile experience, payment options, withdrawal speeds, and customer support quality. We only recommend casinos that maintain high standards across all criteria and prioritise UK player satisfaction.",
    },
    {
      id: "faq-2",
      question: "Are these casino sites legal and safe in the UK?",
      answer:
        "Absolutely. Every casino featured on EliteUKCasinoSites.com holds a valid UK Gambling Commission licence, ensuring they meet stringent regulatory requirements for player protection, fair gaming, secure transactions, and responsible gambling. Your funds are protected under UK law, and all sites use advanced encryption technology.",
    },
    {
      id: "faq-3",
      question: "What types of welcome bonuses do UK casinos offer?",
      answer:
        "UK casinos offer various welcome promotions including matched deposit bonuses (e.g., 100% up to £200), free spins on selected slots, no-deposit bonuses, and cashback offers. Each offer comes with specific terms and conditions, including wagering requirements and qualifying criteria. We highlight the most valuable and accessible promotions with transparent terms.",
    },
    {
      id: "faq-4",
      question: "How do I claim a casino welcome bonus?",
      answer:
        "To claim a welcome bonus: 1) Click our exclusive link to the casino, 2) Register a new account with accurate details, 3) Make a qualifying deposit using a valid payment method, 4) Opt in or enter a promo code if required. Some bonuses activate automatically. Always read the specific T&Cs regarding wagering requirements and eligible games.",
    },
    {
      id: "faq-5",
      question: "What payment methods do UK casinos accept?",
      answer:
        "Top UK casinos accept debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, prepaid cards (Paysafecard), and mobile payment options (Apple Pay, Google Pay). Note that credit cards are banned for gambling in the UK. Most sites process deposits instantly and withdrawals within 24–72 hours, with e-wallets typically being fastest.",
    },
    {
      id: "faq-6",
      question: "Can I play at a casino on my mobile phone?",
      answer:
        "Yes, all our recommended casinos offer excellent mobile gaming experiences. Most provide dedicated iOS and Android apps with full game libraries, whilst others have responsive mobile websites. You can play slots, live dealer games, and table games, manage your account, claim bonuses, and withdraw winnings directly from your mobile device.",
    },
    {
      id: "faq-7",
      question: "What is the UK Gambling Commission?",
      answer:
        "The UK Gambling Commission (UKGC) is the regulatory body that licenses and oversees all gambling operators serving UK customers. It enforces strict standards for fairness, security, anti-money laundering, and responsible gambling. UKGC-licensed casinos must segregate customer funds, provide self-exclusion tools, and undergo regular compliance audits - ensuring your protection as a UK player.",
    },
    {
      id: "faq-8",
      question: "How can I gamble responsibly?",
      answer:
        "Set strict deposit limits before you start, never chase losses, take regular breaks, and never gamble whilst under the influence. Use responsible gambling tools like deposit limits, time-outs, and self-exclusion available at all UKGC-licensed casinos. If you are concerned about your gambling, seek immediate help from BeGambleAware.org (0808 8020 133), GamCare.org.uk, or register with GamStop.co.uk for self-exclusion across all UK gambling sites.",
    },
  ]

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <p className="text-[10px] md:text-xs font-sans font-semibold tracking-[0.22em] uppercase text-accent mb-2">
            FAQ
          </p>
          <h2 className="font-serif font-bold text-xl md:text-4xl text-foreground mb-2 text-balance">
            Frequently Asked Questions
          </h2>
          <div className="rule-gold mx-auto w-24 md:w-40 my-3" />
          <p className="hidden md:block text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Everything you need to know about UK casino sites, bonuses, and choosing the right casino
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-sm md:text-base text-foreground py-3 md:py-4 hover:text-accent transition-colors duration-200 gap-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-muted-foreground pb-3 md:pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
