import About from "@/components/sections/About"
import Products from "@/components/sections/Products"
import Hero from "@/components/sections/Hero"
import MobileNav from "@/components/sections/MobileNav"
import Testimonials from "@/components/sections/Testimonials"
import SoMe from "@/components/sections/SoMe"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"


export default function Home() {
  return (
    <div>
      <MobileNav />
      <Hero />
      <About />
      <Testimonials />
      <SoMe />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
