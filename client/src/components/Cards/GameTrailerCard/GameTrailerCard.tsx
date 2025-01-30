// styling
import "./GameTrailerCard.scss";


// data
import { AdventuresInBreathGames } from "../../../data/adventuresInBreath";

export default function GameTrailerCard() {
    return (
        <article className="game-card__trailer">
            <ul className="game-card__list">
                {AdventuresInBreathGames.games.map((game) => (
                    <li className="game-card__item" key={game.id}>
                        <div className={`game-card__image-container game-card__image-container--${game.id}`}>
                            {game.assets.slice(0, 2).map((asset, index) => (
                                <img
                                    key={index}
                                    className="game-card__image"
                                    src={asset.image}
                                    alt={asset.alt}
                                />
                            ))}
                        </div>

                        <div className="game-card__info">
                            <h2 className="game-card__header">
                                {game.title}
                            </h2>

                            <p className="game-card__description">
                                {game.content}
                            </p>

                            <p className="game-card__button">
                                Watch Trailer
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
};