// styling
import "./Privacy.scss";

import { Helmet, HelmetProvider } from "react-helmet-async";

import { privacyPolicies } from "../../data/privacyPolicies";

export default function PrivacyPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Privacy
                </title>
            </Helmet>

            <section className="privacy">
                <h2 className="privacy__subheader">
                    Privacy Policy
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

                {privacyPolicies.map((policy) => (
                    <article className="privacy__policies">
                        <h3 className="privacy__subheader--small">
                            {policy.title}
                        </h3>

                        <p className="privacy__text">
                            {policy.content?.description}
                        </p>

                        <ul className="privacy__policy-list">
                            {policy.content?.points?.map((point) => (
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
                    If you have any questions about this Privacy Policy, please contact us at
                    <a href="mailto:team@versebuilding.com">team@versebuilding.com</a>.
                </p>
            </section>
        </HelmetProvider>
    );
};