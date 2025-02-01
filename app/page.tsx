"use client"

import { useState } from "react";
import Header from "./shared/Header";
import Hero from "./shared/Hero";
import Service from "./shared/Services";
import Portfolio from "./shared/Portfolio";
import Testimonial from "./shared/Testimonial";
import Contact from "./shared/Contact";
import AboutUs from "./shared/About Us";
import OurProcess from "./shared/OurProcess";
import WhyChooseUs from "./shared/WhyChooseUs";
import FAQ from "./shared/FAQ";
import Footer from "./shared/Footer";

export default function Home() {
  const [activePortfolioTab, setActivePortfolioTab] = useState("residential");

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Service />
      <Portfolio />
      <Testimonial />
      <AboutUs />
      <OurProcess />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
