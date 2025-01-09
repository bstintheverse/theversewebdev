// styling
import "./NotFound.scss";

// library
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function NotFoundPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Page Not Found
                </title>
            </Helmet>

            <section className="not-found">
                <div className="full-width-bg-wrapper full-width-bg-wrapper--black">
                    <div className="not-found__container">
                        <h2 className="not-found__subheader">
                            Oops! Looks like you've hit a dead end!
                        </h2>

                        <p className="not-found__text--white">
                            It appears the page you were trying to find has gone missing. 
                            Don't worry, though! We'll help you get back on track.
                        </p>
                    </div>
                </div>

                <div className="not-found__content">
                    <p className="not-found__text">
                        Here's what you can do:
                    </p>

                    <ul className="not-found__list">
                        <li className="not-found__item not-found__text">
                            Head back to our <Link className="not-found__link" to="/">Home Page</Link>
                        </li>

                        <li className="not-found__item not-found__text">
                            Still need help? Contact us <Link className="not-found__link" to="/contact-us">here</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </HelmetProvider>
    );
};