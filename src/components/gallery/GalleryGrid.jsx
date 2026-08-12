import GalleryCard from "./GalleryCard";

function GalleryGrid({ images, onImageClick }) {
    return (
        <div className="gallery-grid">
            {images.map((image, index) => (
                <GalleryCard
                    key={image.id}
                    image={image}
                    onClick={() => onImageClick(index)}
                />
            ))}
        </div>
    );
}

export default GalleryGrid;