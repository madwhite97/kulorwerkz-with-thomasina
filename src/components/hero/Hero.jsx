import HeroGrid from "./HeroGrid";
import SignatureStrip from "./SignatureStrip";

import "../../styles/hero.css";

function Hero() {
    return (
        <section className="hero">
            <HeroGrid />
            <SignatureStrip />
        </section>
    );
}

export default Hero;