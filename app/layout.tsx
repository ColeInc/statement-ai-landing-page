import type React from "react"
import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hyssop Labs - AI Automation and Automation",
  description: "Hyssop Labs helps SMBs, agencies, and startups generate new revenue, automate tedious processes, and save amounts of significant time with Automation and AI.",
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
