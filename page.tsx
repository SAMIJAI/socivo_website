import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ClientLogos from "@/components/client-logos"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Insights from "@/components/insights"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <Services />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Insights />
      </main>
      <Footer />
    </div>
  )
}

