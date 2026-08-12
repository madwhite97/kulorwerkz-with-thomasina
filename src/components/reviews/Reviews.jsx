import { Quote, Star, ArrowRight } from "lucide-react";
import "./reviews.css";

const reviews = [
    {
        name: "Emily R.",
        review:
            "Absolutely obsessed with my nails! The attention to detail is incredible, and they lasted weeks without a single chip.",
    },
    {
        name: "Ashley M.",
        review:
            "Such a relaxing experience from start to finish. My nails are perfect everytime.",
    },
    {
        name: "Jessica T.",
        review:
            "I showed Thomasina an inspiration photo and somehow my nails turned out even better.",
    },
];

function Reviews() {
    return (
        <section className="reviews" id="reviews">

            <div className="reviews-overlay" />

            <div className="reviews-content">

                <p className="reviews-eyebrow">
                    KIND WORDS
                </p>

                <h2>
                    Luxury isn't just how your nails look.
                </h2>

                <p className="reviews-intro">
                    It's how you feel when you leave.
                </p>

                <div className="reviews-grid">

                    {reviews.map((review, index) => (

                        <article
                            className="review-card"
                            key={index}
                        >

                            <Quote className="quote-icon" />

                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={15}
                                        fill="currentColor"
                                    />
                                ))}
                            </div>

                            <p>{review.review}</p>

                            <span>{review.name}</span>

                        </article>

                    ))}

                </div>

                <a
                    href="#"
                    className="reviews-button"
                >
                    Read More Reviews
                    <ArrowRight size={18}/>
                </a>

            </div>

        </section>
    );
}

export default Reviews;