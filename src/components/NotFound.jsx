import SEO from "./SEO";
import { Link } from "react-router-dom";

import "./not-found.css";

export default function NotFound() {
    return (
        <>
            <SEO
                title="Page Not Found | Kulorwerkz with Thomasina"
                description="The page you're looking for could not be found. Return to Kulorwerkz with Thomasina for luxury-nail artistry in Johnson City, Tennessee."
                canonical="https://kulorwerkz.com/"
            />

            <main className="not-found">
                <div className="not-found-content">

                    <p className="not-found-tag">
                        KULORWERKZ WITH THOMASINA
                    </p>

                    <h1>
                        <span>Something</span>
                        <span>Beautiful</span>
                        <span>Went Missing</span>
                    </h1>

                    <div className="not-found-divider">
                        <span />
                        <div className="not-found-diamond" />
                        <span />
                    </div>

                    <p className="not-found-message">
                        The page you're looking for doesn't exist or may have moved. Let's get you back to something beautiful.
                    </p>

                    <Link
                        to="/"
                        className="not-found-button"
                    >
                        Return Home
                    </Link>

                </div>
            </main>
        </>
    );
}