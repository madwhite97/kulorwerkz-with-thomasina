function HeroTile({ image, alt, className = "", children }) {
    return (
        <div className={`hero-tile ${className}`}>
            {image && (
                <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    draggable="false"
                />
            )}

            {children}
        </div>
    );
}

export default HeroTile;