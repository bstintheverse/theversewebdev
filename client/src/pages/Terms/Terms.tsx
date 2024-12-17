// styling
import "./Terms.scss";

import { Helmet, HelmetProvider } from "react-helmet-async";

import { termsOfService } from "../../data/termsOfService";


export default function TermsPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Terms
                </title>
            </Helmet>

            <section className="privacy">
                <h2 className="privacy__subheader">
                    Terms of Service
                </h2>

                <p className="privacy__last-update">
                    Last Updated: December 17, 2024
                </p>

                <p className="privacy__text">
                    Welcome to the <span className="privacy__text--bold">The Verse</span>! Your
                    privacy is important to us. This Privacy Policy outlines how we collect, use,
                    and protect your personal information when you visit
                    <a href="https://www.versebuilding.com">www.versebuilding.com</a>.
                </p>

                {termsOfService.map((term) => (
                    <article className="privacy__policies">
                        <h3 className="privacy__subheader--small">
                            {term.title}
                        </h3>

                        <p className="privacy__text">
                            {term.content?.intro}
                        </p>

                        <ul className="privacy__policy-list">
                            {term.content?.points?.map((point) => (
                                <li className="privacy__policy privacy__text">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}

                <h2 className="privacy__subheader">
                    Contact Us
                </h2>

                <p className="privacy__text">
                    If you have any questions about these Terms, please contact us at <a className="terms__link" href="mailto:team@versebuilding.com">team@versebuilding.com</a>.
                </p>
            </section>
        </HelmetProvider>
    );
};