import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import LuxuryCTA from "./components/LuxuryCTA/LuxuryCTA";
import Gallery from "./components/gallery/Gallery";
import InstagramCTA from "./components/instagram/InstagramCTA";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import Portfolio from "./components/portfolio/Portfolio";

function HomePage() {
  
  useEffect(() => {

    if (window.location.hash === "#contact") {

      setTimeout(() => {

        document
          .getElementById("contact")
          ?.scrollIntoView({
            behavior: "smooth",
          });

      }, 100);

    }

  }, []);

  return (
    <>
      <Hero />
      <Services />
      <LuxuryCTA />
      <Gallery />
      <InstagramCTA />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}