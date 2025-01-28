import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// libraries
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
// data
import { games } from "../../data/games";
export default function GamePage() {
    const { gameId } = useParams();
    const game = games.find((game) => game.id === Number(gameId));
    if (!game) {
        return _jsx("p", { children: "Game not found" });
    }
    ;
    return (_jsxs(HelmetProvider, { children: [_jsx(Helmet, { children: _jsxs("title", { children: ["The Verse | ", game.name] }) }), _jsx("section", { className: "game", children: game.name })] }));
}
;
