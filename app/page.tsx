import About from "@/components/sections/About"
import Products from "@/components/sections/Products"
import Hero from "@/components/sections/Hero"
import MobileNav from "@/components/sections/MobileNav"


export default function Home() {
  return (
    <div>
      <MobileNav />
      <Hero />
      <About />
      <Products />
    </div>
  );
}
