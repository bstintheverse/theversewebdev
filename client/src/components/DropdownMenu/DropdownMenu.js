import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//styling
import { Link } from "react-router-dom";
import "./DropdownMenu.scss";
// component
import MenuIcon from '@mui/icons-material/Menu';
export default function DropdownMenu() {
    return (_jsxs("div", { className: "dropdown", children: [_jsx("button", { className: "dropdown__button", children: _jsx(MenuIcon, { className: "dropdown__menu-icon" }) }), _jsx("div", { className: "dropdown__content", children: _jsxs("ul", { className: "dropdown__list", children: [_jsx("li", { className: "dropdown__item", children: _jsx(Link, { to: "/about-us", className: "dropdown__link", children: "About Us" }) }), _jsx("li", { className: "dropdown__item", children: _jsx(Link, { to: "/experiences", className: "dropdown__link", children: "Games & Digital Experiences" }) }), _jsx("li", { className: "dropdown__item", children: _jsx(Link, { to: "/our-people", className: "dropdown__link", children: "Our People" }) }), _jsx("li", { className: "dropdown__item", children: _jsx(Link, { to: "/contact-us", className: "dropdown__link", children: "Contact Us" }) })] }) })] }));
}
;
