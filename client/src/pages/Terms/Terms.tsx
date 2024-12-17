// styling
import "./Terms.scss";

import { Helmet, HelmetProvider} from "react-helmet-async";

export default function TermsPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Terms
                </title>
            </Helmet>

            <section className="terms">
                Terms placeholder 
            </section>
        </HelmetProvider>
    );
};