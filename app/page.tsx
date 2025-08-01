import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MembershipPlans } from "@/components/membership-plans"
import { Features } from "@/components/features"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <MembershipPlans />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}
