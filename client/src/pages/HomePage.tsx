import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import MenuHighlights from "@/components/sections/MenuHighlights";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <About />
        <MenuHighlights />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
