import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./Hero.scss";
// data
import { games } from "../../data/games";
// hooks
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
export default function Hero() {
    const { gameId } = useParams();
    const location = useLocation();
    const [header, setHeader] = useState("");
    useEffect(() => {
        const getHeader = () => {
            console.log("Current Path:", location.pathname);
            console.log("Game ID:", gameId);
            if (location.pathname.startsWith("/experiences/game/") && gameId) {
                const game = games.find((g) => g.id === Number(gameId));
                if (game) {
                    return game.name;
                }
                else {
                    return "Game not found.";
                }
                ;
            }
            ;
            switch (location.pathname) {
                case "/":
                    return "What if games and digital experiences could make you feel happier, healthier, and more hopeful?";
                case "/about-us":
                    return "About Us";
                case "/experiences":
                    return "Games & Digital Experiences";
                case "/our-people":
                    return "Our People";
                case "/contact-us":
                    return "Contact Us";
                case "/donate":
                    return "Donate";
                case "/privacy":
                    return "Privacy";
                case "/terms":
                    return "Terms";
                case "/404":
                    return "Page Not Found";
                default:
                    return "";
            }
            ;
        };
        setHeader(getHeader());
    }, [location.pathname, gameId]);
    return (_jsxs("section", { className: "hero", children: [_jsx("video", { playsInline: true, autoPlay: true, muted: true, loop: true, className: "hero__video", children: _jsx("source", { src: "/assets/videos/hero.mp4", type: "video/mp4" }) }), _jsx("div", { className: "hero__content", children: _jsx("h1", { className: "hero__header", children: header }) })] }));
}
;
