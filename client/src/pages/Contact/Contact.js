import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./Contact.scss";
// components
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Diversity3Icon from '@mui/icons-material/Diversity3';
// libraries
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function ContactPage() {
    return (_jsxs(HelmetProvider, { children: [_jsx(Helmet, { children: _jsx("title", { children: "The Verse | Contact Us" }) }), _jsxs("section", { className: "contact", children: [_jsx("div", { className: "full-width-bg-wrapper full-width-bg-wrapper--black", children: _jsxs("div", { className: "contact__container", children: [_jsx("h2", { className: "contact__subheader", children: "Get in Touch" }), _jsx("p", { className: "contact__text contact__text--white", children: "Got ideas? Want to build something in The Verse? Let's work together! Collaboration is key to solving today's challenges and making an impact. Join us and create something extraordinary." })] }) }), _jsx("section", { className: "contact__content", children: _jsxs("section", { className: "contact__container-info-form", children: [_jsxs("div", { className: "contact__info-wrapper", children: [_jsxs("div", { className: "contact__info", children: [_jsx(Avatar, { sx: {
                                                        backgroundColor: "#711C71"
                                                    }, children: _jsx(EmailIcon, {}) }), _jsxs("div", { className: "", children: [_jsx("h4", { className: "contact__label", children: "Email" }), _jsx("p", { className: "contact__text", children: "info@versebuilding.com" })] })] }), _jsxs("div", { className: "contact__info", children: [_jsx(Avatar, { sx: {
                                                        backgroundColor: "#343270"
                                                    }, children: _jsx(EmojiEmotionsIcon, {}) }), _jsxs("div", { className: "", children: [_jsx("h4", { className: "contact__label", children: "Socials" }), _jsxs("div", { className: "contact__social-icons", children: [_jsx("a", { href: "https://www.x.com/buildingverses", target: "_blank", children: _jsx("img", { className: "contact__social-icon", src: "/assets/badges/x.svg" }) }), _jsx("a", { href: "https://www.instagram.com/buildingverses/", target: "_blank", children: _jsx("img", { className: "contact__social-icon", src: "/assets/badges/instagram.svg" }) }), _jsx("a", { href: "https://www.linkedin.com/company/building-the-verse/", target: "_blank", children: _jsx("img", { className: "contact__social-icon", src: "/assets/badges/linkedin.svg" }) })] })] })] }), _jsxs("div", { className: "contact__info", children: [_jsx(Avatar, { sx: {
                                                        backgroundColor: "#3A4A97"
                                                    }, children: _jsx(Diversity3Icon, {}) }), _jsxs("div", { className: "", children: [_jsx("h4", { className: "contact__label", children: "Join Us" }), _jsx(Link, { className: "contact__link", to: "https://wellfound.com/company/the-verse", target: "_blank", children: "wellfound.com/company/the-verse" })] })] })] }), _jsx("div", { className: "contact__form", children: _jsx("iframe", { className: "google-form", src: "https://docs.google.com/forms/d/e/1FAIpQLSdeaffl65AvFlyZZNAuTwVc6FPhHON6mbn2fX3ZIsgoxEUZkg/viewform?embedded=true", children: "Loading\u2026" }) })] }) })] })] }));
}
;
