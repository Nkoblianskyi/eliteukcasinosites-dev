import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Elite UK Casino Sites | Top UK Casinos 2026 | eliteukcasinosites.com",
  description:
    "The UK's most prestigious casino comparison platform. Expert reviews, verified bonuses, and top-rated UKGC-licensed casinos curated by our editorial team.",
  keywords:
    "elite UK casino sites, best casinos UK, UK casino comparison, top UK casinos 2026, UKGC licensed casinos, UK casino bonuses",
}

export const viewport: Viewport = {
  themeColor: "#0f1625",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
