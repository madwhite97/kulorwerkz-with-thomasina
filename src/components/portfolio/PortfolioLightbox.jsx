import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioLightbox({
    images,
    selectedIndex,
    setSelectedIndex,
    nextImage,
    previousImage,
}) {
    if (selectedIndex === null) return null;

    return (
        <div
            className="portfolio-lightbox"
            onClick={() => setSelectedIndex(null)}
        >
            <button
                className="portfolio-lightbox-close"
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(null);
                }}
            >
                <X size={34} />
            </button>

            <button
                className="portfolio-lightbox-prev"
                onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                }}
            >
                <ChevronLeft size={44} />
            </button>

            <img
                src={images[selectedIndex]}
                alt={`Luxury nail design ${selectedIndex + 1}`}
                className="portfolio-lightbox-image"
                onClick={(e) => e.stopPropagation()}
            />

            <button
                className="portfolio-lightbox-next"
                onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                }}
            >
                <ChevronRight size={44} />
            </button>

            <div className="portfolio-lightbox-counter">
                Design {selectedIndex + 1} of {images.length}
            </div>
        </div>
    );
}