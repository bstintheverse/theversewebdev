// styling
import "./Game.scss";

import { games } from "../../data/games";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero/Hero";

export default function GamePage() {
    const { gameId } = useParams();
    const game = games.find((game) => game.id === Number(gameId));

    if (!game) {
        return <p>Game not found</p>
    };

    return (
        <div>
            {game.name}
        </div>
    )
}