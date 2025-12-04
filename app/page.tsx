
import BookCallWidget from "@/components/book-call-widget"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProcessSteps from "@/components/process-steps"
import ServiceCards from "@/components/service-cards"
import AnimatedText from "@/components/animated-text"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BorderBeam } from "@/components/magicui/border-beam"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 max-w-6xl min-h-[calc(100vh-4rem)] flex items-center">
        {/* Animated Background Blob */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#BFE2E4]/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#9fd5d8]/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#7ec8cc]/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>

        <div className="flex flex-col items-center gap-6 max-w-[47rem] mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
            We Build AI Automations For{" "}
            <span className="text-primary">
              <AnimatedText
                words={["Content Creation",  "Cold Outreach", "Lead Generation"]}
              />
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl !text-[#bcbcbc]">
            Leverage AI to transform your content production and outreach workflows, replacing manual effort with streamlined, scalable systems. Book a call to discuss a tailor-made strategy that works for you.
          </p>

          <div className="flex gap-4 items-center mt-2">
            <Card className="relative">
              <Button asChild className="relative overflow-hidden w-[160px]" variant={"outline"} size="lg">
                <Link href="#book-call" className="flex items-center gap-2">
                  Let&apos;s talk
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                </Link>
              </Button>
              <BorderBeam size={100} duration={8} colorFrom="#BFE2E4" colorTo="#9fd5d8" />
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 mx-auto max-w-6xl">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">Our Services</h2>
          </div>
          <ServiceCards />
          {/* CTA Button */}
          <div className="mt-5 flex justify-end">
            <Card className="relative">
              <Button asChild className="relative overflow-hidden w-[160px]" variant={"outline"} size="lg">
                <Link href="#book-call" className="flex items-center gap-2">
                  Let&apos;s talk
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                </Link>
              </Button>
              <BorderBeam size={100} duration={8} colorFrom="#BFE2E4" colorTo="#9fd5d8" />
            </Card>
          </div>
        </div>
      </section>

      {/* "Our Process" Section */}
      <section id="how-it-works" className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">Our Process</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              A simple, streamlined process to provide your business with exactly what you need, and nothing extra.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Meet the Team */}
      <section id="meet-the-team" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">About the Founder</h2>
          </div>
          <div className="grid md:grid-cols-[auto_1fr] gap-x-8 gap-y-4 items-start">
            {/* Empty space in first column, first row on desktop */}
            <div className="hidden md:block"></div>

            {/* Heading in second column, first row */}
            <h3 className="text-2xl font-semibold text-foreground text-center md:text-left">Cole McConnell</h3>

            {/* Profile Picture in first column, second row */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-28 h-28 rounded-[15px] bg-gradient-to-br from-teal/20 to-accent/20 overflow-hidden border border-white/5">
                <img src={"/cole-avatar.jpg"} />
              </div>
            </div>

            {/* Bio in second column, second row */}
            <p className="!text-[18px] !leading-[24px] md:text-lg text-muted-foreground text-center md:text-left">
              Cole is a Full-Stack Engineer turned Automation Specialist with a strong track record in building custom automation solutions for clients worldwide. Based in Auckland, he leads Statement.ai and works full time in the automation space, helping businesses streamline complex processes with practical, reliable systems. His background in software engineering gives him a deep understanding of how to design and develop automations that deliver real results.
            </p>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-0 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">Schedule a Call</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a call to discuss how we can help implement AI solutions for your business.
            </p>
            <p className="pt-3 font-bold max-w-[450px] mx-auto text-primary">When booking your call, please provide as much context and detail as possible.</p>
          </div>
          <BookCallWidget />
        </div>
      </section>

      <Footer />
    </div>
  )
}
