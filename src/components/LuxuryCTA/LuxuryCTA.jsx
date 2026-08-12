import "./LuxuryCTA.css";
import { Sparkles, Palette, Flower2 } from "lucide-react";

export default function LuxuryCTA() {
    return (
        <section className="luxury-cta">
            <div className="luxury-card">

                <span className="luxury-eyebrow">
                    ✦ YOUR MOMENT OF LUXURY ✦
                </span>

                <h2>
                    Ready to Book Your
                    <br />
                    Luxury Experience?
                </h2>

                <p>
                    Treat yourself to flawless nails, premium products, and a relaxing salon experience designed just for you.
                </p>

                <div className="luxury-features">

                    <div className="feature">
                        <Sparkles />
                        <span>Premium Producst</span>

                        <div className="feature">
                            <Palette />
                            <span>Custom Nail Art</span>
                        </div>

                        <div className="feature">
                            <Flower2 />
                            <span>Relaxing Spa Experience</span>
                        </div>

                    </div>

                </div>

                <a
                    href="#contact"
                    className="luxury-button"
                >
                    Book Your Experience
                </a>

            </div>
        </section>
    );
}
