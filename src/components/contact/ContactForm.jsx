import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(
                "https://formspree.io/f/mljrnjlv",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Accept: "application/json",
                    },
                }
            );

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="contact-card contact-success">

                <p className="contact-card-tag">
                    ✦ Message Sent ✦
                </p>

                <h3 className="contact-card-title">
                    Thank You
                </h3>

                <div className="contact-divider center">
                    <span></span>
                    <div className="diamond"></div>
                    <span></span>
                </div>

                <p className="contact-success-message">
                    Your message has been received.
                    <br />
                    Thomasina will get back to you as soon as possible.
                </p>

                <button
                    type="button"
                    className="contact-button"
                    onClick={() => setStatus("idle")}
                >
                    SEND ANOTHER MESSAGE

                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />

                        <path
                            d="M13 6L19 12L13 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

            </div>
        );
    };

    return (
        <div className="contact-card">

            <p className="contact-card-tag">
                CONTACT US
            </p>

            <h3 className="contact-card-title">
                Get In Touch
            </h3>

            <div className="contact-divider center">
                <span></span>
                <div className="diamond"></div>
                <span></span>
            </div>

            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group">

                    <label htmlFor="name">
                        FULL NAME
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                    />

                </div>

                <div className="form-group">

                    <label htmlFor="email">
                        EMAIL ADDRESS
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                    />

                </div>

                <div className="form-group">

                    <label htmlFor="phone">
                        PHONE NUMBER
                    </label>

                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                    />

                </div>

                <div className="form-group">

                    <label htmlFor="message">
                        MESSAGE
                    </label>

                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Tell me about your dream set, inspiration, or ask me a question..."
                        required
                    />

                </div>

                {status === "error" && (
                    <p className="contact-form-error">
                        Something went wrong while sending your message. Please try again.
                    </p>
                )}

                <button
                    className="contact-button"
                    type="submit"
                    disabled={status === "submitting"}
                >
                    {status === "submitting"
                        ? "SENDING..."
                        : "SEND MESSAGE"}

                    {status !== "submitting" && (
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 12H19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />

                            <path
                                d="M13 6L19 12L13 18"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>

            </form>

            <p className="contact-small-text">
                I'll get back to you as soon as I can.
                <br />
                Thank you for your patience while I'm with clients.
            </p>

        </div>
    );
}