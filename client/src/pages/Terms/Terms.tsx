// styling
import "./Terms.scss";

// library
import { Helmet, HelmetProvider } from "react-helmet-async";

// data
import { termsOfService } from "../../data/termsOfService";

export default function TermsPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Terms
                </title>
            </Helmet>

            <section className="terms">
                <h2 className="terms__subheader">
                    Terms of Service
                </h2>

                <p className="terms__last-update">
                    Last Updated: December 17, 2024
                </p>

                <p className="terms__text">
                    Welcome to the <span className="terms__text--bold">The Verse</span> at <a className="terms__link" href="https://www.versebuilding.com">www.versebuilding.com</a>. 
                    By accessing or using our website, you agree to comply with the following Terms of Service.
                </p>

                {termsOfService.map((term) => (
                    <article className="terms__policies">
                        <h3 className="terms__subheader--small">
                            {term.title}
                        </h3>

                        <p className="terms__text">
                            {term.content?.intro}
                        </p>

                        <ul className="terms__policy-list">
                            {term.content?.points?.map((point) => (
                                <li className="terms__policy terms__text">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}

                <h2 className="terms__subheader">
                    Questions?
                </h2>

                <p className="terms__text">
                    If you have any questions about these Terms, please contact us at <a className="terms__link" href="mailto:team@versebuilding.com">team@versebuilding.com</a>.
                </p>
            </section>
        </HelmetProvider>
    );
};