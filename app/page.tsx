import About from "@/components/sections/About"
import Products from "@/components/sections/Products"
import Hero from "@/components/sections/Hero"
import Testimonials from "@/components/sections/Testimonials"
import SoMe from "@/components/sections/SoMe"
import DesktopHero from "@/components/sections/DesktopHero"
import Contact from "@/components/sections/Contact"
import EventSection from "@/components/sections/EventSection"
import { Suspense } from "react"


export default function Home() {
  return (
    <div>
      <Hero />
      <DesktopHero />
      <About />
      <Testimonials />
      <EventSection />
      <Products />
      <SoMe />
      <Contact/>
    </div>
  );
}
