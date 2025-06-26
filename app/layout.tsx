import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: "Nova SEO - Advanced SEO Dashboard",
    template: `%s | Nova SEO`,
  },
  description: "AI-powered SEO dashboard for professionals to boost rankings.",
  keywords: ["SEO", "AI SEO", "Rank Tracking", "Keyword Research", "Backlink Analysis"],
  authors: [{ name: "Nova SEO Team", url: "https://novaseo.com" }],
  creator: "Nova SEO Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novaseo.com",
    title: "Nova SEO - Advanced SEO Dashboard",
    description: "AI-powered SEO dashboard for professionals to boost rankings.",
    siteName: "Nova SEO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova SEO - Advanced SEO Dashboard",
    description: "AI-powered SEO dashboard for professionals to boost rankings.",
    creator: "@novaseo",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}