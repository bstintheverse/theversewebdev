import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./Terms.scss";
// library
import { Helmet, HelmetProvider } from "react-helmet-async";
// data
import { termsOfService } from "../../data/termsOfService";
export default function TermsPage() {
    return (_jsxs(HelmetProvider, { children: [_jsx(Helmet, { children: _jsx("title", { children: "The Verse | Terms" }) }), _jsxs("section", { className: "terms", children: [_jsx("h2", { className: "terms__subheader", children: "Terms of Service" }), _jsx("p", { className: "terms__last-update", children: "Last Updated: December 17, 2024" }), _jsxs("p", { className: "terms__text", children: ["Welcome to the ", _jsx("span", { className: "terms__text--bold", children: "The Verse" }), " at ", _jsx("a", { className: "terms__link", href: "https://www.versebuilding.com", children: "www.versebuilding.com" }), ". By accessing or using our website, you agree to comply with the following Terms of Service."] }), termsOfService.map((term) => (_jsxs("article", { className: "terms__policies", children: [_jsx("h3", { className: "terms__subheader--small", children: term.title }), _jsx("p", { className: "terms__text", children: term.content?.intro }), _jsx("ul", { className: "terms__policy-list", children: term.content?.points?.map((point) => (_jsx("li", { className: "terms__policy terms__text", children: point }))) })] }))), _jsx("h2", { className: "terms__subheader", children: "Questions?" }), _jsxs("p", { className: "terms__text", children: ["If you have any questions about these Terms, please contact us at ", _jsx("a", { className: "terms__link", href: "mailto:team@versebuilding.com", children: "team@versebuilding.com" }), "."] })] })] }));
}
;
