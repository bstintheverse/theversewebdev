import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./TeamMemberCard.scss";
;
export function TeamMemberFounderCard({ id, image, alt, name, role, location, description }) {
    return (_jsxs("li", { className: "member-card member-card__founder", children: [_jsxs("div", { className: "member-card__founder-wrapper-info", children: [_jsx("img", { className: "member-card__image", src: image, alt: alt }), _jsx("h3", { className: "member-card__founder-name", children: name }), _jsx("p", { className: "member-card__founder-role", children: role }), _jsx("p", { className: "member-card__founder-location", children: location })] }), _jsxs("div", { className: "member-card__founder-wrapper-description", children: [_jsx("h4", { className: "member-card__founder-subheader", children: "About" }), _jsx("p", { className: "member-card__founder-description", children: description })] })] }, id));
}
;
export function TeamMemberCard({ id, image, alt, name, role, location }) {
    return (_jsxs("li", { className: "member-card", children: [_jsx("img", { className: "member-card__image", src: image, alt: alt }), _jsx("h3", { className: "member-card__member-name", children: name }), _jsx("p", { className: "member-card__member-role", children: role }), _jsx("p", { className: "member-card__member-location", children: location })] }, id));
}
;
