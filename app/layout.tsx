import type React from "react"
import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "overleaf.ai - Automate your Content Production and Cold Outreach.",
  description: "Leverage AI to transform your content production and outreach workflows, replacing manual effort with completely automated, scalable systems.",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  )
}
