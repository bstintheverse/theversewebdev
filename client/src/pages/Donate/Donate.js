import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./Donate.scss";
// library
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function DonatePage() {
    return (_jsxs(HelmetProvider, { children: [_jsx(Helmet, { children: _jsx("title", { children: "The Verse | Donate" }) }), _jsxs("section", { className: "donate", children: [_jsxs("div", { className: "donate__container", children: [_jsx("h2", { className: "donate__subheader", children: "Coming Soon" }), _jsx("p", { className: "donate__text--white", children: "Our donation page is launching soon! We're working hard to make it easy for you to support our cause. Thank you for your interest in supporting our mission!" })] }), _jsx("div", { className: "donate__content", children: _jsx("img", { className: "donate__wip-gif", src: "/assets/images/wip.gif", alt: "Animated textbox with WIP text" }) })] })] }));
}
;
