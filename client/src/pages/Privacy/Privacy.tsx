// styling
import "./Privacy.scss"; 

import { Helmet, HelmetProvider} from "react-helmet-async";


export default function PrivacyPage() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | Privacy
                </title>
            </Helmet>
        
            <section className="privacy">
                Privacy Placeholder
            </section>
        </HelmetProvider>
    );
};