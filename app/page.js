import Head from "next/head";
import About from "@/components/Landing/About";
import Blog from "@/components/Landing/Blog";
import Hero from "@/components/Landing/Hero";
import Offer from "@/components/Landing/Offer";
import OurProduct from "@/components/Landing/OurProduct";
import TestimonialSlider from "@/components/Landing/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic SEO Metadata */}
        <title>
          Fresh Harvests | Organic Products Delivered to Your Doorstep
        </title>
        <meta
          name='description'
          content='Discover a wide range of fresh, organic products with Fresh Harvests. Quality you can trust, delivered to your doorstep.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Fresh Harvests, Organic Products, E-commerce, Fresh Produce'
        />
        <meta name='author' content='Fresh Harvests Team' />

        {/* Open Graph Metadata */}
        <meta
          property='og:title'
          content='Fresh Harvests | Organic Products Delivered to Your Doorstep'
        />
        <meta
          property='og:description'
          content='Shop a wide variety of fresh, organic products and experience seamless delivery with Fresh Harvests.'
        />
        <meta property='og:url' content='https://freshtask.netlify.app/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://freshtask.netlify.app/og-image.jpg'
        />

        {/* Twitter Card Metadata */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Fresh Harvests | Organic Products Delivered to Your Doorstep'
        />
        <meta
          name='twitter:description'
          content='Enjoy fresh, organic products delivered to your doorstep with Fresh Harvests.'
        />
        <meta
          name='twitter:image'
          content='https://freshtask.netlify.app/twitter-image.jpg'
        />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='space-y-12 md:space-y-16 lg:space-y-20'>
        {/* Hero Section */}
        <Hero />

        {/* Product Showcase Section */}
        <OurProduct />

        {/* About Us Section */}
        <About />

        {/* Special Offers Section */}
        <Offer />

        {/* Testimonials Section */}
        <TestimonialSlider />

        {/* Blog Section */}
        <Blog />
      </main>
    </>
  );
}
