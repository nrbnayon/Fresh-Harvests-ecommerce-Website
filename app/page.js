import Footer from "@/components/Footer";
import About from "@/components/Landing/About";
import Blog from "@/components/Landing/Blog";
import Hero from "@/components/Landing/Hero";
import Offer from "@/components/Landing/Offer";
import OurProduct from "@/components/Landing/OurProduct";
import TestimonialSlider from "@/components/Landing/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <OurProduct />
      <About />
      <Offer />
      <TestimonialSlider />
      <Blog />
      <Footer />
    </>
  );
}
