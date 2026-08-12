import "./footer.css";

import {
    MapPin,
    Mail,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import logo from "../../assets/images/homepage/logo.png";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-glow"></div>

            <div className="footer-watermark">
                KW
            </div>

            <div className="footer-container">

                <p className="footer-script">
                    Beautiful nails begin with confidence.
                </p>

                <div className="footer-divider">
                    <span></span>
                    <div className="diamond"></div>
                    <span></span>
                </div>

                <img
                    src={logo}
                    alt="Kulorwerkz with Thomasina"
                    className="footer-logo"
                />

                <div className="footer-links">

                    <a
                        href="https://maps.google.com/?q=207-A+Elm+St+Johnson+City+TN+37601"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MapPin />
                        <span>Johnson City, TN</span>
                    </a>

                    <a href="mailto:thomasinaalexander@live.com">
                        <Mail />
                        <span>Email</span>
                    </a>

                    <a
                        href="https://instagram.com/thomidoinnails"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                        <span>Instagram</span>
                    </a>

                </div>

                <div className="footer-divider">
                    <span></span>
                    <div className="diamond"></div>
                    <span></span>
                </div>

                <p className="footer-copy">
                    © {new Date().getFullYear()} Kulorwerkz with Thomasina.
                    All Rights Reserved.
                </p>

                <p className="footer-credit">
                    Designed &amp; Developed by
                    <span>Maddie W.</span>
                </p>

            </div>

        </footer>
    );
}