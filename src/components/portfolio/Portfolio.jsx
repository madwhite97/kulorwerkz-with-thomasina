import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

import "./portfolio.css";
import Footer from "../footer/Footer";
import PortfolioLightbox from "./PortfolioLightbox";

const images = Object.values(
    import.meta.glob(
        "../../assets/portfolio/*.{jpg,jpeg,png,webp,avif}",
        {
            eager: true,
            import: "default",
        }
    )
).sort();

export default function Portfolio() {

    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        window.history.scrollRestoration = "manual";
        window.scrollTo(0, 0);

        return () => {
            window.history.scrollRestoration = "auto";
        };
    }, []);

    const nextImage = () => {
        setSelectedIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    useEffect(() => {

        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        function handleKeyDown(e) {

            if (selectedIndex === null) return;

            if (e.key === "ArrowRight") nextImage();

            if (e.key === "ArrowLeft") previousImage();

            if (e.key === "Escape") {
                setSelectedIndex(null);
            }

        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {

            document.body.style.overflow = "";

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, [selectedIndex]);

    return (
        <>
            <main className="portfolio-page">
                
                <a
                    href="/#gallery"
                    className="back-home"
                >
                    ← Return Home
                </a>
                
                {/* HERO */}
                
                <section className="portfolio-hero">
                    
                    <p className="portfolio-tag">
                        LUXURY NAIL ARTISTRY
                    </p>
                    
                    <h1 className="portfolio-heading">
                        
                        <span className="gold">
                            Luxury
                        </span>
                        
                        <span className="script">
                            Portfolio
                        </span>
                        
                    </h1>
                    
                    <div className="portfolio-divider">
                        
                        <span />
                        
                        <Sparkles
                            size={18}
                            strokeWidth={1.5}
                        />
                        
                        <span />
                        
                    </div>
                    
                    <p className="portfolio-intro">
                        Every appointment is an opportunity to create art. Browse a curated collection of nail designs handcrafted with precision, creativity, and premium products.
                    </p>
                    
                </section>
                
                {/* GALLERY */}
                
                <section className="portfolio-gallery">
                    
                    {images.map((image, index) => (
                        
                        <button
                            key={index}
                            type="button"
                            className="portfolio-image"
                            onClick={() => setSelectedIndex(index)}
                        >

                            <img
                                src={image}
                                alt={`Luxury nail design ${index + 1}`}
                                loading="lazy"
                            />

                            <div className="portfolio-overlay" />

                        </button>
                        
                    ))}


                </section>
                
                {/* CTA */}
                
                <section className="portfolio-cta">
                    
                    <h2>
                        Ready to Create
                        <br />
                        Something Beautiful?
                    </h2>
                    
                    <p>
                        Let's design a custom set that's uniquely yours.
                    </p>
                    
                    <a
                        href="/#contact"
                        className="portfolio-button"
                    >
                        Book Your Experience 
                    </a>
                    
                </section>
                
            </main>
            
            <PortfolioLightbox
                images={images}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                nextImage={nextImage}
                previousImage={previousImage}
            />
            
            <Footer />
            
        </>
    );
}