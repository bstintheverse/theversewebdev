import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./Header.scss";
// components
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
export default function Header() {
    return (_jsx("header", { children: _jsxs("nav", { className: "navbar", children: [_jsx("div", { className: "navbar__container navbar__container--left", children: _jsxs(Link, { to: "/", className: "navbar__logo-link", children: [_jsx("img", { className: "navbar__logo", src: "/assets/logos/logo.png", alt: "The Verse logo" }), _jsx("div", { className: "navbar__wrapper", children: _jsx("p", { className: "navbar__logo-title", children: "The Verse" }) })] }) }), _jsxs("div", { className: "navbar__container navbar__container--right", children: [_jsx(DropdownMenu, {}), _jsxs("ul", { className: "navbar__list", children: [_jsx("li", { className: "navbar__item", children: _jsx(Link, { to: "/about-us", className: "navbar__link", children: "About Us" }) }), _jsx("li", { className: "navbar__item", children: _jsx(Link, { to: "/experiences", className: "navbar__link", children: "Games & Digital Experiences" }) }), _jsx("li", { className: "navbar__item", children: _jsx(Link, { to: "/our-people", className: "navbar__link", children: "Our People" }) }), _jsx("li", { className: "navbar__item", children: _jsx(Link, { to: "/contact-us", className: "navbar__link", children: "Contact Us" }) })] })] })] }) }));
}
;
