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

import SEO from "./components/SEO";


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
            <SEO
                title="Kulorwerkz with Thomasina | Luxury Nail Artist in Johnson City, TN"
                description="Luxury nail artistry in Johnson City, Tennessee. Explore custom acrylic sets, gel polish, pedicures, nail art, and handcrafted designs by Thomasina."
                canonical="https://kulorwerkz.com/"
            />
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


export default function App() {
    return (
        <Routes>

            <Route
                path="/"
                element={<HomePage />}
            />

            <Route
                path="/portfolio"
                element={<Portfolio />}
            />

        </Routes>
    );
}