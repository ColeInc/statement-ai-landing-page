import Link from "next/link"
import { ArrowRight, Bot, Code } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServiceCards() {
  const services = [
    {
      icon: Code,
      title: "Content Creation Systems",
      description: "Automated Long-form Content Systems that keep your brand active and visible while you stay focused on running your business.",
      points: [
        // "Leverage AI to create content tailored to your brand voice and messaging at scale.",
        "Automate your social media content workflow, freeing up hours so you can focus on strategy and growth.",
        "Consistent, high-quality content across every platform without spending hours thinking of ideas, writing drafts, or repurposing posts.",
        "Daily, consistent publishing of SEO-optimized blog posts, long-form newsletters, short-form posts, and YouTube scripts in one streamlined system."
      ],
    },
    {
      icon: Bot,
      title: "Cold Outreach Automation",
      description: "Cold Outreach Automation Systems that generate highly personalized outreach messages at scale.",
      points: [
        // "Stand out in crowded inboxes with personalised outreach that feels researched and relevant instead of generic.",
        // "Reach more leads with highly personalized cold emails created automatically at scale.",
        "Analyze each lead’s website, messaging, and pain points to craft completely personalised messages that feel handcrafted and highly relevant.",
        "Fully automate the research, writing, and sending process, eliminating manual work and scaling your lead generation effortlessly.",
        "Target prospects with messages based on their specific background and context, not generic templates."
      ],
    },
  ]

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <div className="grid gap-12 md:grid-cols-2 md:gap-8">
        {services.map((service, index) => (
          <div key={index} className="space-y-6">
            {/* Icon */}
            <div className="h-16 w-16 rounded-lg bg-primary/10 p-4">
              <service.icon className="h-8 w-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold">{service.title}</h3>

            {/* Short description */}
            <p className="text-lg text-slate-600 leading-tight">{service.description}</p>

            {/* Bullet points */}
            <ul className="space-y-3 pt-2">
              {service.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-3 leading-tight">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary "></span>
                  <span className="text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 flex justify-end">
        <Button asChild className="group">
          <Link href="#book-call">
            Schedule a Call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
