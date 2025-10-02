'use client'

import Navbar from "./sections/navbar";
import Main from "./sections/main";
import Testimonial from "./sections/testimonials";
import Pricing from "./sections/pricing";
import CTA from "./sections/cta";
import Footer from "./sections/footer";

export default function Home() {

  return (
    <div className="min-h-screen min-w-screen text-secondary-text relative pt-32">
      <Navbar />
      <Main />
      <Testimonial />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
