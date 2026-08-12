import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import gallery from "../../data/gallery";

import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";
import Container from "../ui/Container";

import "./gallery.css";

const MOBILE_IMAGES = 5;
const TABLET_IMAGES = 8;

function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [visibleImages, setVisibleImages] = useState(gallery);

    const nextImage = () => {
        setSelectedIndex((prev) =>
            prev === visibleImages.length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? visibleImages.length - 1 : prev - 1
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

            if (e.key === "Escape") setSelectedIndex(null);
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex, visibleImages]);

    useEffect(() => {
        function updateGallery() {
            if (window.innerWidth <= 768) {
                setVisibleImages(gallery.slice(0, MOBILE_IMAGES));
            } else if (window.innerWidth <= 1024) {
                setVisibleImages(gallery.slice(0, TABLET_IMAGES));
            } else {
                setVisibleImages(gallery);
            }
        }

        updateGallery();

        window.addEventListener("resize", updateGallery);

        return () =>
            window.removeEventListener("resize", updateGallery);
    }, []);

    return (
        <section
            className="gallery-section"
            id="gallery"
        >
            <Container>

                <GalleryHeader />

                <GalleryGrid
                    images={visibleImages}
                    onImageClick={setSelectedIndex}
                />

                {selectedIndex !== null && (

                    <div
                        className="lightbox"
                        onClick={() => setSelectedIndex(null)}
                    >

                        <button
                            className="lightbox-close"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedIndex(null);
                            }}
                        >
                            <X size={32} />
                        </button>

                        <button
                            className="lightbox-prev"
                            onClick={(e) => {
                                e.stopPropagation();
                                previousImage();
                            }}
                        >
                            <ChevronLeft size={42} />
                        </button>

                        <img
                            src={visibleImages[selectedIndex].image}
                            alt={visibleImages[selectedIndex].alt}
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            className="lightbox-next"
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                        >
                            <ChevronRight size={42} />
                        </button>

                        <div className="lightbox-counter">
                            {selectedIndex + 1} / {visibleImages.length}
                        </div>

                    </div>

                )}

                <div className="gallery-button-wrapper">

                    <Link
                        to="/portfolio"
                        className="gallery-button"
                    >
                        Explore the Full Portfolio
                    </Link>

                </div>

            </Container>
        </section>
    );
}

export default Gallery;