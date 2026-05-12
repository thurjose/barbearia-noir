import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import Booking from "@/components/Booking"
import SiteFooter from "@/components/SiteFooter"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Booking />
      <SiteFooter />
    </main>
  )
}
