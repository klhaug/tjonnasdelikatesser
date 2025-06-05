import About from "@/components/sections/About"
import Products from "@/components/sections/Products"
import Hero from "@/components/sections/Hero"
import Testimonials from "@/components/sections/Testimonials"
import SoMe from "@/components/sections/SoMe"
import Contact from "@/components/sections/Contact"


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <SoMe />
      <Products />
      <Contact />
    </div>
  );
}
