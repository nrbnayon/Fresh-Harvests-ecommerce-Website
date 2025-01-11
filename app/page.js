import About from "@/components/Landing/About";
import Blog from "@/components/Landing/Blog";
import Hero from "@/components/Landing/Hero";
import Offer from "@/components/Landing/Offer";
import OurProduct from "@/components/Landing/OurProduct";
import TestimonialSlider from "@/components/Landing/Testimonials";

export default function Home() {
  return (
    <div className='space-y-12 md:space-y-16 lg:space-y-20'>
      <Hero />
      <OurProduct />
      <About />
      <Offer />
      <TestimonialSlider />
      <Blog />
    </div>
  );
}
