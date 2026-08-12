import { Expand } from "lucide-react";
import "./gallery.css";

function GalleryCard({ image, onClick }) {
    return (
        <div
            className="gallery-card"
            onClick={() => onClick(image)}
        >
            <img
                src={image.image}
                alt={image.alt}
                loading="lazy"
            />

            <div className="gallery-overlay">
                <Expand size={34} strokeWidth={1.5} />
            </div>
        </div>
    );
}

export default GalleryCard;