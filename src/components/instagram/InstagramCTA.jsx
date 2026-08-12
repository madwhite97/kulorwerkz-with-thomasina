import { ArrowRight } from "lucide-react";
import "./instagramCTA.css";
import { FaInstagram } from "react-icons/fa";

function InstagramCTA() {
    return (
        <section className="instagram-cta">

            <div className="instagram-divider">
                ✦
            </div>

            <p className="instagram-eyebrow">
                THE GALLERY NEVER ENDS
            </p>

            <h2>
                Love what you see?
            </h2>
            
            <p className="instagram-text">
                Follow along for new nails sets, behind-the-scenes moments, and fresh inspiration.
            </p>

            <a
                href="https://instagram.com/thomidoinnails"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-button"
            >
                <FaInstagram size={18} />
                @thomidoinnails
                <ArrowRight size={18} />
            </a>

        </section>
    );
}

export default InstagramCTA;