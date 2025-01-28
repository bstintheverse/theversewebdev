import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./Privacy.scss";
// library
import { Helmet, HelmetProvider } from "react-helmet-async";
// data
import { privacyPolicies } from "../../data/privacyPolicies";
export default function PrivacyPage() {
    return (_jsxs(HelmetProvider, { children: [_jsx(Helmet, { children: _jsx("title", { children: "The Verse | Privacy" }) }), _jsxs("section", { className: "privacy", children: [_jsx("h2", { className: "privacy__subheader", children: "Privacy Policy" }), _jsx("p", { className: "privacy__last-update", children: "Last Updated: December 17, 2024" }), _jsxs("p", { className: "privacy__text", children: ["Welcome to the ", _jsx("span", { className: "privacy__text--bold", children: "The Verse" }), "! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit ", _jsx("a", { className: "privacy__link", href: "https://www.versebuilding.com", children: "www.versebuilding.com" }), "."] }), privacyPolicies.map((policy) => (_jsxs("article", { className: "privacy__policies", children: [_jsx("h3", { className: "privacy__subheader--small", children: policy.title }), _jsx("p", { className: "privacy__text", children: policy.content?.description }), _jsx("ul", { className: "privacy__policy-list", children: policy.content?.points?.map((point) => (_jsx("li", { className: "privacy__policy privacy__text", children: point }))) })] }))), _jsx("h2", { className: "privacy__subheader", children: "Questions?" }), _jsxs("p", { className: "privacy__text", children: ["If you have any questions about this Privacy Policy, please contact us at ", _jsx("a", { className: "privacy__link", href: "mailto:team@versebuilding.com", children: "team@versebuilding.com" }), "."] })] })] }));
}
;
