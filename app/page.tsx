
import BookCallWidget from "@/components/book-call-widget"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProcessSteps from "@/components/process-steps"
import ServiceCards from "@/components/service-cards"
import AnimatedText from "@/components/animated-text"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left side - Team photos */}
          <div className="flex gap-4 lg:flex-shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-200 to-purple-300 overflow-hidden">
              {/* Replace with actual team member photo */}
              <div className="w-full h-full bg-gray-300" />
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-200 to-purple-300 overflow-hidden">
              {/* Replace with actual team member photo */}
              <div className="w-full h-full bg-gray-300" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              We Build AI Automations For{" "}
              <span className="text-gray-400">
                <AnimatedText
                  words={["Content Creation",  "Cold Outreach", "Lead Generation"]}
                />
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-700 max-w-2xl">
              Leverage AI to transform your content production and outreach workflows, replacing manual effort with streamlined, scalable systems. Book a call to discuss a tailor-made strategy that works for you.
            </p>

            <div className="flex gap-4 items-center mt-2">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-6 text-base font-medium"
                asChild
              >
                <Link href="#book-call" className="flex items-center gap-2">
                  Let&apos;s talk
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-black" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 mx-auto max-w-6xl">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
            {/* <p className="mt-4 text-sm text-gray-800 text-muted-foreground">
              Tailored solutions for businesses who want results without excessive features or costs.
            </p> */}
          </div>
          <ServiceCards />
        </div>
      </section>

      {/* "Our Process" Section */}
      <section id="how-it-works" className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Process</h2>
            <p className="mt-4 text-sm text-gray-800 text-muted-foreground">
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
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About the Founder</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-[15px] bg-gradient-to-br from-purple-200 to-purple-300 overflow-hidden">
                {/* Replace with actual team member photo */}
                {/* <div className="w-full h-full bg-gray-300" /> */}
                <img src={"/cole-avatar.jpg"} />

              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Cole McConnell</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Cole is a Full-Stack Engineer turned Automation Specialist with a strong track record in building custom automation solutions for clients worldwide. Based in Auckland, he leads Statement.ai and works full time in the automation space, helping businesses streamline complex processes with practical, reliable systems. His background in software engineering gives him a deep understanding of how to design and develop automations that deliver real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-0 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Schedule a Call</h2>
            <p className="mt-4 text-lg text-muted-foreground text-gray-800">
              Book a call to discuss how we can help implement AI solutions for your business.
            </p>
            <p className="pt-3 font-bold max-w-[450px] mx-auto text-[#6c48fb]">When booking your call, please provide as much context and detail as possible.</p>
          </div>
          <BookCallWidget />
        </div>
      </section>

      <Footer />
    </div>
  )
}
