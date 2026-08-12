import heroImages from "../../data/heroImages";

import HeroTile from "./HeroTile";
import HeroLogo from "./HeroLogo";

export default function HeroGrid() {
    return (
        <section className="hero-grid">

            <HeroTile className="left" image={heroImages.leftTop} />

            <HeroTile className="towels" image={heroImages.towels} />

            <HeroTile className="marble" image={heroImages.stones} />

            <HeroLogo />

            <HeroTile className="right-top" image={heroImages.rightTop} />

            <HeroTile className="stones" image={heroImages.marble} />

            <HeroTile className="right-bottom" image={heroImages.rightBottom} />

            <HeroTile className="polish" image={heroImages.polish} />

            <HeroTile className="texture" image={heroImages.texture} />

        </section>
    );
}