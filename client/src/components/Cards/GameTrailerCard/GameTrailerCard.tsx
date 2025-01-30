// styling
import "./GameTrailerCard.scss";


// data
import { AdventuresInBreathGames } from "../../../data/adventuresInBreath";
import { useState } from "react";
import Modal from "../../Modal/Modal";

export default function GameTrailerCard() {
    const [open, setOpen] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState<string>("");

    const handleOpen = (url: string) => {
        setVideoUrl(url);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleLearnMore = (game: any) => {
        const videoAsset = game.assets.find((asset) => asset.type === "video");

        if (videoAsset && videoAsset.video) {
            handleOpen(videoAsset.video);
        } else if (game.misc) {
            window.open(game.misc, "_blank");
        };
    };

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

                            <p 
                                className="game-card__button"
                                onClick={() => handleLearnMore(game)}
                            >
                                Learn More
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            <Modal isOpen={open} onClose={handleClose} videoUrl={videoUrl} />
        </article>
    );
};