import About from "@/components/sections/About"
import Products from "@/components/sections/Products"
import Hero from "@/components/sections/Hero"
import MobileNav from "@/components/sections/MobileNav"
import Testimonials from "@/components/sections/Testimonials"


export default function Home() {
  return (
    <div>
      <MobileNav />
      <Hero />
      <About />
      <Testimonials />
      <Products />
    </div>
  );
}
