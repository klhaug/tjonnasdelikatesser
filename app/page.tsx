import About from "@/components/sections/About"
import Products from "@/components/sections/Products"
import Hero from "@/components/sections/Hero"
import MobileNav from "@/components/sections/MobileNav"
import Testimonials from "@/components/sections/Testimonials"
import SoMe from "@/components/sections/SoMe"


export default function Home() {
  return (
    <div>
      <MobileNav />
      <Hero />
      <About />
      <Testimonials />
      <SoMe />
      <Products />
    </div>
  );
}
