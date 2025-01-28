import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./GameCard.scss";
;
export default function GameCard({ id, name, video, image, alt, description }) {
    return (_jsxs("li", { className: "game-card__item", children: [_jsxs("div", { className: "game-card__container", children: [_jsx("h2", { className: "game-card__header", children: name }), video ? (_jsx("video", { className: "game-card__video", controls: true, children: _jsx("source", { src: video }) })) : image ? (_jsx("img", { className: "game-card__image", src: image, alt: alt })) : null, _jsx("p", { className: "game-card__description", children: description })] }), _jsx("div", { className: "game-card__wrapper", children: _jsx("p", { className: "game-card__button", children: "Coming Soon" }) })] }, id));
}
;
