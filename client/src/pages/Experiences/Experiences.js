import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./Experiences.scss";
// component
import GameCard from "../../components/Cards/GameCard/GameCard";
// library
import { Helmet, HelmetProvider } from "react-helmet-async";
// data
import { games } from "../../data/games";
export default function ExperiencesPage() {
    return (_jsxs(HelmetProvider, { children: [_jsx(Helmet, { children: _jsx("title", { children: "The Verse | Experiences" }) }), _jsx("section", { className: "experiences", children: _jsx("article", { className: "experience__cards", children: _jsx("ul", { className: "experience__card-list", children: games.map((game) => (_jsx(GameCard, { id: game.id, name: game.name, video: game.video, image: game.image, alt: game.alt, description: game.description }, game.id))) }) }) })] }));
}
;
