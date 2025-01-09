// libraries
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// data
import { games } from "../../data/games";

export default function GamePage() {
    const { gameId } = useParams();
    const game = games.find((game) => game.id === Number(gameId));

    if (!game) {
        return <p>Game not found</p>
    };

    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    The Verse | {game.name}
                </title>
            </Helmet>
            
            <section className="game">
                {game.name}
            </section>
        </HelmetProvider>
    );
};