import "./contact.css";
import ContactForm from "./ContactForm";

import HandArtwork from "../../assets/floral-artwork.svg";

import {
  MapPin,
  Mail,
  MessageCircle,
  Clock,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* LEFT COLUMN */}
        <div className="contact-left">

          <p className="contact-tag">
            LET'S CREATE
          </p>

          <h2 className="contact-heading">
            <span className="heading-gold">
              Something
            </span>

            <span className="heading-script">
              Beautiful
            </span>
          </h2>

          <div className="contact-divider">
            <span></span>
            <div className="diamond"></div>
            <span></span>
          </div>

          <p className="contact-intro">
            We'd love to hear from you! Whether you're ready for your
            next luxury nail appointment, have a question about
            services, or need help deciding on your perfect set,
            we're here to help.
          </p>

          {/* Artwork + Contact Info */}

          <div className="contact-details">

            <div className="contact-artwork">

              <img
                src={HandArtwork}
                alt=""
                aria-hidden="true"
              />

            </div>

            <div className="contact-info">

              <div className="contact-item">

                <div className="contact-icon">
                  <MapPin />
                </div>

                <div className="contact-text">

                  <h4>VISIT SALON</h4>

                  <p>
                    207-A Elm St.
                    <br />
                    Johnson City, TN 37601
                  </p>

                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <Mail />
                </div>

                <div className="contact-text">

                  <h4>EMAIL US</h4>

                  <p>
                    thomasinaalexander@live.com
                  </p>

                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <MessageCircle />
                </div>

                <div className="contact-text">

                  <h4>TEXT ME</h4>

                  <p>
                    423-943-1181
                  </p>

                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <FaInstagram />
                </div>

                <div className="contact-text">

                  <h4>FOLLOW ALONG</h4>

                  <p>
                    @kulorwerkzwiththomasina
                  </p>

                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  <Clock />
                </div>

                <div className="contact-text">

                  <h4>HOURS</h4>

                  <p>
                    By Appointment Only
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="contact-right">

          <ContactForm />

        </div>

      </div>
    </section>
  );
}