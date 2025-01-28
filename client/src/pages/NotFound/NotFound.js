import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./NotFound.scss";
// library
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function NotFoundPage() {
    return (_jsxs(HelmetProvider, { children: [_jsx(Helmet, { children: _jsx("title", { children: "The Verse | Page Not Found" }) }), _jsxs("section", { className: "not-found", children: [_jsx("div", { className: "full-width-bg-wrapper full-width-bg-wrapper--black", children: _jsxs("div", { className: "not-found__container", children: [_jsx("h2", { className: "not-found__subheader", children: "Oops! Looks like you've hit a dead end!" }), _jsx("p", { className: "not-found__text--white", children: "It appears the page you were trying to find has gone missing. Don't worry, though! We'll help you get back on track." })] }) }), _jsxs("div", { className: "not-found__content", children: [_jsx("p", { className: "not-found__text", children: "Here's what you can do:" }), _jsxs("ul", { className: "not-found__list", children: [_jsxs("li", { className: "not-found__item not-found__text", children: ["Head back to our ", _jsx(Link, { className: "not-found__link", to: "/", children: "Home Page" })] }), _jsxs("li", { className: "not-found__item not-found__text", children: ["Still need help? Contact us ", _jsx(Link, { className: "not-found__link", to: "/contact-us", children: "here" })] })] })] })] })] }));
}
;
